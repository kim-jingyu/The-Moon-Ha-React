import React, { useState } from 'react';
import { BodyWrapper, Container, TitleWrapper } from './styled';
import CustomLogin from '../../components/Login';

const LoginPage = () => {
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
