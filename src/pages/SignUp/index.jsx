/**
 * 회원가입 페이지
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
