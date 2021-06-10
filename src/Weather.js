import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo.js"


export default function Weather(props) {
    const [WeatherData, setWeatherData] = useState({ ready : false });
    const [city, setCity] = useState(props.defualtCity);

    function showWeather(response) {
        setWeatherData({
            ready: true,
            date: new Date(response.data.dt * 1000),
            temperature: Math.round(response.data.main.temp),
            wind: Math.round(response.data.wind.speed),
            humidity: response.data.main.humidity,
            city: response.data.name,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
        });
    }

    function search() {
        const apiKey= "29ebab6de846a52578b47c84cda1eaf1";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(showWeather);
        
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
        
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (WeatherData.ready) {
        return (
            <div className="Body">
                    <div className="card">
                            <div className="row">
                                <div className="col-9 first-column">
                                    <form onSubmit={handleSubmit} >
                                        <input
                                        type="text"
                                        className="form-control w-100"
                                        placeholder="Enter City"
                                        autofocus="on"
                                        onChange={handleCityChange}
                                        />
                                    <div className="col-3">
                                        <button type="submit" className="btn btn-light btn-sm">Search</button>
                                        <button type="button" className="btn btn-info btn-sm">Current</button>
                                        </div>
                                    </form>
                                     <WeatherInfo data={WeatherData} />
                                         </div>{" "}
                                         </div>
                                         </div>
                                         </div>
        
            );

    } else {
       search();
        return (
            <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            />
        );
    }
}