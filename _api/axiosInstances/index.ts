import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://snappfood.ir',
    timeout: 10000
});

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        return Promise.reject(error);
    }
);

export default axiosInstance;
