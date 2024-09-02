import React, { useState } from 'react';
import { Container, TitleWrapper } from './styled';
import TabMenu from '../../components/TabMenu';
import { StyledButton } from '../../components/Button/styled';

const tabItems = ['전체 조회', '과거 내역'];

// 예시 컴포넌트
const AllView = () => <div>전체 조회 화면</div>;
const PastRecords = () => <div>과거 내역 화면</div>;

const Lesson = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const renderContent = () => {
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
            <TitleWrapper>
                강좌 관리
                <StyledButton variant="addBtn">추가</StyledButton>
            </TitleWrapper>
            <TabMenu tabItems={tabItems} activeIndex={activeIndex} onTabClick={setActiveIndex} />
            <div>{renderContent()}</div>
        </Container>
    );
};

export default Lesson;
