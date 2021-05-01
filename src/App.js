import "./App.css";
import Footer from "./components/Footer";

import Weather from "./components/Weather";
import CurrentLocation from "./CurrentLocation";

function App() {
  return (
    <div className="App">
      <CurrentLocation />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
