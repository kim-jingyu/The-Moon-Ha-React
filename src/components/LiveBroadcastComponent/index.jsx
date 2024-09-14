import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container,
  StyledButton,
  BroadcastWrapper,
  InfoSection,
  StreamInfo,
  VideoInfo,
} from './styled';

const LiveBroadcastComponent = () => {
  const location = useLocation();
  const {
    liveId,
    title,
    streamKey,
    description,
    profileImgUrl,
    instructorName,
    thumbnailUrl,
    broadcastUrl,
    status,
    minutesAgo,
  } = location.state;

  const [peerConnection, setPeerConnection] = useState(null);
  const [isBroadcasting, setIsBroadcasting] = useState(true);
  const videoRef = useRef(null);

  let signalingSocket = null; // useEffect 바깥에서 선언

  return (
    <Container>
      <h1>{title} 라이브</h1>
      <BroadcastWrapper>
        <InfoSection>
          <img src={thumbnailUrl} alt="강의 썸네일" />
          <h2>{instructorName}</h2>
          <p>{description}</p>
          <p>생성된 지: {minutesAgo}분 전</p>
        </InfoSection>
        <StreamInfo>
          <h3>스트리밍 정보</h3>
          <p>방송 URL : {broadcastUrl}</p>
          <p>스트림 키 : {streamKey}</p>
          <p>현재 상태 : {status}</p>
        </StreamInfo>
      </BroadcastWrapper>
    </Container>
  );
};

export default LiveBroadcastComponent;