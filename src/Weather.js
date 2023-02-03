import axios from "axios";
import { Dna } from  'react-loader-spinner'
import React, { useState } from "react";

export default function Weather(props) {
    
const [weatherData, setWeatherData] = useState({ready: false});

function showData(response){
    console.log(response)
    
  
    setWeatherData({
        ready: true,
        temperature: Math.round(response.data.temperature.current),
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.temperature.humidity,
        description: response.data.condition.description,
        city: response.data.city,
        icon: response.data.condition.icon_url,
        iconDescription: response.data.condition.icon,
        date: "Wednesday 3:10pm"

    });
}

if (weatherData.ready){
    return (
<div className="weather-app">
        <form>
            <div className="row">
                <div className="col-9">
          <input type="search" placeholder="Enter a city..." className="city-search" /></div>
          <div className="col-3">
          <input type="submit" value="Search" className="city-submit" />
          </div>
          </div>
          <h2 className="city">{weatherData.city}</h2>
          <div classname="container">
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>{weatherData.date}</li>
                  <li>{weatherData.description}</li>
                  <li><img src={weatherData.icon} alt={weatherData.iconDescription} />
                  <span className="temperature">{weatherData.temperature}</span>°<span>F
                    </span></li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind}mph</li>
                </ul>
              </div>
              <hr />
              <div className="row">
                <div className="col-2">
                  <ul>
                    <li>Thu</li>
                    <li><img src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" alt="rain" /></li>
                    <li>45</li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>Fri</li>
                    <li><img src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" alt="rain" /></li>
                    <li>40</li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>Sat</li>
                    <li><img src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" alt="rain" /></li>
                    <li>43</li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>Sun</li>
                    <li><img src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" alt="rain" /></li>
                    <li>43</li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>Mon</li>
                    <li><img src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" alt="rain" /></li>
                    <li>48</li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>Tue</li>
                    <li><img src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" alt="rain" /></li>
                    <li>43</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </form>
      
 
    </div>
  ); 
} else{
    
    let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=tb9021cb57677162636fa4a00f5o70a3&units=imperial`;
axios.get(apiUrl).then(showData)

return(<Dna
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
  />);
}
}
