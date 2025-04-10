import { useState } from "react"; // Import useState
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "London",
    country: "UK",
    temperature: 15,
    minTemperature: 10,
    maxTemperature: 20,
    humidity: 80,
    feelsLike: 16,
    pressure: 1012,
    weather: "Clear",
  });

  let updateInfo = async (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weather-app" style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
