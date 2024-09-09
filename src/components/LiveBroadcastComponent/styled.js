import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormItem = styled.div`
  margin-bottom: 20px;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const BroadcastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoSection = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const StreamInfo = styled.div`
  margin-top: 20px;
  text-align: left;
`;

export const VideoInfo = styled.video`
  width: '100%';
  height: 'auto';
`;
