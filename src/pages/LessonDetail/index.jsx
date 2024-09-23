/**
 * 숏폼 상세 페이지
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
