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
