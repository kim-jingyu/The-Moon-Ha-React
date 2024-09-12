import React, { useState } from 'react';
import { Container, LeftWrapper, LogoImage, RightWrapper, StyledLink } from './styled';

import logo from '../../assets/images/logo.svg';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState } from '../../recoil';
import Button from '../Button';
import { LogOutAPI } from '../../apis/Auth';
import { notification } from 'antd';
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate();
    const isAuthenticated = useRecoilValue(authState);
    const setAuthState = useSetRecoilState(authState);

    const handleLogout = async () => {
        try {
            // 로그인 API 요청
            const response = await LogOutAPI();
            console.log('LogOutAPI response : ', response);
            if (response.data.success) {
                // 로그인 성공 시 localStorage에 저장
                localStorage.setItem('isLoggedIn', 'false');
                setAuthState(false);
                notification.success({ message: 'Logout successful!' }); // 성공 알림
                navigate('/login');
            } else {
                notification.error({ message: 'Login failed. Please try again.' }); // 실패 알림
            }
        } catch (error) {
            console.error('LogOutAPI error:', error);
            notification.error({ message: 'An error occurred. Please try again.' }); // 오류 알림
        }
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
                    <>
                        <StyledLink to="/login">LOGIN</StyledLink>/<StyledLink to="/signup">SIGNUP</StyledLink>
                    </>
                )}
            </RightWrapper>
        </Container>
    );
};
export default Header;
