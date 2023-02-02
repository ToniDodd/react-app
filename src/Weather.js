import React from "react";

export default function Weather() {
  return (
    <div className="wrap">
      <div className="weather-app">
        <form>
          <input type="search" placeholder="Enter a city..." />
          <input type="submit" value="Search" />
          <h2 className="city">Eugene</h2>
          <div classname="container">
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>Wednesday 3:10pm</li>
                  <li>Clouds</li>
                  <li> ☁️</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>Precipitation: 45%</li>
                  <li>Wind: 1 mph</li>
                </ul>
              </div>
              <hr />
              <div className="row">
                <div className="col-2">
                  <ul>
                    <li>Thu</li>
                    <li>🌧</li>
                    <li>45</li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>Fri</li>
                    <li>🌧</li>
                    <li>40</li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>Sat</li>
                    <li>🌧</li>
                    <li>43</li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>Sun</li>
                    <li>🌧</li>
                    <li>43</li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>Mon</li>
                    <li>🌧</li>
                    <li>48</li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>Tue</li>
                    <li>🌧</li>
                    <li>43</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <p className="github">
        <a
          className="link"
          href="https://github.com/ToniDodd/Weather-App-Project"
        >
          Open-source code
        </a>{" "}
        by Toni Dodd
      </p>
    </div>
  );
}
