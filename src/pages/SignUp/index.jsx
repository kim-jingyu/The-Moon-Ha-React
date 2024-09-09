import React, { useState } from 'react';
import { BodyWrapper, Container, TitleWrapper } from './styled';
import CustomSignUp from '../../components/SignUp';

const SignUpPage = () => {
    return (
        <Container>
            <TitleWrapper></TitleWrapper>
            <BodyWrapper>
                <CustomSignUp />
            </BodyWrapper>
        </Container>
    );
};

export default SignUpPage;
