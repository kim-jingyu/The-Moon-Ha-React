import React, { useState } from 'react';
import { BodyWrapper, Container, TitleWrapper } from './styled';
import LessonRegister from '../../components/LessonRegister';

const LessonRegisterPage = () => {
    return (
        <Container>
            <TitleWrapper>강좌 관리</TitleWrapper>
            <BodyWrapper>
                <LessonRegister />
            </BodyWrapper>
        </Container>
    );
};

export default LessonRegisterPage;
