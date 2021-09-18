import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded === true) {
    return (
      <div className="Forecast">
        <div className="next-five-days">Next five days...</div>
        <div className="row next-week">
          <div className="col-2 days">
            <ForecastDay data={forecast[0]} />
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
    let apiKey = "0923e12b896425d5960c3ad97497e0ee";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
