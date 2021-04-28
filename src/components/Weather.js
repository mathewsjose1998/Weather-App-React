import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Display from "./Display";
import DisplayError from "./DisplayError";

let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

function Weather() {
  const [weathers, setWeather] = useState([]);

  function getweatherdata(city) {
    console.log(city);
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    axios
      .get(API_URL)
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
      })
      .catch((error) => {
        setWeather("error");
        console.log(weathers);
        console.log(error);
      });
  }

  const handleEnter = (e) => {
    if (e.key == "Enter") {
      console.log(e.target.value);

      getweatherdata(e.target.value);
    }
  };

  const showDisplay = () => {
    if (weathers == "error") {
      console.log("not found");
      return <DisplayError />;
    } else if (weathers.length != 0) {
      return <Display weatherData={weathers} />;
    }
  };

  return (
    <div className="container">
      <h2 className="title">Weather App </h2>
      <div className=" main-container">
        <div className="search">
          <i className="fas fa-search"></i>
          <input
            onKeyDown={handleEnter}
            type="text"
            placeholder="enter the location"
            className="input-box"
          ></input>
        </div>
      </div>
      {console.log(weathers.length)}
      {showDisplay()}
    </div>
  );
}

export default Weather;