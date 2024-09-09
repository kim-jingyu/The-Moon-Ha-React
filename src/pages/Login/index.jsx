import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BodyWrapper, Container, TitleWrapper } from './styled';
import TabMenu from '../../components/TabMenu';
import { StyledButton } from '../../components/Button/styled';
import LessonRegister from '../../components/LessonRegister';
import CustomLogin from '../../components/Login';

const tabItems = ['전체 조회', '과거 내역'];

// 예시 컴포넌트
const AllView = () => <div>전체 조회 화면</div>;
const PastRecords = () => <div>과거 내역 화면</div>;
const AddPage = () => <LessonRegister />;

const LoginPage = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState('default'); // 현재 페이지 상태

    const handleOnclick = () => {
        navigate('/lesson/register');
    };

    const handleTabClick = (index) => {
        setActiveIndex(index);
        setCurrentPage('default'); // 탭 클릭 시 기본 페이지로 전환
    };

    // 현재 페이지에 따라 렌더링할 내용을 결정
    const renderContent = () => {
        switch (currentPage) {
            case 'default':
                return renderTabContent();
            case 'add':
                return <AddPage />; // 추가 페이지 컴포넌트
            default:
                return null;
        }
    };

    const renderTabContent = () => {
        switch (activeIndex) {
            case 0:
                return <AllView />;
            case 1:
                return <PastRecords />;
            default:
                return null;
        }
    };

    return (
        <Container>
            <TitleWrapper></TitleWrapper>
            <BodyWrapper>
                <CustomLogin />
            </BodyWrapper>
        </Container>
    );
};

export default LoginPage;
