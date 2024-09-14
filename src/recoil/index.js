// recoilState.js
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// recoil-persist 설정
const { persistAtom } = recoilPersist({
    key: 'recoil-persist', // 저장소에 저장될 key 값
    storage: localStorage, // 로컬 스토리지에 저장 (세션 스토리지로 변경할 경우 sessionStorage 사용)
});

// adminDataState Atom 정의
export const setUpDataState = atom({
    key: 'setupDataState',
    default: null,
    effects_UNSTABLE: [persistAtom], // persist 설정 추가
});

export const authState = atom({
    key: 'authState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
    effects_UNSTABLE: [persistAtom], // persist 설정 추가
});
