import React, { useState } from 'react';
import { Container, TabItem, TabList } from './styled';

const TabMenu = ({ tabItems, activeIndex, onTabClick }) => {
    return (
        <Container>
            <TabList>
                {tabItems.map((item, index) => (
                    <TabItem key={index} active={index === activeIndex} onClick={() => onTabClick(index)}>
                        {item}
                    </TabItem>
                ))}
            </TabList>
        </Container>
    );
};

export default TabMenu;

export const lessonTabItems = ['전체 조회', '과거 내역'];
export const shortFormTabItems = ['전체 조회', '예약 등록'];
