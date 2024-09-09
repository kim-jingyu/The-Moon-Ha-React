import React, { useEffect, useState } from 'react';
import { Container, Wrapper } from './styled';
import CustomTable from '../Table';
import { useNavigate } from 'react-router';
import { fetchLessonListAPI } from '../../apis/Lesson';

const LessonList = () => {
    const navigate = useNavigate();
    const [lessonList, setLessonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 데이터를 가져오는 함수
        const getPrologueThemeList = async () => {
            try {
                const response = await fetchLessonListAPI();

                setLessonList(response.data); // 데이터를 상태로 저장
                setLoading(false); // 로딩 상태 해제
            } catch (err) {
                setError(err); // 에러 상태 설정
                setLoading(false);
            }
        };

        getPrologueThemeList();
    }, []); // 컴포넌트가 마운트될 때 한 번만 실행

    const shouldNavigate = (record) => {
        return !!record.lessonId;
    };

    const handleRowClick = (record) => {
        if (shouldNavigate(record)) {
            const url = `/lesson/${record.lessonId}`;
            navigate(url, { state: { record } });
        } else {
            console.log('페이지 이동 조건을 충족하지 않음');
        }
    };

    return (
        <Container>
            <Wrapper>
                <CustomTable
                    columns={columns}
                    data={lessonList}
                    hasPage={true}
                    pagination="5"
                    shouldNavigate={shouldNavigate}
                    onRowClick={handleRowClick}
                />
            </Wrapper>
        </Container>
    );
};

export default LessonList;

const columns = [
    {
        title: '강좌명',
        dataIndex: 'title',
        key: 'title',
        width: '300px',
    },
    {
        title: '지점명',
        dataIndex: 'branchName',
        key: 'branchName',
        width: '120px',
    },
    {
        title: '카테고리',
        dataIndex: 'category',
        key: 'category',
        width: '100px',
    },
    {
        title: '강사',
        dataIndex: 'tutorName',
        key: 'tutorName',
        width: '80px',
    },
    {
        title: '회차',
        dataIndex: 'cnt',
        key: 'cnt',
        width: '80px',
    },
    {
        title: '기간',
        dataIndex: 'period',
        key: 'period',
        width: '150px',
        render: (text, record) => {
            const { startDate, endDate } = record;
            return `${startDate} ~ ${endDate}`;
        },
    },
    {
        title: '수업시간',
        dataIndex: 'lessonTime',
        key: 'lessonTime',
        width: '80px',
    },
    {
        title: '장소',
        dataIndex: 'place',
        key: 'place',
        width: '150px',
    },
    {
        title: '수강대상',
        dataIndex: 'target',
        key: 'target',
        width: '100px',
    },
    {
        title: '금액',
        dataIndex: 'cost',
        key: 'cost',
        width: '100px',
        render: (text, record) => {
            const { cost } = record;
            return `${cost} 원`;
        },
    },
];
