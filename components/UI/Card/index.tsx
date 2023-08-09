import React from 'react';
import classes from './index.module.scss';
import RestaurantInfo from '../../../containers/Restaurant/_components/RestaurantInfo';
import LinkButton from '../LinkButton';
const Card = () => {
    return (
        <div className={classes.container}>
            <LinkButton link='/'>برگشت به صفحه اصلی</LinkButton>
            <RestaurantInfo />
        </div>
    );
};
export default Card;
