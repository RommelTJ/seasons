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
        return (
            <div>
                Latitude: {this.state.lat},
                Longitude: {this.state.lon},
                Error: {this.state.errorMessage}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
