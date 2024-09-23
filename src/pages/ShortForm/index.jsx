/**
 * 숏폼 조회 페이지
 * @author 최유경
 * @since 2024.09.05
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.05  	최유경       최초 생성
 * 2024.09.12   최유경       월별 조회
 * </pre>
 */

import React, { useState } from 'react';
import { BodyWrapper, Container, TitleWrapper } from './styled';
import { StyledButton } from '../../components/Button/styled';
import TabMenu, { shortFormTabItems } from '../../components/TabMenu';
import { useNavigate } from 'react-router';
import ShortFormList from '../../components/ShortFormList';

// 예시 컴포넌트
const WeekShortForm = () => <ShortFormList />;
const ReservationView = () => <div>예약 등록 화면</div>;

const ShortForm = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState('default'); // 현재 페이지 상태

    const handleOnclick = () => {
        navigate('/shortForm/register');
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
                return <ReservationView />; // 추가 페이지 컴포넌트
            default:
                return null;
        }
    };

    const renderTabContent = () => {
        switch (activeIndex) {
            case 0:
                return <WeekShortForm />;
            case 1:
                return <ReservationView />;
            default:
                return null;
        }
    };

    return (
        <Container>
            <TitleWrapper>
                숏폼 관리
                <StyledButton variant="addBtn" onClick={handleOnclick}>
                    추가
                </StyledButton>
            </TitleWrapper>
            <TabMenu tabItems={shortFormTabItems} activeIndex={activeIndex} onTabClick={handleTabClick} />
            <BodyWrapper>{renderContent()}</BodyWrapper>
        </Container>
    );
};

export default ShortForm;
