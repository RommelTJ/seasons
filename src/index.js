import React from 'react';
import ReactDOM from 'react-dom';

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

// Equivalent Class-Based Component.
class App extends React.Component {

    // This is not required, but we can use it to initialize state.
    constructor(props) {
        super(props);

        // Initializing state.
        this.state = { lat: null, lon: null, errorMessage: "" };

        // Getting GeoLocation
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // Calling setState
                this.setState({ lat: position.coords.latitude, lon: position.coords.longitude });
            },
            (error) => {
                this.setState({ errorMessage: "Uh-oh! " + error.message });
            }
        );
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
