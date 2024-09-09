import React, { useState } from 'react';
import { Container, LeftWrapper, LogoImage, RightWrapper, StyledLink } from './styled';

import logo from '../../assets/images/logo.svg';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState } from '../../recoil';
import Button from '../Button';

const Header = () => {
    const isAuthenticated = useRecoilValue(authState);
    const setAuthState = useSetRecoilState(authState);

    const handleLogout = () => {
        setAuthState(false);
    };

    return (
        <Container>
            <LeftWrapper>
                <LogoImage src={logo} />
                관리자페이지입니다!
            </LeftWrapper>
            <RightWrapper>
                {/* hello! */}
                {isAuthenticated ? (
                    <Button variant="logoutBtn" onClick={handleLogout}>
                        LOGOUT
                    </Button>
                ) : (
                    <StyledLink to="/login">LOGIN</StyledLink>
                )}
            </RightWrapper>
        </Container>
    );
};
export default Header;
