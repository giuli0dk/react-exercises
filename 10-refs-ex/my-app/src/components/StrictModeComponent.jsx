import { useEffect, useRef } from 'react';

const StrictModeComponent = () => {
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            console.log('Component mounted');
            isMounted.current = true;
        }
    }, []);

    return (
        <div>Component mounted</div>
    );
};

export default StrictModeComponent;