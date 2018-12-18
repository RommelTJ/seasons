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
        this.state = { lat: null };

        // Getting GeoLocation
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        );
    }

    // React requires us to extend render.
    render() {
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
