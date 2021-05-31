import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import Forecast from "./Forecast";
import FormattedDate from "./ForecastDate";
import Loader from "react-loader-spinner";

export default function Weather(props) {
    const [WeatherData, setWeatherData] = useState({ ready : false });

    function showWeather(response) {
        setWeatherData({
            ready: true,
            date: new Date(response.data.dt * 1000),
            temperature: Math.round(response.data.main.temp),
            wind: Math.round(response.data.wind.speed),
            humidity: response.data.main.humidity,
            city: response.data.name,
            description: response.data.weather[0].description,
            icon: "http://openweathermap.org/img/wn/01d@2x.png"
        });
    }

    if (WeatherData.ready) {
        return (
            <div className="Body">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6 first-column">
                                    <form id="search-city">
                                        <input
                                        type="text"
                                        className="form-control w-100"
                                        placeholder="Enter City"
                                        autofocus="on"
                                        />
                                        <div className="btn-group">
                                            <button type="submit" className="btn btn-primary btn-sm">
                                                Search
                                            </button>
                                            <button type="button" className="btn btn-success btn-sm" >
                                                Current
                                            </button>
                                            </div>{""}
                                            </form>
                                            <p className="updated">Last Updated:<br /><FormattedDate date={WeatherData.date}/><br /></p>
                                            </div>
        
        <div className="col-6 current-temperature">
                <div className="current-temperature">
                    <h2>{WeatherData.city}</h2>
                    <div className="row">
                        <div className="right-temperature-details">
                            <img src={WeatherData.icon}
                            alt={WeatherData.description}
                            className= "weatherIcon" />
                        </div>
                        <div className="right-temperature-details">
                            <span className="current-temp">{WeatherData.temperature}</span>
                            <sup>

                                {" "}
                                °C
                                {" "}
                                | {" "}
                            </sup>
                            <sup>
                            °F
                            </sup>
                        </div>
                        <h4 className="weatherDescription">{WeatherData.description}</h4></div>
                        <div className="humidity">
                            Humidity: {WeatherData.humidity}
                            <br />
                            Wind: {WeatherData.wind}{" "}

                            km/h
                            {" "}
                            | mph
                        </div>
                        </div>
                </div>
            </div>
            </div>
            <div className="row forecast">
                <Forecast />
            </div> {" "}
            </div>
            </div>
            </div>
        );
    }
    else {
        const apiKey= "29ebab6de846a52578b47c84cda1eaf1";
        let city = props.defaultCity;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showWeather);
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