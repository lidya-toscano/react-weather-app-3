import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./App.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "dd829780897d9a6ff8d9b384c094215b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="wrapper">
        <div className="weather-app">
          <div className="row mb-4">
            <div className="col-10">
              <form className="search" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-8">
                    <input
                      className="city-input"
                      type="search"
                      placeholder="Search for a city..."
                      autoFocus="on"
                      autocomplete="off"
                      onChange={handleCityChange}
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

        <WeatherInfo data={weatherData} />

        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
