import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  let weatherIcon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  return (
    <div className="ForecastDay col-3 days">
      <div className="Forecast-day">{day()}</div>
      <img
        src={weatherIcon}
        alt={props.data.weather[0].description}
        className="weather-image col-6"
      />
      <div>
        <span className="max">{Math.round(props.data.temp.max)}º</span>
        <span className="min"> {Math.round(props.data.temp.min)}º</span>
      </div>
    </div>
  );
}
