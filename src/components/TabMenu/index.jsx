/**
 * Tab 컴포넌트
 * @author 최유경
 * @since 2024.09.03
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.03  	최유경       최초 생성
 * </pre>
 */

import React from 'react';
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
