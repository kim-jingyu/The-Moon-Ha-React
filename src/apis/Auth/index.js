import instance from '..';

export const LoginAPI = (loginRegister) => {
    return instance.post('/auth/login', loginRegister);
};
