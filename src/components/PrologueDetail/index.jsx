import React, { useEffect, useState } from 'react';
import { Container, Wrapper } from './styled';
import CustomTable from '../Table';
import { fetchPrologueListAPI } from '../../apis/Craft';
import Player from '../Player';

const PrologueDetail = ({ prologueThemeId }) => {
    const [prologueList, setPrologueList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('prologueThemeId : ', prologueThemeId);
        // 데이터를 가져오는 함수
        const getPrologueList = async () => {
            try {
                const response = await fetchPrologueListAPI(prologueThemeId);

                console.log('fetchPrologueListAPI : ', response.data);
                setPrologueList(response.data); // 데이터를 상태로 저장
                setLoading(false); // 로딩 상태 해제
            } catch (err) {
                setError(err); // 에러 상태 설정
                setLoading(false);
            }
        };

        getPrologueList();
    }, []); // 컴포넌트가 마운트될 때 한 번만 실행

    return (
        <Container>
            <Wrapper>
                <CustomTable columns={columns} data={prologueList} shouldNavigate={false} hasPage={false} />
            </Wrapper>
        </Container>
    );
};

export default PrologueDetail;

const columns = [
    {
        title: '영상',
        dataIndex: 'videoUrl',
        key: 'videoUrl',
        width: '20px',
        render: (text, record) => <Player url={record.videoUrl} thumbnail={record.thumbnailUrl} />,
    },
    {
        title: '제목',
        dataIndex: 'title',
        key: 'title',
        width: '230px',
    },
    {
        title: '최종 업데이트',
        dataIndex: 'latestUpdateDate',
        key: 'latestDate',
        width: '120px',
    },
    {
        title: '좋아요 수',
        dataIndex: 'likeCnt',
        key: 'likeCnt',
        width: '100px',
    },
];
