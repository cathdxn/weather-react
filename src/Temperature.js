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

  if (unit === "celsius") {
    return (
      <span className="Temperature">
        <span className="current-temperature">{props.celsius}º</span>
        <span className="unit">
          <a href="/" className="fahrenheit" onClick={showFahrenheit}>
            C
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <span className="Temperature">
        <span className="current-temperature">{fahrenheit}º</span>
        <span className="unit">
          <a href="/" className="celsius" onClick={showCelsius}>
            F
          </a>
        </span>
      </span>
    );
  }
}
