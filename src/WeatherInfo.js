import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureConversion from "./TemperatureConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <a href="/" className="current-location">
            Find my location
          </a>
          <h1>{props.data.city}</h1>
          <FormattedDate
            date={props.data.date}
            sunrise={props.data.sunrise}
            sunset={props.data.sunset}
          />
        </div>
        <div className="col-6">
          <TemperatureConversion celcius={props.data.temperature} />
        </div>
      </div>
      <div className="row">
        <div className="weather-description text-capitalize col-6">
          {props.data.description}
        </div>
        <img
          src={props.data.iconUrl}
          alt={props.data.description}
          className="weather-image col-6"
        />
      </div>
      <div className="row">
        <ul className="col-6 weather-details">
          <li>
            Windspeed: <span>{props.data.wind}</span> mph
          </li>
          <li>
            Humidity: <span>{props.data.humidity}</span>%
          </li>
          <li>
            Pressure: <span>{props.data.pressure}</span> hPa
          </li>
        </ul>
        <ul className="col-6 temperature-details">
          <li>
            Feels like: <span>{props.data.feelsLike}</span>º
          </li>
          <li>
            Max: <span>{props.data.max}</span>º
          </li>
          <li>
            Min: <span>{props.data.min}</span>º
          </li>
        </ul>
      </div>
      <div className="forecast">Next five days...</div>
      <div className="row next-week">
        <div className="col-2 days">
          Fri
          <br />
          <img
            src={props.data.iconUrl}
            alt="{props.data.description}"
            width="50"
          />
          <div className="max">20º</div>
          <div className="min">10º</div>
        </div>
        <div className="col-2 days">
          Sat
          <img
            src={props.data.iconUrl}
            alt="{props.data.description}"
            width="50"
          />
          <div className="max">18º</div>
          <div className="min">9º</div>
        </div>
        <div className="col-2 days">
          Sun
          <img
            src={props.data.iconUrl}
            alt="{props.data.description}"
            width="50"
          />
          <div className="max">18º</div>
          <div className="min">8º</div>
        </div>
        <div className="col-2 days">
          Mon
          <img
            src={props.data.iconUrl}
            alt="{props.data.description}"
            width="50"
          />
          <div className="max">17º</div>
          <div className="min">8º</div>
        </div>
        <div className="col-2 days">
          Tue
          <img
            src={props.data.iconUrl}
            alt="{props.data.description}"
            width="50"
          />
          <div className="max">21º</div>
          <div className="min">8º</div>
        </div>
      </div>
    </div>
  );
}
