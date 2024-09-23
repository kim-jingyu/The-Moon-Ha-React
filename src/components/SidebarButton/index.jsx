/**
 * SidebarButton 컴포넌트
 * @author 최유경
 * @since 2024.08.26
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.08.26  	최유경       최초 생성
 * </pre>
 */

import React, { useState } from 'react';
import { Container, Icon, MainButton, SubMenu, SubMenuLink } from './styled';

const SidebarButton = ({ name, icon, path, subBtn }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubMenu = (e) => {
        if (subBtn) {
            e.preventDefault(); // 서브 메뉴가 있을 때 링크의 기본 동작을 방지
            setIsOpen(!isOpen); // 서브 메뉴 열기/닫기
        }
    };

    return (
        <Container>
            <MainButton
                exact
                to={path}
                activeClassName="active"
                onClick={subBtn ? toggleSubMenu : null}
                style={{ cursor: 'pointer' }}
            >
                <Icon src={icon} alt={name} />
                {name}
            </MainButton>
            {subBtn && isOpen && (
                <SubMenu>
                    {subBtn.map((subItem, index) => (
                        <SubMenuLink key={index} to={subItem.to} activeClassName="active">
                            {subItem.label}
                        </SubMenuLink>
                    ))}
                </SubMenu>
            )}
        </Container>
    );
};

export default SidebarButton;
