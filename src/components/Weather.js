import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
import Display from "./Display";
import DisplayError from "./DisplayError";
import Forecast from "./Forecast";

let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
let cityname = sessionStorage.getItem("cityname");
let cityentered = "";
let checkError = false;

function Weather() {
  const [weathers, setWeather] = useState([]);

  useEffect(() => {
    const getCurrentWeather = () => {
      let lng = sessionStorage.getItem("lng");
      let lat = sessionStorage.getItem("lat");
      var API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
      cityentered = cityname;
      axios
        .get(API_URL)
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          setWeather("error");
          console.log(error);
        });
    };
    getCurrentWeather();
  }, [cityname]);

  function getweatherdata(city) {
    console.log(city);

    var API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    cityentered = city;
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
      checkError = true;
      return <DisplayError />;
    } else if (weathers.length != 0) {
      checkError = false;
      return <Display weatherData={weathers} />;
    }
  };

  return (
    <div>
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

        {showDisplay()}
      </div>

      <Forecast value={cityentered} checkError={checkError} />
    </div>
  );
}

export default Weather;
