import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

// Functional Component.
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (error) => console.log(error)
//     );
//
//     return <div>Latitude: </div>;
//
// };

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

// Equivalent Class-Based Component.
class App extends React.Component {

    // This is not required, but we can use it to initialize state.
    // constructor(props) {
    //     super(props);
    //
    //     // Initializing state.
    //     this.state = { lat: null, lon: null, errorMessage: "" };
    // }

    // Alternate way to initialize state.
    state = { lat: null, lon: null, errorMessage: "" };

    componentDidMount() {
        // Getting GeoLocation
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude, lon: position.coords.longitude }),
            (error) => this.setState({ errorMessage: "Uh-oh! " + error.message })
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("My component was just updated. It re-rendered.")
    }

    // React requires us to extend render.
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>{this.state.errorMessage}</div>;
        } else if (this.state.lat && this.state.lon) {
            return <div>Lat: {this.state.lat}, Lon: {this.state.lon}</div>;
        } else {
            return <div>Loading...</div>;
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
