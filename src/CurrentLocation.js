import React, { useEffect } from "react";

function CurrentLocation() {
  useEffect(() => {
    function currentloctionGen() {
      if (navigator.geolocation) {
        // Request the current position
        // If successful, call getPosSuccess; On error, call getPosErr
        navigator.geolocation.getCurrentPosition(getPosSuccess, getPosErr);
        //  alert('yoyyoyo')
      } else {
        alert("geolocation not available?! What year is this?");
        // IP address or prompt for city?
      }
    }
    currentloctionGen();
  }, []);

  function getPosSuccess(pos) {
    // Get the coordinates and accuracy properties from the returned object
    var geoLat = pos.coords.latitude.toFixed(5);
    var geoLng = pos.coords.longitude.toFixed(5);
    var geoAcc = pos.coords.accuracy.toFixed(1);

    sessionStorage.setItem("lat", geoLat);
    sessionStorage.setItem("lng", geoLng);
  }

  function getPosErr(err) {
    switch (err.code) {
      case err.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case err.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case err.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  }

  return <div></div>;
}

export default CurrentLocation;
