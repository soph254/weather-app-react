import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <title>Weather Forecast</title>
      <Weather defaultCity="London" />
      <Footer />
    </div>
  );
}

