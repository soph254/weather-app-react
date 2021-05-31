import React from "react";
import "./forecast.css";
import ForecastDate from "./ForecastDate";

export default function Forecast() {
    return (
        <div className="row forecast">
            <ForecastDate />
            <ForecastDate />
            <ForecastDate />
            <ForecastDate />
            <ForecastDate />
            <ForecastDate />
             </div>
    );
}