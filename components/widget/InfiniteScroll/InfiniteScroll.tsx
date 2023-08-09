import React, { useCallback, useEffect } from 'react';
import Skeleton from '../../UI/Skeleton';
import { useSelector } from 'react-redux';
import { selectRestaurantState } from '@/restaurantData/restaurantDataSlice';

type Props = {
    fetchRestaurantData: any;
};
const InfiniteScroll = ({ fetchRestaurantData }: Props) => {
    const { page } = useSelector(selectRestaurantState);
    console.log(window.innerHeight);
    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            fetchRestaurantData?.();
        }
    }, [fetchRestaurantData]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        if (page === 0) {
            fetchRestaurantData?.();
        }
    }, [fetchRestaurantData, page]);

    return (
        <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </>
    );
};

export default InfiniteScroll;
