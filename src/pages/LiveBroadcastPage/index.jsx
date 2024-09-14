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
