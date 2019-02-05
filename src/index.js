import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';

/*
 * Component Lifecycle
 *
 * 1. Constructor - Good place to do initial setup.
 * 2. Render - Avoid doing anything besides returning JSX
 * x - Content visible on screen
 * 3. ComponentDidMount - Good place to do data-loading.
 * x - Sit an wait for updates...
 * 4. ComponentDidUpdate - Good place to do more data-loading when state/props change
 * x - Sit and wait until this component is no longer shown
 * 5. ComponentWillUnmount - Good place to do cleanup (especially non-React stuff).
 *
 */

const App = () => {

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

    let content;
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>;
    } else if (lat && lon) {
        content = <SeasonDisplay lat={lat} lon={lon} />;
    } else {
        content = <Spinner message="Please accept the location access request" />;
    }

    return <div className="border red">{content}</div>;
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
