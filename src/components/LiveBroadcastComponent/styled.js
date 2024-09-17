import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #2e2e2e;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  color: white;
`;

export const BroadcastWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  height: auto;
`;

export const VideoSection = styled.div`
  flex: 2;
  margin-right: 20px;
`;

export const DetailsWrapper = styled.div`
  height: 560px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #3b3b3b;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  padding: 10px 20px;
  border-radius: 10px;
  width: 200px;
  margin-bottom: 20px;
  color: white;

  h2 {
    font-size: 22px;
    margin: 0;
  }
`;

export const StreamStatus = styled.div`
  font-weight: bold;
  color: ${(props) => (props.onAir ? "#00e676" : "#ff1744")};
  padding: 5px 10px;
  background-color: ${(props) => (props.onAir ? "#00e67633" : "#ff174433")};
  border-radius: 5px;
`;

export const StreamInfo = styled.div`
  margin-top: 20px;
  background-color: #424242;
  padding: 15px;
  border-radius: 10px;
  text-align: left;
  width: 210px;
  color: white;
`;

export const StreamDetail = styled.p`
  margin: 8px 0;
  font-size: 16px;
`;

export const VideoInfo = styled.video`
  width: 800px;
  height: 600px;
  border-radius: 10px;
  background-color: #000;
`;

export const VideoPlaceholder = styled.div`
  width: 800px;
  height: 600px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  border-radius: 10px;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #d32f2f;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  width: 100%;

  &:hover {
    background-color: #c62828;
  }
  
  &:disabled {
    background-color: #757575;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  width: 800px;
  height: 600px;
  background-color: #ffebee;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff5252;
  font-size: 18px;
  border-radius: 10px;
`;