import React, { useEffect } from 'react';
import Skeleton from '../../UI/Skeleton';
import { useSelector } from 'react-redux';
import { selectRestaurantState } from '@/restaurantData/restaurantDataSlice';
import Card from '../../UI/Card';

type Props = {
    fetchRestaurantData: any;
    isLoading: boolean;
};
const InfiniteScroll = ({ fetchRestaurantData, isLoading }: Props) => {
    const { page } = useSelector(selectRestaurantState);
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
            return;
        }
        fetchRestaurantData();
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        if (page === 0) {
            fetchRestaurantData?.();
        }
    }, [fetchRestaurantData, page]);

    return isLoading ? (
        <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </>
    ) : (
        <Card />
    );
};

export default InfiniteScroll;
