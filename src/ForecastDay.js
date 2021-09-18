import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <div>
        <span className="max">{Math.round(props.data.temp.min)}</span>
        <span className="min">{Math.round(props.data.temp.min)}</span>
      </div>
    </div>
  );
}
