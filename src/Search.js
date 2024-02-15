import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");

  function displayWeather(response) {
    console.log(response.data);
    setTemperature(`Temperature: ${Math.round(response.data.main.temp)}°C`);
    setDescription(`Description: ${response.data.weather[0].description}`);
    setHumidity(`Humidity: ${response.data.main.humidity}%`);
    setWind(`Wind: ${Math.round(response.data.wind.speed)} km/h`);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e0fb79c2f66d0cd0dcf06710976a873&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function displayCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={displayCity} />
        <input type="Submit" value="Search" />
      </form>
      <ul>
        <li>{temperature}</li>
        <li>{description}</li>
        <li>{humidity}</li>
        <li>{wind}</li>
      </ul>
    </div>
  );
}
