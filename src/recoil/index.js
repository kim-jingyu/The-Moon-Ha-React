// recoilState.js
import { atom } from 'recoil';

// adminDataState Atom 정의
export const setUpDataState = atom({
    key: 'setupDataState',
    default: null,
});

export const authState = atom({
    key: 'authState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});
