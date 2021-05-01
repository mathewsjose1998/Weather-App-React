import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayError from "./DisplayError";
import "./Forecast.css";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
//let checkError = false;

function Forecast({ lat, lng, checkError }) {
  const [forecasts, setforecast] = useState([]);

  useEffect(() => {
    const getforecast = () => {
      var API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

      axios
        .get(API_URL)
        .then((response) => {
          setforecast(response.data.list);
        })
        .catch((error) => {
          console.log(error);
          //   checkError = true;
        });
    };
    getforecast();
  }, [lat]);

  const getWeatherImage = (weathertype) => {
    if (weathertype == "Clouds") return <i class="fas fa-cloud"></i>;
    else if (
      weathertype == "Mist" ||
      weathertype == "Haze" ||
      weathertype == "Smoke"
    )
      return <i class="fas fa-smog"></i>;
    else if (weathertype == "Clear") return <i class="far fa-sun"></i>;
    else if (weathertype == "Rain" || weathertype == "Snow")
      return <i class="fas fa-cloud-showers-heavy"></i>;
  };

  const handleforecast = () => {
    if (checkError == true) {
      return <div></div>;
    } else {
      return forecasts.map((item) => {
        let datetime = item.dt_txt.split(" ");
        let date = datetime[0].slice(5);
        let time = datetime[1].slice(0, 5);

        return (
          <div className="forecast">
            <div className="datetime">
              <div className="dates">{date},</div>
              <div className="times">{time}</div>
            </div>
            <div className="weathertype">{item.weather[0].description}</div>
            <div className="weather-images">
              {getWeatherImage(item.weather[0].main)}
            </div>
            <div className="temprature">{item.main.temp}°</div>
          </div>
        );
      });
    }
  };

  return (
    <div className="forecasts">
      <div className="forecast-title">Forecast</div>
      <div className="forecast-container">{handleforecast()}</div>
    </div>
  );
}

export default Forecast;
