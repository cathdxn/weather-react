import React, { useState } from "react";

export default function Temperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit ==="celsius") {
  return (
    <div className="Temperature row">
      <span className="unit">
          <span className="celsius">ºC</span>{" "}
        |{" "}
        <a href="/" className="fahrenheit" onClick={showFahrenheit}>
          ºF
        </a>
      </span>
      <div className="current-temperature">{props.celsius}</div>
    </div>
  );
    } else {
      let fahrenheit = Math.round(((props.celsius) *9)/5 + 32);
  return (
    <div className="Temperature row">
      <span className="unit">
        <a href="/" className="celsius" onClick={showCelsius}>
          ºC
        </a>{" "}
        |{" "}
          <span className="fahrenheit">ºF</span>
      </span>
      <div className="current-temperature">{fahrenheit}</div>
    </div>
  );
    }

}
