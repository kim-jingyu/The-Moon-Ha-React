import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
