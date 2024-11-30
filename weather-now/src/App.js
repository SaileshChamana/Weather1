import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    try {
      setError("");
      // Step 1: Get Coordinates from Geocoding API
      const geoResponse = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=dcb7882642d74476821011b7fa28f65c`
      );

      const { lat, lng } = geoResponse.data.results[0].geometry;

      // Step 2: Fetch Weather Data Using Coordinates
      const weatherResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
      );

      setWeather(weatherResponse.data.current_weather);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError("Could not fetch weather data. Please try another city.");
    }
  };

  return (
    <div className="app">
      <h1>Weather Now</h1>
      <SearchBar fetchWeather={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weather && <Weather weather={weather} />}
    </div>
  );
}

export default App;
