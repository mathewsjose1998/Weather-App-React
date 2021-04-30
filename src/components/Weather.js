import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
import Display from "./Display";
import DisplayError from "./DisplayError";
import Forecast from "./Forecast";
import AutoComplete from "./AutoComplete";

let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
let cityname = sessionStorage.getItem("cityname");
let cityentered = "";
let checkError = false;
let latforecast = "";
let lngforecast = "";

function Weather() {
  const [weathers, setWeather] = useState([]);

  useEffect(() => {
    const getCurrentWeather = () => {
      let lng = sessionStorage.getItem("lng");
      let lat = sessionStorage.getItem("lat");
      var API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
      cityentered = cityname;
      latforecast = lat;
      lngforecast = lng;
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
  }, []);

  //useEffect for search

  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDYgoKKT7IsOpHwfxBdQE-TsHk4h_vw6OQ&libraries=places";
    googleMapScript.async = true;

    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
      initAutoComplete();
    });
  }, []);

  let autocomplete;
  function initAutoComplete() {
    autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      {
        fields: ["place_id", "geometry", "name"],
      }
    );
    autocomplete.addListener("place_changed", onPlaceChanged);
  }
  function onPlaceChanged() {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      document.getElementById("autocomplete").placeholder = "Enter a Place";
    } else {
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());

      getweatherdata(
        place.geometry.location.lat(),
        place.geometry.location.lng(),
        place.name
      );
    }
  }

  function getweatherdata(lat, lng, city) {
    var API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    cityentered = city;
    latforecast = lat;
    lngforecast = lng;
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
              id="autocomplete"
              type="text"
              placeholder="enter the location"
              className="input-box"
            ></input>
          </div>
        </div>

        {showDisplay()}
      </div>

      <Forecast lat={latforecast} lng={lngforecast} checkError={checkError} />
    </div>
  );
}

export default Weather;
