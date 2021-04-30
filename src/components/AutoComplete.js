import React, { useEffect } from "react";

function AutoComplete() {
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
      document.getElementById("details").innerHTML = place.name;
    }
  }

  return (
    <div>
      <div id="details"></div>
    </div>
  );
}

export default AutoComplete;
