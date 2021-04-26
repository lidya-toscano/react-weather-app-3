import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Sunday 26",
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconUrl: "images/angry-sun.png",
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      wind: 12,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="wrapper">
        <div className="weather-app">
          <div className="row mb-4">
            <div className="col-10">
              <form className="search">
                <div className="row">
                  <div className="col-8">
                    <input
                      className="city-input"
                      type="search"
                      placeholder="Search for a city..."
                      autoFocus="on"
                      autocomplete="off"
                    />
                  </div>
                  <div className="col-4">
                    <input
                      className="submit-button"
                      type="submit"
                      value="search"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-2">
              <form>
                <div className="row">
                  <div className="col-12">
                    <input
                      className="current-button"
                      type="submit"
                      value="current"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 today">
            <h4>{weatherData.date} 10:00</h4>
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="icon"
              width="65px"
            />
            <h2>{weatherData.city}</h2>
            <div className="description text-capitalize">
              {weatherData.description}
            </div>
            <div className="temperature">
              {Math.round(weatherData.temperature)}°
            </div>
            <div className="wind">Wind Speed: {weatherData.wind}km</div>
            <div className="humidity">Humidity: {weatherData.humidity}%</div>
          </div>
        </div>

        <div className="row next">
          <div className="col-md-2 ms-auto">
            <div className="dateNext">00:00</div>
            <img
              src="images/angry-sun.png"
              alt="Current Temperature Icon"
              className="icon"
              width="30px"
            />
            <div className="tempNext">Max: 85°</div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 ms-auto">
            <div className="dateNext">00:00</div>
            <img
              src="images/angry-sun.png"
              alt="Current Temperature Icon"
              className="icon"
              width="30px"
            />
            <div className="temp-next">Max: 85°</div>
          </div>

          <div className="col-md-2 ms-auto">
            <div className="dateNext">00:00</div>
            <img
              src="images/angry-sun.png"
              alt="Current Temperature Icon"
              className="icon"
              width="30px"
            />
            <div className="temp-next">Max: 85°</div>
          </div>

          <div className="col-md-2 ms-auto">
            <div className="dateNext">00:00</div>
            <img
              src="images/angry-sun.png"
              alt="Current Temperature Icon"
              className="icon"
              width="30px"
            />
            <div className="temp-next">Max: 85°</div>
          </div>

          <div className="col-md-2 ms-auto">
            <div className="dateNext">00:00</div>
            <img
              src="images/angry-sun.png"
              alt="Current Temperature Icon"
              className="icon"
              width="30px"
            />
            <div className="temp-next">Max: 85°</div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "dd829780897d9a6ff8d9b384c094215b";
    let city = "San Diego";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
