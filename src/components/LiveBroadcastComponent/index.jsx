import React, { useEffect, useRef, useState } from "react";
import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-sdk-ng";
import { BroadcastWrapper, Container, DetailsWrapper, ErrorMessage, InfoSection, StreamDetail, StreamInfo, StreamStatus, StyledButton, VideoInfo, VideoPlaceholder, VideoSection } from "./styled";
import { useLocation } from "react-router";

const LiveBroadcastComponent = () => {
  const display = useRef(null);
  const location = useLocation();
  const { liveId, title } = location.state || {};
  const [status, setStatus] = useState(null);
  const [onAir, setOnAir] = useState(true);
  const [error, setError] = useState(null);

  const startLocalPreview = async () => {
    try {
      const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (display.current) {
        display.current.srcObject = localStream;
        display.current.play();
      }
    } catch (err) {
      setError("카메라 또는 마이크 권한이 필요합니다.");
    }
  };

  useEffect(() => {
    const client = createClient({ mode: "rtc", codec: "vp8" });
    const appId = process.env.REACT_APP_STREAMING_ID;
    const token = null;
    const channelName = liveId ? liveId.toString() : "null";

    async function startStream() {
      try {
        await client.join(appId, channelName, token, null);
        const [microphoneTrack, cameraTrack] = await createMicrophoneAndCameraTracks();
        await client.publish([microphoneTrack, cameraTrack]);
        setStatus(client);
      } catch (err) {
        setError("스트리밍 시작에 실패했습니다.");
      }
    }

    startStream();
    startLocalPreview();

    return () => {
      if (status) {
        status.leave();
      }
    };
  }, [liveId, title]);

  const endLive = () => {
    if (status) {
      status.leave();
      setOnAir(false);
    }
  }
  return (
    <Container>
      <BroadcastWrapper>
        <VideoSection>
          {error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : (
            onAir ? (
              <VideoInfo ref={display} autoPlay playsInline />
            ) : (
              <VideoPlaceholder>방송이 종료되었습니다.</VideoPlaceholder>
            )
          )}
        </VideoSection>

        <DetailsWrapper>
          <InfoSection>
            <h2>{title}</h2>
            <StreamStatus onAir={onAir}>
              {onAir ? "OnAir" : "End"}
            </StreamStatus>
          </InfoSection>
          
          <StreamInfo>
            <h3>스트리밍 정보</h3>
            <StreamDetail>
              <strong>방송 상태:</strong> {onAir ? "OnAir" : "End"}
            </StreamDetail>
            <StreamDetail>
              <strong>해상도:</strong> 640x480
            </StreamDetail>
            <StreamDetail>
              <strong>프레임 레이트:</strong> 15 fps
            </StreamDetail>
          </StreamInfo>
          
          <StyledButton onClick={endLive} disabled={!onAir}>
            {onAir ? "방송 종료하기" : "종료되었습니다"}
          </StyledButton>
        </DetailsWrapper>
      </BroadcastWrapper>
    </Container>
  );
};

export default LiveBroadcastComponent;