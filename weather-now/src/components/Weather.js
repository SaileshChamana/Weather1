import React from "react";
import "./Weather.css";

function Weather({ weather }) {
  return (
    <div className="weather">
      <h2>Current Weather</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Wind Speed: {weather.windspeed} km/h</p>
      <p>Weather Code: {weather.weathercode}</p>
    </div>
  );
}

export default Weather;
