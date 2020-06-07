import React, { Component } from 'react'; /* Importacion de React del paquete react */
import transformWeather from '../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import { api_weather } from './../../constants/api_url';
import './styles.css';

class WeatherLocation extends Component {   /* se define la constante WeatherLocation  y se usa un Arrow Function que defien un functional component*/
    
    constructor() {
        super();
        this.state = {
            city: "La Paz",
            data: null,
        }
    }

    componentDidMount() {
        this.handleUpdateClick();
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
            {data ? <WeatherData data={data}></WeatherData> : "Cargando......"}
        </div>);
    }
};

export default WeatherLocation; /* para que el resto de la aplicacion lo pueda tener disponible  */