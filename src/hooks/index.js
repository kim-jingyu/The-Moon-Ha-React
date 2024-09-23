/**
 * 초기 데이터 세팅 recoil
 * @author 최유경
 * @since 2024.09.04
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.04  	최유경       최초 생성
 * </pre>
 */

import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { setUpDataState } from '../recoil';
import { fetchSetUpData } from '../apis/SetUp';

const useSetUpData = () => {
    const setUpData = useSetRecoilState(setUpDataState);

    return useQuery('data', fetchSetUpData, {
        onSuccess: (data) => {
            setUpData(data); // 데이터 성공 시 Recoil에 저장
        },
        onError: (error) => {
            console.error('Error fetching data:', error);
        },
    });
};

export default useSetUpData;
