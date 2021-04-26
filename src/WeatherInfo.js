import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-md-12 today">
          <h4>
            <FormattedDate date={props.data.date} />
          </h4>
          <div className="WeatherIcon">
            <WeatherIcon code={props.data.icon} size={45} />
          </div>
          <h2>{props.data.city}</h2>
          <div className="description text-capitalize">
            {props.data.description}
          </div>
          <div className="temperature">
            {Math.round(props.data.temperature)}°
          </div>
          <div className="wind">
            Wind Speed: {Math.round(props.data.wind)}km
          </div>
          <div className="humidity">Humidity: {props.data.humidity}%</div>
        </div>
      </div>
    </div>
  );
}
