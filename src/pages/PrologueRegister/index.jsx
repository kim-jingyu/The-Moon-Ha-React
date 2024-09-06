import React, { useState } from 'react';
import { BodyWrapper, Container, TitleWrapper } from './styled';
import { StyledButton } from '../../components/Button/styled';
import { useNavigate } from 'react-router';
import PrologueRegister from '../../components/PrologueRegister';

const PrologueRegisterPage = () => {
    const navigate = useNavigate();

    const handleOnclick = () => {
        navigate('/prologue/register');
    };

    return (
        <Container>
            <TitleWrapper>프롤로그 관리</TitleWrapper>
            <BodyWrapper>
                <PrologueRegister />
            </BodyWrapper>
        </Container>
    );
};

export default PrologueRegisterPage;
