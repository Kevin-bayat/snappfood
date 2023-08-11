import urls from './urls';
import { setApiOptions } from '@/utilities/services';
import { api } from '@/index';

export const getRestaurantsService = (queryParam) => {
    const options = setApiOptions(urls('getRestaurant'), { queryParam });
    return api({ ...options, baseURL: process.env.BASE_URL });
};
