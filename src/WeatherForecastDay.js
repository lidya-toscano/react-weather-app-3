import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let date = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="dateNext">{forecast[0].dt}</div>
      <WeatherIcon code={forecast[0].weather[0].icon} size={35} />
      <div className="tempMin">Min: {Math.round(forecast[0].temp.min)}°</div>
      <div className="tempMax">Max: {Math.round(forecast[0].temp.max)}°</div>
    </div>
  );
}
