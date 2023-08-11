import classes from './index.module.scss';
import React from 'react';
import ImageSection from './_components/ImageSection';
import InfoSection from './_components/InfoSection';
import { useSelector } from 'react-redux';
import { selectRestaurantState } from '@/restaurantData/restaurantDataSlice';

const RestaurantInfo = () => {
    const { restaurantData } = useSelector(selectRestaurantState);
    return (
        <div className={classes.container}>
            {restaurantData.map(
                ({
                    data: { title, logo, backgroundImage, rate, cuisinesArray, deliveryFee, isZFExpress, commentCount, discountValueForView, menuUrl }
                }) => (
                    <div key={title} className={classes.container__restaurantInfo}>
                        <ImageSection title={title} logo={logo} backgroundImage={backgroundImage} />
                        <InfoSection
                            rate={rate}
                            isZFExpress={isZFExpress}
                            title={title}
                            deliveryFee={deliveryFee}
                            cuisinesArray={cuisinesArray}
                            commentCount={commentCount}
                            discountValueForView={discountValueForView}
                        />
                    </div>
                )
            )}
        </div>
    );
};
export default RestaurantInfo;
