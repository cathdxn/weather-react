import React from "react";

export default function FormattedDate(props) {
  let currentTime = props.date;
  let sunriseTime = props.sunrise;
  let sunsetTime = props.sunset;
  let currentDay = props.date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[currentDay];
  let currentMonth = currentTime.getMonth();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[currentMonth];
  let date = currentTime.getDate();
  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let sunriseHours = sunriseTime.getHours();
  if (sunriseHours < 10) {
    sunriseHours = "0" + sunriseHours;
  }
  let sunriseMinutes = sunriseTime.getMinutes();
  if (sunriseMinutes < 10) {
    sunriseMinutes = "0" + sunriseMinutes;
  }
  let sunsetHours = sunsetTime.getHours();
  if (sunsetHours < 10) {
    sunsetHours = "0" + sunsetHours;
  }
  let sunsetMinutes = sunsetTime.getMinutes();
  if (sunsetMinutes < 10) {
    sunsetMinutes = "0" + sunsetMinutes;
  }

  return (
    <div className="FormattedDate">
      <div className="date">
        {day}, {month} {date} | {hours}:{minutes}
      </div>
      <div className="sunrise">
        Sunrise{" "}
        <span>
          {sunriseHours}:{sunriseMinutes}
        </span>{" "}
        | Sunset{" "}
        <span>
          {sunsetHours}:{sunsetMinutes}
        </span>
      </div>
    </div>
  );
}
