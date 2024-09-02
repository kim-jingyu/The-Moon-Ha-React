import React, { useState } from 'react';
import { Container, LeftWrapper, LogoImage } from './styled';

import logo from '../../assets/images/logo.svg';

const Header = () => {
    return (
        <Container>
            <LogoImage src={logo} />
            <LeftWrapper>관리자페이지입니다!</LeftWrapper>
        </Container>
    );
};
export default Header;
