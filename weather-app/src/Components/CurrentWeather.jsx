import React from 'react';
import './CurrentWeather.css';
import WetherIcon from './WeatherIcon';

const CurrentWeather = ({weatherData, units, locationName}) => {
    if (!weatherData){
        return (
            <div className='current-weather'>
                <p>Loading Weather data...</p>
            </div>
        );
    }

    //Extract data from API response
const {
    main: {temp, feels_like, humidity, pressure },
    wether,
    wind: {speed, deg},
    clouds,
    visibility,
    dt,
    sys: {sunrise, sunset}

} = weatherData;

const weatherCondition = weather[0];
const timestamp = new Date(dt * 1000);

//Convert sunrise/sunset timestamps to readable time
const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });
};

//get wind direction from degrees
const getWindDirection = (degrees) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
};


}

