/**
 * default instance 정의
 *
 * @author 최유경
 * @since 2024.09.03
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.03  	최유경       최초 생성
 * </pre>
 */

import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 10000,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
    },
});

export default instance;
