import { useEffect, useState } from 'react';

const useLocation = () => {
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Getting GeoLocation
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            },
            (error) => {
                setErrorMessage(`Uh-oh! ${error.message}`);
            }
        );
    }, []);

    return [lat, lon, errorMessage];
};

export default useLocation;