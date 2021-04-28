import React from "react";
import "./WeatherDetail.css";

function WeatherDetail({ WeatherData, WeatherDescription, Weatherextn }) {
  return (
    <div className="data-container">
      <div className="data">
        {WeatherData}
        {Weatherextn}
      </div>
      <div className="data_description">{WeatherDescription}</div>
    </div>
  );
}

export default WeatherDetail;
