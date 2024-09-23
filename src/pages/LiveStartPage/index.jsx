/**
 * 실시간 강좌 시작 페이지
 * @author 김진규
 * @since 2024.09.09
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.09  	김진규       최초 생성
 * </pre>
 */

import React from 'react';
import { BodyWrapper, Container, TitleWrapper } from './styled';
import LiveStartComponent from '../../components/LiveStartComponent';

const LiveStartPage = () => {
  return (
    <Container>
      <TitleWrapper>강의 시작</TitleWrapper>
      <BodyWrapper>
        <LiveStartComponent />
      </BodyWrapper>
    </Container>
  );
};

export default LiveStartPage;
