import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeaterTemperature';

const WeatherData = ({data : {temperature, weatherState, humidity, wind}}) => { /*forma mas directa para obtener los paramaetros */
    //const {temperature, weatherState, humidity, wind} = data; /* Tb sirve esta forma */
    return(<div className="weatherDataCont">        
        <WeatherTemperature 
            temperature={temperature} 
            weatherState={weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>);
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherData;