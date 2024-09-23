/**
 * 회원 관련 연결
 *
 * @author 최유경
 * @since 2024.09.04
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.09 	최유경       최초 생성
 * 2024.09.13   최유경       로그아웃
 * </pre>
 */

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
