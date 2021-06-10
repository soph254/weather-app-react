import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <title>Weather Forecast</title>
      <Weather defaultCity="London" />
      </div>
      <Footer />
    </div>
  );
}

