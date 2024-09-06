import React, { useState } from 'react';
import { BodyWrapper, Container, TitleWrapper } from './styled';
import ShortFormRegister from '../../components/ShortFormRegister';
const ShortFormRegisterPage = () => {
    return (
        <Container>
            <TitleWrapper>숏폼 관리</TitleWrapper>
            <BodyWrapper>
                <ShortFormRegister />
            </BodyWrapper>
        </Container>
    );
};

export default ShortFormRegisterPage;
