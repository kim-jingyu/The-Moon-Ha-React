import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #2e2e2e;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 60%;
  max-width: 600px;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 14px;
    color: #e0e0e0;
  }

  input,
  textarea,
  select {
    padding: 12px;
    border: 1px solid #3b3b3b;
    border-radius: 6px;
    background-color: #1c1c1c;
    color: white;
    outline: none;
    font-size: 16px;
    width: 100%;
  }

  textarea {
    resize: none;
    height: 100px;
  }

  input::file-selector-button {
    background-color: #424242;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #616161;
    }
  }
`;

export const SelectLesson = styled.select`
  padding: 12px;
  border: 1px solid #3b3b3b;
  border-radius: 6px;
  background-color: #1c1c1c;
  color: white;
  font-size: 16px;
  width: 100%;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #d32f2f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  width: 200px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c62828;
  }
  &:disabled {
    background-color: #757575;
    cursor: not-allowed;
  }
`;

export const ResultWrapper = styled.div`
  margin-top: 20px;
  text-align: center;

  h2 {
    margin-bottom: 10px;
    color: #00e676;
  }
`;