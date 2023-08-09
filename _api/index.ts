import axiosInstance from './axiosInstances';
import { errorHandler } from './errorHandler';

export const api = (options) => {
    return axiosInstance(options)
        .then((response) => {
            return response;
        })
        .catch((error) => errorHandler(error));
};
