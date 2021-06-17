import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="current-temperature">
                <div className="current-temperature">
                    <div className="float-right">
                    <h2>{props.data.city}</h2>
                    <FormattedDate date = {props.data.date} />
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="right-temperature-details">
                                <div className="float-left">
                                    <WeatherIcon code={props.data.icon} size={52} />
                                    <h4 className="weatherDescription">{props.data.description}</h4>
                                </div>
                            </div>
                        </div>    
                        <div className="col-sm-4">
                            <div className="float-left">
                                <WeatherTemperature celcius={props.data.temperature} />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="float-left">
                            <div className="humidity">
                                Humidity: {props.data.humidity}
                                <br/>
                                Wind: {props.data.wind}{" "}
                                km/h {" "} mph
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
            
        
}



