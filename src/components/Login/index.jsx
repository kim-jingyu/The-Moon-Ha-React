import React from 'react';
import { Checkbox, Form, Input } from 'antd';
import Button from '../Button';
import { StyledForm, StyledFormItem, StyledInput, StyledPassword } from './styled';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const CustomLogin = () => {
    return (
        <StyledForm onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            <StyledFormItem
                label="아이디"
                name="username"
                rules={[
                    {
                        required: true,
                        message: '아이디를 입력해주세요.',
                    },
                ]}
            >
                <StyledInput />
            </StyledFormItem>

            <StyledFormItem
                label="비밀번호"
                name="password"
                rules={[
                    {
                        required: true,
                        message: '비밀번호를 입력해주세요.',
                    },
                ]}
            >
                <StyledPassword />
            </StyledFormItem>

            <StyledFormItem
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            ></StyledFormItem>

            <Button variant="registerBtn" htmlType="submit">
                로그인
            </Button>
        </StyledForm>
    );
};
export default CustomLogin;
