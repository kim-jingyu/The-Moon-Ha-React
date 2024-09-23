/**
 * 실시간 강좌 스트리밍 페이지
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
import LiveBroadComponent from '../../components/LiveBroadcastComponent';

const LiveBroadcastPage = () => {
  return (
    <Container>
      <TitleWrapper>강의 화면</TitleWrapper>
      <BodyWrapper>
        <LiveBroadComponent />
      </BodyWrapper>
    </Container>
  );
};

export default LiveBroadcastPage;
