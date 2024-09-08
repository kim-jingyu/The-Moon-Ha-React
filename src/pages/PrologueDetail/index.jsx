import React, { useState } from 'react';
import { BodyWrapper, Container, TitleWrapper } from './styled';
import { StyledButton } from '../../components/Button/styled';
import { useNavigate, useParams } from 'react-router';
import PrologueList from '../../components/PrologueList';
import PrologueDetail from '../../components/PrologueDetail';

const PrologueDetailPage = () => {
    const { prologueThemeId } = useParams();
    const navigate = useNavigate();

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
