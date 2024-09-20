import axios from 'axios';
// import { getCookie } from '../utils/cookie';
const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 1000,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
    },
});

export default instance;
