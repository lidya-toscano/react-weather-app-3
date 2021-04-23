import React from "react";
import "./App.css";

export default function Weather() {
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
                    autofocus="on"
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
          <h4>Sunday, Jan 3 10:00</h4>
          <img
            src="images/angry-sun.png"
            alt="Current Temperature Icon"
            className="icon"
            width="65px"
          />
          <h2>San Diego</h2>
          <div className="description">Clear</div>
          <div className="tempToday">85°</div>
          <div className="windToday">Wind Speed: 10km</div>
          <div className="humidityToday">Humidity: 70%</div>
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
}
