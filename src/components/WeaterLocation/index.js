import React from 'react'; /* Importacion de React del paquete react */
import Location from './Location';
import WeatherData from './WeatherData';
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
    temperature: 50,
    weatherState: SUN,
    humidity: 50,
    wind: '10 m/s',
}

const WeatherLocation = () => (   /* se define la constante WeatherLocation  y se usa un Arrow Function que defien un functional component*/
    //<div>Weather Localtion from here</div>   /* codigo JSX  en el cuerpo del componente */
    <div className="weatherLocationCont">
        <Location city={"La Paz"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);

export default WeatherLocation; /* para que el resto de la aplicacion lo pueda tener disponible  */