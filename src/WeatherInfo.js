import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-5">
          <h1>{props.data.city}</h1>
        </div>
        <div className="col-7 second-column">
          <FormattedDate
            date={props.data.date}
            sunrise={props.data.sunrise}
            sunset={props.data.sunset}
          />
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-8">
          <ul>
            <li className="weather-details">
              <span>
                Feels like: <span>{props.data.feelsLike}</span>º
              </span>
            </li>
            <li className="weather-details">
              <span>
                Max: <span>{props.data.max}</span>º
              </span>
            </li>
            <li className="weather-details">
              <span>
                Min: <span>{props.data.min}</span>º
              </span>
            </li>
            <br />
            <li className="weather-details">
              <span>
                Windspeed: <span>{props.data.wind}</span> mph
              </span>
            </li>
            <li className="weather-details">
              <span>
                Humidity: <span>{props.data.humidity}</span>%
              </span>
            </li>
            <li className="weather-details">
              <span>
                Pressure: <span>{props.data.pressure}</span> hPa
              </span>
            </li>
          </ul>
        </div>
        <div className="col-4 mt-1">
          <Temperature celsius={props.data.temperature} />
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="row"
          />
          <span className="weather-description text-capitalize row">
            {props.data.description}
          </span>
        </div>
      </div>
      <div className="row"></div>
      <div className="row">
        <div className="col-5"></div>
      </div>
    </div>
  );
}
