import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.longitude, props.latitude]);

  let longitude = props.longitude;
  let latitude = props.latitude;
  let apiKey = "0923e12b896425d5960c3ad97497e0ee";

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast mt-2">
        <div>
          <div className="row next-week">
            <ForecastDay data={forecast[0]} />
            <ForecastDay data={forecast[1]} />
            <ForecastDay data={forecast[2]} />
            <ForecastDay data={forecast[3]} />
          </div>
          <div className="row next-week">
            <ForecastDay data={forecast[4]} />
            <ForecastDay data={forecast[5]} />
            <ForecastDay data={forecast[6]} />
            <ForecastDay data={forecast[7]} />
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
