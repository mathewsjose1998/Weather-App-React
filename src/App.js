import "./App.css";

import Weather from "./components/Weather";
import CurrentLocation from "./CurrentLocation";

function App() {
  return (
    <div className="App">
      <CurrentLocation />
      <Weather />
    </div>
  );
}

export default App;
