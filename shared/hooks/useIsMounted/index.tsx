import React, { useEffect } from 'react';

//This hook used to check if the component is mounted or not
export const useIsMounted = () => {
    const isMounted = React.useRef(true);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    return isMounted;
};
