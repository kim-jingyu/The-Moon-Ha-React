/**
 * 강좌 등록 페이지
 * @author 최유경
 * @since 2024.09.04
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.04  	최유경       최초 생성
 * </pre>
 */

import React from 'react';
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
