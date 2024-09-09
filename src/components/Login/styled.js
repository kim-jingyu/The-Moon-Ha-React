import { Form, Input } from 'antd';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

// Styled Components
export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 20px;
    width: 100%;
    // background-color: #f5f5f5;
    border-radius: 8px;
`;

export const StyledFormItem = styled(Form.Item)`
    margin-bottom: 24px;
    // background-color: ${colors.main_green};
    label {
        font-size: 18px;
        font-family: 'Happiness-Sans', sans-serif;
        font-weight: 400; /* Bold */
        color: ${colors.black};
        width: 100px;
        // background-color: ${colors.drak_gray};
    }
`;

export const StyledInput = styled(Input)`
    padding: 8px;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid ${colors.gray};
`;

export const StyledPassword = styled(Input.Password)`
    padding: 8px;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid ${colors.gray};
`;
