import instance from '..';

export const LoginAPI = (loginRegister) => {
    return instance.post('/auth/login', loginRegister);
};

export const SignUpAPI = (signUpRegister) => {
    return instance.post('/auth/signup', signUpRegister);
};

export const LogOutAPI = () => {
    return instance.post('/auth/logout');
};
