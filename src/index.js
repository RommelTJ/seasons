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

    return (
        <div>Hello World</div>
    );
};

// Class-Based Component.
class App extends React.Component {

    // Helper function
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>{this.state.errorMessage}</div>;
        } else if (this.state.lat && this.state.lon) {
            return <SeasonDisplay lat={ this.state.lat } lon={ this.state.lon } />;
        } else {
            return <Spinner message="Please accept the location access request" />;
        }
    }

    // React requires us to extend render.
    render() {
        return (
            <div>
                { this.renderContent() }
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
