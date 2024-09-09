import React from 'react';
import { notification } from 'antd';
import Button from '../Button';
import { StyledForm, StyledFormItem, StyledInput, StyledPassword } from './styled';
import { useRecoilState } from 'recoil';
import { authState } from '../../recoil';
import { LoginAPI, SignUpAPI } from '../../apis/Auth';
import { useNavigate } from 'react-router';

const CustomSignUp = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log('들어옴?');
        try {
            const signUpRequest = {
                username: values.username,
                password: values.password,
                name: values.name,
                memberRole: 0,
            };
            // 로그인 API 요청
            console.log('SignUpAPI signUpRequest : ', Request);
            const response = await SignUpAPI(signUpRequest);
            console.log('SignUpAPI response : ', response);
            if (response.data.success) {
                // 로그인 성공 시 localStorage에 저장
                localStorage.setItem('signUp success', 'true');
                notification.success({ message: 'SignUpAPI successful!' }); // 성공 알림
                navigate('/login');
            } else {
                notification.error({ message: 'SignUpAPI failed. Please try again.' }); // 실패 알림
            }
        } catch (error) {
            console.error('SignUpAPI error:', error);
            notification.error({ message: 'An error occurred. Please try again.' }); // 오류 알림
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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
                label="이름"
                name="name"
                rules={[
                    {
                        required: true,
                        message: '이름을 입력해주세요.',
                    },
                ]}
            >
                <StyledInput />
            </StyledFormItem>

            <Button variant="registerBtn" type="submit">
                회원가입
            </Button>
        </StyledForm>
    );
};
export default CustomSignUp;
