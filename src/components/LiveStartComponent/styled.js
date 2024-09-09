import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 15px;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-bottom: 8px;
    font-weight: bold;
  }

  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  textarea {
    resize: none;
    height: 100px;
  }
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: #00805a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: auto;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const SelectLesson = styled.select`
  width: 100px;
`;

export const ResultWrapper = styled.div`
  margin-top: 20px;
  text-align: center;

  h2 {
    margin-bottom: 10px;
    color: #007bff;
  }
`;
