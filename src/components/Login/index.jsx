import React from 'react';
import { notification } from 'antd';
import Button from '../Button';
import { StyledForm, StyledFormItem, StyledInput, StyledPassword } from './styled';
import { useRecoilState } from 'recoil';
import { authState } from '../../recoil';
import { LoginAPI } from '../../apis/Auth';
import { useNavigate } from 'react-router';

const CustomLogin = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(authState);

    const onFinish = async (values) => {
        console.log('들어옴?');
        try {
            const loginRequest = {
                username: values.username,
                password: values.password,
            };
            // 로그인 API 요청
            console.log('LoginAPI loginRequest : ', loginRequest);
            const response = await LoginAPI(loginRequest);
            console.log('LoginAPI response : ', response);
            if (response.data.success) {
                // 로그인 성공 시 localStorage에 저장
                localStorage.setItem('isLoggedIn', 'true');
                setIsLoggedIn(true);
                notification.success({ message: 'Login successful!' }); // 성공 알림
                navigate('/lesson');
            } else {
                notification.error({ message: 'Login failed. Please try again.' }); // 실패 알림
            }
        } catch (error) {
            console.error('Login error:', error);
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
            <Button variant="registerBtn" type="submit">
                로그인
            </Button>
        </StyledForm>
    );
};
export default CustomLogin;
