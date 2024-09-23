/**
 * 프롤로그 상세 조회 페이지
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

import React, { useState } from 'react';
import { BodyWrapper, Container, TitleWrapper } from './styled';
import { StyledButton } from '../../components/Button/styled';
import { useNavigate, useParams } from 'react-router';
import PrologueDetail from '../../components/PrologueDetail';

const PrologueDetailPage = () => {
    const { prologueThemeId } = useParams();
    return (
        <Container>
            <TitleWrapper>프롤로그 관리</TitleWrapper>
            <BodyWrapper>
                <PrologueDetail prologueThemeId={prologueThemeId} />
            </BodyWrapper>
        </Container>
    );
};

export default PrologueDetailPage;
