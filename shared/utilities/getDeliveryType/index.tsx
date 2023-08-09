import { EXPRESS_DELIVERY, SELLER_DELIVERY } from '@/constants/restaurant';

export const getDeliveryType = ({ isExpress }) => {
    return isExpress ? EXPRESS_DELIVERY : SELLER_DELIVERY;
};
