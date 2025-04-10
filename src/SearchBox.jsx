import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "01d3342a0f696f5ca9101be1d03aa00f";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod !== 200) throw new Error(data.message);
      updateInfo({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        weather: data.weather[0].description,
      });
      setCity("");
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <p style={{ color: "red" }}>City not found. Please try again.</p>
        )}
      </form>
    </div>
  );
}
