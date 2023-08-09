export const setApiOptions = (url, dataObject) => {
    const queryParam = dataObject?.queryParam;
    const bodyParam = dataObject?.bodyParam;

    return {
        method: 'GET',
        url,
        params: queryParam,
        data: bodyParam
    };
};
