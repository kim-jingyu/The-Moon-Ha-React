import React, { useEffect, useState } from 'react';
import { Container, Wrapper } from './styled';
import CustomTable from '../Table';
import { fetchPrologueThemeListAPI } from '../../apis/Craft';
import { useNavigate } from 'react-router';

const PrologueList = () => {
    const navigate = useNavigate();
    const [themeList, setThemeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 데이터를 가져오는 함수
        const getPrologueThemeList = async () => {
            try {
                const response = await fetchPrologueThemeListAPI();

                setThemeList(response.data); // 데이터를 상태로 저장
                setLoading(false); // 로딩 상태 해제
            } catch (err) {
                setError(err); // 에러 상태 설정
                setLoading(false);
            }
        };

        getPrologueThemeList();
    }, []); // 컴포넌트가 마운트될 때 한 번만 실행

    const shouldNavigate = (record) => {
        return !!record.prologueThemeId; // 예를 들어, prologueThemeId가 존재하는지 확인
    };

    const handleRowClick = (record) => {
        if (shouldNavigate(record)) {
            const url = `/prologue/${record.prologueThemeId}`;
            navigate(url);
        } else {
            console.log('페이지 이동 조건을 충족하지 않음');
        }
    };

    return (
        <Container>
            <Wrapper>
                <CustomTable
                    columns={columns}
                    data={themeList}
                    hasPage={true}
                    pagination="5"
                    shouldNavigate={shouldNavigate}
                    onRowClick={handleRowClick}
                />
            </Wrapper>
        </Container>
    );
};

export default PrologueList;

const columns = [
    {
        title: '테마',
        dataIndex: 'name',
        key: 'name',
        width: '17%',
    },
    {
        title: '설명',
        dataIndex: 'description',
        key: 'description',
        width: '25%',
    },
    {
        title: '영상 수',
        dataIndex: 'videoCnt',
        key: 'videoCnt',
        width: '5%',
    },
    {
        title: '최종 업데이트',
        dataIndex: 'latestUpdateDate',
        key: 'latestDate',
        width: '15%',
    },
    {
        title: '담당자',
        dataIndex: 'writer',
        key: 'writer',
        width: '10%',
    },
    {
        title: '기간',
        dataIndex: 'period',
        key: 'period',
        width: '18%',
    },
    {
        title: '상태',
        dataIndex: 'themeStatus',
        key: 'themeStatus',
        width: '10%',
    },
];
