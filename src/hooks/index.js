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
