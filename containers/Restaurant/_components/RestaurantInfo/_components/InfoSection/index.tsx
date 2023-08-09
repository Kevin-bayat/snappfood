import classes from './index.module.scss';
import { getDeliveryType } from '@/utilities/getDeliveryType';
import { BadgeSvg } from './_svg/BadgeSvg';
import { FREE_DELIVERY_NAME } from '@/constants/restaurant';
import { RateSvg } from './_svg/RateSvg';

const InfoSection = ({ rate, title, commentCount, cuisinesArray, isZFExpress, deliveryFee, discountValueForView }) => {
    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <div className={classes.container__discount}>
                    <h3 className={classes.container__title}>{title}</h3>
                    {discountValueForView > 0 && (
                        <>
                            <div className={classes.container__discountBadge}>
                                تا
                                {discountValueForView} %
                            </div>
                            <BadgeSvg />
                        </>
                    )}
                </div>
                <div className={classes.container__commentInfo}>
                    <div className={classes.container__commentCount}>({commentCount})</div>
                    <div className={classes.container__rate}>
                        <span>{rate}</span>
                        <RateSvg />
                    </div>
                </div>
            </div>
            <div className={classes.container__foodName}>
                {cuisinesArray?.map((type) => (
                    <p className={classes.container__type} key={type.id}>
                        {type.title}
                    </p>
                ))}
            </div>
            <div className={classes.container__pickup}>
                <div className={classes.container__deliveryType}>{getDeliveryType({ isExpress: isZFExpress })}</div>
                {deliveryFee > 0 ? <span> {deliveryFee} تومان </span> : <span>{FREE_DELIVERY_NAME}</span>}
            </div>
        </div>
    );
};
export default InfoSection;
