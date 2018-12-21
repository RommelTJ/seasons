import React from 'react';

const getSeason = (lat, month) => {
    // Implement me
    return "Winter";
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    return <div>Season Display: {season}</div>;
};

export default SeasonDisplay;
