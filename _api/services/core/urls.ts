const url = {
    getRestaurant: '/mobile/v3/restaurant/vendors-list'
};

const urls = (name) => {
    return url[name];
};

export default urls;
