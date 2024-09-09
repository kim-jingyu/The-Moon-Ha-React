import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, StyledButton, FormItem, FormWrapper, BroadcastWrapper, InfoSection, StreamInfo } from './styled';

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

  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [websocket, setWebsocket] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  useEffect(() => {
    if (isBroadcasting && streamKey) {
      const websocket = new WebSocket(`ws://localhost:8080/streaming?streamKey=${streamKey}`);

      websocket.onopen = () => {
        console.log('WebSocket 연결 성공');
      };

      websocket.onmessage = (message) => {
        console.log('서버로부터 메시지 수신: ', message.data);
      };

      websocket.onerror = (error) => {
        console.error('WebSocket 에러 발생: ', error);
      };

      websocket.onclose = () => {
        console.log('WebSocket 연결 종료');
      };

      setWebsocket(websocket);
      startMediaStream(websocket);

      return () => {
        if (websocket) {
          websocket.close();
        }
      };
    }
  }, [isBroadcasting, streamKey]);

  const startMediaStream = async (websocket) => {
    try {
      const stream = await navigator.mediaDevices.getuserMedia({
        video: true,
        audio: true,
      });

      const videoElement = document.querySelector('video');
      if (videoElement) {
        videoElement.srcObject = stream;
        videoElement.play();
      }

      const recorder = new MediaRecorder(stream, {
        mimeType: 'video/webm; codecs="vp8,opus"',
      });

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0 && websocket.readyState === WebSocket.OPEN) {
          websocket.send(event.data);
        }
      };

      recorder.start(1000);
      setMediaRecorder(recorder);
    } catch (error) {
      console.error('미디어 스트림을 가져오는 중 에러 발생: ', error);
    }
  };

  const startLiveLesson = () => {
    setIsBroadcasting(true);
  };

  const stopLiveLesson = () => {
    setIsBroadcasting(false);
    if (websocket) {
      websocket.close();
    }
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
  };

  return (
    <Container>
      <h1>{title} 라이브</h1>
      <BroadcastWrapper>
        <InfoSection>
          <img src={thumbnailUrl} alt="강의 썸네일" />
          <h2>{instructorName}</h2>
          <p>{description}</p>
          <p>생성된 지: {minutesAgo}분 전</p>
          {!isBroadcasting ? (
            <StyledButton onClick={startLiveLesson}>방송 시작</StyledButton>
          ) : (
            <StyledButton onClick={stopLiveLesson}>방송 종료</StyledButton>
          )}
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
