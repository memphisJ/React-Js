import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../../../constants/weathers';
import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";

    if (icon){
        return <WeatherIcons calssName="wicon" name={icon} size={sizeIcon}/>;
    } else {
        return <WeatherIcons calssName="wicon" name={"day-sunny"} size={sizeIcon}/>;
    }
    
}

const WeaterTemperature = ({temperature,weatherState}) => (
    <div className="weaterTemperatureCont">
        { getWeatherIcon(weatherState) }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
);

WeaterTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};
export default WeaterTemperature;