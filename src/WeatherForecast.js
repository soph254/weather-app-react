import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import Forecast from "./Forecast";


export default function ForecastDate(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] =useState(null);

   useEffect(() => {
       setLoaded(false);
   }, [props.coordinates]);


    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

     if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 5) {
                            return(
                                <div className="col" key={index}>
                            <Forecast data={dailyForecast} />
                        </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );
        
     } else {
        
        let apiKey = "29ebab6de846a52578b47c84cda1eaf1";
        let longitude = props.coordinates.long;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return null;

     }
  
    
}