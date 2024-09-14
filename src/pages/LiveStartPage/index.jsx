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
