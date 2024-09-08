import React, { useState } from 'react';
import { BodyWrapper, Container, TitleWrapper } from './styled';
import { StyledButton } from '../../components/Button/styled';
import { useNavigate } from 'react-router';

const Prologue = () => {
    const navigate = useNavigate();

    const handleOnclick = () => {
        navigate('/prologue/register');
    };

    return (
        <Container>
            <TitleWrapper>
                프롤로그 관리
                <StyledButton variant="addBtn" onClick={handleOnclick}>
                    추가
                </StyledButton>
            </TitleWrapper>
            <BodyWrapper>프롤로그 테마 리스트</BodyWrapper>
        </Container>
    );
};

export default Prologue;
