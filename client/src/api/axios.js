import axios from 'axios';
const BASE_URL = 'https://wlsrr6nxdtxbrryyca6abxbnw40zmugq.lambda-url.eu-west-1.on.aws/';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});