import React, { Component } from 'react'; /* Importacion de React del paquete react */
import transformWeather from '../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import { api_weather } from './../../constants/api_url';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from '../../constants/weathers';

const data = {
    temperature: 10,
    weatherState: SUN,
    humidity: 50,
    wind: '10 m/s',
}

class WeatherLocation extends Component {   /* se define la constante WeatherLocation  y se usa un Arrow Function que defien un functional component*/
    
    constructor() {
        super();
        this.state = {
            city: "La Paz",
            data: data,
        }
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            });
        });
    }

    render() {
        const {city, data} = this.state;
        return (
        <div className="weatherLocationCont">
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>);
    }
};

export default WeatherLocation; /* para que el resto de la aplicacion lo pueda tener disponible  */