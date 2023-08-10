import React, { useCallback, useState } from 'react';
import classes from './index.module.scss';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useDispatch, useSelector } from 'react-redux';
import { incrementPage, selectRestaurantState, setRestaurantDataAction } from '@/restaurantData/restaurantDataSlice';
import { getRestaurantsService } from '@/services/core/methods';
import { VENDOR_TYPE } from '@/constants/restaurant';
import InfiniteScroll from '../../components/widget/InfiniteScroll';

const Restaurant = () => {
    //state
    const [isLoading, setIsLoading] = useState(false);
    //redux
    const { page } = useSelector(selectRestaurantState);
    const dispatch = useDispatch();
    //hook
    const isMounted = useIsMounted();

    const queryParam = {
        page: 0,
        page_size: 10,
        lat: 35.754,
        long: 51.328
    };

    const fetchRestaurantData = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await getRestaurantsService({ ...queryParam, page });
            const filteredData = response.data.data.finalResult.filter((item) => {
                if (item.type === VENDOR_TYPE) {
                    return item.data;
                }
            });
            dispatch(setRestaurantDataAction(filteredData));
            dispatch(incrementPage());
        } catch (e) {
        } finally {
            isMounted?.current && setIsLoading(false);
        }
    }, [dispatch, page]);

    return (
        <div className={classes.container}>
            <InfiniteScroll isLoading={isLoading} fetchRestaurantData={fetchRestaurantData} />
        </div>
    );
};
export default Restaurant;
