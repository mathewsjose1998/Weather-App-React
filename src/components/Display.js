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
    if (weatherData.weather[0].main == "Clouds") {
      document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1482542307837-cb8c51cb106f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80')";

      return <i class="fas fa-cloud"></i>;
    } else if (
      weatherData.weather[0].main == "Mist" ||
      weatherData.weather[0].main == "Haze" ||
      weatherData.weather[0].main == "Smoke"
    ) {
      document.body.style.backgroundImage =
        "url('https://cdn.shopify.com/s/files/1/0765/0807/products/Dramatic_mountain_scene_wall_mural_mountain_wallpaper_removable_wallpaper_1800x1800.png.jpg?v=1569070306')";
      return <i class="fas fa-smog"></i>;
    } else if (weatherData.weather[0].main == "Clear") {
      document.body.style.backgroundImage =
        "url('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/383870/f42a85705dcb548ce6d26dc657630dc72b03d7d0.jpg')";
      return <i class="far fa-sun"></i>;
    } else if (
      weatherData.weather[0].main == "Rain" ||
      weatherData.weather[0].main == "Snow"
    ) {
      document.body.style.backgroundImage =
        "url('https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/11/enhanced/webdr04/longform-original-5558-1413560450-10.jpg?downsize=600:*&output-format=auto&output-quality=auto')";
      return <i class="fas fa-cloud-showers-heavy"></i>;
    }
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
