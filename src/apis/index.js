import axios from 'axios';
// import { getCookie } from '../utils/cookie';
const instance = axios.create({
    baseURL: 'https://themoonha.site',
    timeout: 10000,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
    },
});

export default instance;
