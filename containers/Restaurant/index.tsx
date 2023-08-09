import React, { useEffect, useState } from 'react';
import Card from '../../components/UI/Card';
import classes from './index.module.scss';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useDispatch, useSelector } from 'react-redux';
import { incrementPage, selectRestaurantState, setRestaurantDataAction } from '@/restaurantData/restaurantDataSlice';
import { getRestaurantsService } from '@/services/core/methods';
import { VENDOR_TYPE } from '@/constants/restaurant';
import Skeleton from '../../components/UI/Skeleton';
import InfiniteScroll from '../../components/widget/InfiniteScroll/InfiniteScroll';

const Restaurant = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { page } = useSelector(selectRestaurantState);

    const dispatch = useDispatch();
    const queryParam = {
        page: 0,
        page_size: 10,
        lat: 35.754,
        long: 51.328
    };

    const isMounted = useIsMounted();
    console.log(incrementPage(), 'incrementPage');
    const fetchRestaurantData = () => {
        getRestaurantsService({ ...queryParam, page })
            .then((response) => {
                if (isMounted?.current) {
                    const filteredData = response.data.data.finalResult.filter((item) => {
                        if (item.type === VENDOR_TYPE) {
                            return item.data;
                        }
                    });
                    dispatch(setRestaurantDataAction(filteredData));
                    dispatch(incrementPage());
                }
            })
            .catch(() => {})
            .finally(() => isMounted?.current && setIsLoading(false));
    };

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    return isLoading ? (
        <Skeleton />
    ) : (
        <div className={classes.container}>
            <Card />
            <InfiniteScroll fetchRestaurantData={fetchRestaurantData} />
        </div>
    );
};
export default Restaurant;
