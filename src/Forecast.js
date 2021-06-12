import React from "react";
import "./forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
 function maxTemperature() {
     let temperature = Math.round(props.data.temp.max);
     return `${temperature}°`;
}
function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`
}
function day() {
    let date = new Date(props.date.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

    return days[day];
}
    return (
        <div className="WeatherForecast-day"> {day()}
        <WeatherIcon code={props.data[0].weather[0].icon} size={36} />
        <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">{maxTemperature()}°</span>
            <span className="WeatherForecast-temperature-min">{minTemperature()}°</span>
        </div>
        </div> 
    );
}