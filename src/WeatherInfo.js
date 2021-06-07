import React from "react";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
<div className="col-6 current-temperature">
                <div className="current-temperature">
                    <h2>{props.data.city}</h2>
                    <FormattedDate date = {props.data.date} />
                    <div className="row">
                        <div className="right-temperature-details">
                            <div className="float-left">
                            <WeatherIcon code={props.data.icon} />
                            </div>
                        </div>
                        <div className="float-left">
                            <WeatherTemperature celcius={props.data.temperature} />
                            <span className="current-temp">{props.data.temperature}</span>
                           
                        </div>
                        <h4 className="weatherDescription">{props.data.description}</h4></div>
                        <div className="humidity">
                            Humidity: {props.data.humidity}
                            <br />
                            Wind: {props.data.wind}{" "}

                            km/h
                            {" "}
                            | mph
                        </div>
                        </div>
                </div>
            <div className="row forecast">
                <Forecast />
            </div> {" "}
            </div>
            );
            
        
}



