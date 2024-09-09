import React, { useState } from 'react';
import { BodyWrapper, Container, TitleWrapper } from './styled';
import { useLocation, useParams } from 'react-router';
import LessonDetail from '../../components/LessonDetail';

const LessonDetailPage = () => {
    const { lessonId } = useParams();
    const location = useLocation();
    const { record } = location.state || {};

    return (
        <Container>
            <TitleWrapper>강좌 관리</TitleWrapper>
            <BodyWrapper>
                <LessonDetail record={record} lessonId={lessonId} />
            </BodyWrapper>
        </Container>
    );
};

export default LessonDetailPage;
