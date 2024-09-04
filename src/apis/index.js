import axios from 'axios';
// import { getCookie } from '../utils/cookie';
const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
    },
});

export default instance;
