import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeather({
      ready: true,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      pressure: Math.round(response.data.main.pressure),
      feelsLike: Math.round(response.data.main.feels_like),
      max: Math.round(response.data.main.temp_max),
      min: Math.round(response.data.main.temp_min),
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "0923e12b896425d5960c3ad97497e0ee";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="container body">
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2 search-city"
              type="search"
              placeholder="Enter city"
              aria-label="Search"
              autoFocus="on"
              autoComplete="off"
              onChange={changeCity}
            />
            <button className="btn btn-secondary" type="submit">
              Search
            </button>
          </form>
          <WeatherInfo data={weather} />
          <Forecast longitude={weather.lon} latitude={weather.lat} />
          <footer>
            <a href="https://github.com/cathdxn/weather-react">
              Open-sourced code
            </a>{" "}
            by Catherine Dixon
          </footer>
        </div>
      </div>
    );
  } else {
    search();
    return <h3>Loading...</h3>;
  }
}
