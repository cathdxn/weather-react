import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  let longitude = props.longitude;
  let latitude = props.latitude;
  let apiKey = "0923e12b896425d5960c3ad97497e0ee";

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    function day() {
      let date = new Date(forecast[0].dt * 1000);
      let day = date.getDay();

      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      return days[day];
    }
    let weatherIcon = `http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png`;
    console.log(forecast);
    return (
      <div className="Forecast">
        <div className="next-five-days">Next five days...</div>
        <div className="row next-week">
          <div className="col-2 days">
            <div className="Forecast-day">{day()}</div>
            <img
              src={weatherIcon}
              alt={forecast[0].weather[0].description}
              className="weather-image col-6"
            />
            <div className="max">{Math.round(forecast[0].temp.max)}º</div>
            <div className="min">{Math.round(forecast[0].temp.min)}º</div>
          </div>
          <div className="col-2 days">
            Sat
            <div className="max">18º</div>
            <div className="min">9º</div>
          </div>
          <div className="col-2 days">
            Sun
            <div className="max">18º</div>
            <div className="min">8º</div>
          </div>
          <div className="col-2 days">
            Mon
            <div className="max">17º</div>
            <div className="min">8º</div>
          </div>
          <div className="col-2 days">
            Tue
            <div className="max">21º</div>
            <div className="min">8º</div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
