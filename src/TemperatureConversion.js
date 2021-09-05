import React from "react";

export default function TemperatureConversion(props) {
  function convertToFahrenheit() {}
  return (
    <div className="TemperatureConversion row">
      <span className="unit">
        <a href="/" className="celcius">
          ºC
        </a>{" "}
        |{" "}
        <a href="/" className="farenheit" onClick={convertToFahrenheit}>
          ºF
        </a>
      </span>
      <div className="current-temperature">{props.celcius}</div>
    </div>
  );
}
