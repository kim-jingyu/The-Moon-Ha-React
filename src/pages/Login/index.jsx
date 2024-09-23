/**
 * 로그인 페이지
 * @author 최유경
 * @since 2024.09.09
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.09  	최유경       최초 생성
 * </pre>
 */

import React from 'react';
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
