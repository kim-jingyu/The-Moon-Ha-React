import React, { useEffect } from 'react';
import useSetUpData from '../../hooks';
import { useRecoilValue } from 'recoil';

import { Container } from './styled';
import { setUpDataState } from '../../recoil';

const Main = () => {
    const { isLoading, error } = useSetUpData();
    const setUpData = useRecoilValue(setUpDataState);

    // 데이터가 없으면 로딩 상태를 유지
    useEffect(() => {
        if (!setUpData) {
            // 만약 데이터가 없다면 서버로부터 데이터를 가져오는 로직이 실행됨
        }
    }, [setUpData]);

    // 로딩 중인 경우 로딩 화면을 보여줌
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    return (
        <Container>
            <h1>SetUp Data</h1>
            <pre>{JSON.stringify(setUpData, null, 2)}</pre> {/* 데이터를 출력 */}
        </Container>
    );
};

export default Main;
