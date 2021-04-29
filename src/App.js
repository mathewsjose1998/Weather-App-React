import "./App.css";
import Forecast from "./components/Forecast";

import Weather from "./components/Weather";
import CurrentLocation from "./CurrentLocation";

function App() {
  let value = sessionStorage.getItem("cities");
  return (
    <div className="App">
      <CurrentLocation />
      <Weather />
      {/* <Forecast value={value} /> */}
    </div>
  );
}

export default App;
