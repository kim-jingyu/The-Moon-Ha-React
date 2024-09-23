/**
 * 프롤로그 등록 페이지
 * @author 최유경
 * @since 2024.09.06
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.06  	최유경       최초 생성
 * </pre>
 */

import React from 'react';
import { BodyWrapper, Container, TitleWrapper } from './styled';
import PrologueRegister from '../../components/PrologueRegister';

const PrologueRegisterPage = () => {
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
