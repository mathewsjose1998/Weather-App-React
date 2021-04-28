import React, { useState, useEffect } from "react";
import "./Display.css";
import WeatherDetail from "./WeatherDetail";
function Display({ weatherData }) {
  const [date, setDate] = useState("");

  useEffect(() => {
    const getDate = () => {
      let d = new Date();
      console.log(d);
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "Nocvember",
        "December",
      ];
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const currentDate = new Date();
      const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
        months[currentDate.getMonth()]
      }`;
      console.log(date);
      setDate(date);
    };
    getDate();
  }, []);

  const getUnixtime = (unix) => {
    var date = new Date(unix * 1000);
    var timestr = date.toLocaleTimeString();

    return timestr;
  };

  const getweatherImage = () => {
    if (weatherData.weather[0].main == "Clouds")
      return <i class="fas fa-cloud"></i>;
    else if (
      weatherData.weather[0].main == "Mist" ||
      weatherData.weather[0].main == "Haze" ||
      weatherData.weather[0].main == "Smoke"
    )
      return <i class="fas fa-smog"></i>;
    else if (weatherData.weather[0].main == "Clear")
      return <i class="far fa-sun"></i>;
    else if (
      weatherData.weather[0].main == "Rain" ||
      weatherData.weather[0].main == "Snow"
    )
      return <i class="fas fa-cloud-showers-heavy"></i>;
  };

  return (
    <div className="display-container">
      <div className="location">
        <div className="place_name">
          {weatherData.name},{weatherData.sys.country}
        </div>
        <div className="date">{date}</div>
        <div className="weather-container">
          <div className="weather-image">{getweatherImage()}</div>
          <div className="weather">
            <div className="temp">{weatherData.main.temp}°</div>
            <div className="weather-condition">
              {weatherData.weather[0].description}
            </div>
          </div>
        </div>
      </div>
      <div className="data-box">
        <WeatherDetail
          WeatherData={weatherData.main.temp_max}
          Weatherextn="°"
          WeatherDescription={"High"}
        />
        <WeatherDetail
          WeatherData={weatherData.wind.speed}
          Weatherextn="mph"
          WeatherDescription={"Wind"}
        />
        <WeatherDetail
          WeatherData={getUnixtime(weatherData.sys.sunrise)}
          Weatherextn=""
          WeatherDescription={"SunRise"}
        />
        <WeatherDetail
          WeatherData={weatherData.main.temp_min}
          Weatherextn="°"
          WeatherDescription={"Low"}
        />
        <WeatherDetail
          WeatherData={weatherData.main.humidity}
          Weatherextn=""
          WeatherDescription={"Humidity"}
        />
        <WeatherDetail
          WeatherData={getUnixtime(weatherData.sys.sunset)}
          Weatherextn=""
          WeatherDescription={"Sunset"}
        />
      </div>
    </div>
  );
}

export default Display;
