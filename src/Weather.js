import axios from "axios";
import { Dna } from  'react-loader-spinner'
import React, { useState } from "react";
import Forecast from "./Forecast";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
    
const [weatherData, setWeatherData] = useState({ready: false});
const [city, setCity] = useState(props.defaultCity)

function showData(response){
    console.log(response)
    
  
    setWeatherData({
        ready: true,
        coordinates: response.data.coordinates,
        temperature: Math.round(response.data.temperature.current),
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.temperature.humidity,
        description: (response.data.condition.description),
        city: response.data.city,
        icon: response.data.condition.icon_url,
        iconDescription: response.data.condition.icon,
        date: new Date(response.data.time * 1000)

    });
}

function search(){
    
    let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=tb9021cb57677162636fa4a00f5o70a3&units=imperial`;
axios.get(apiUrl).then(showData)

}

function citySubmit(event){
    event.preventDefault()
    search();
}

function citySearch(event){
    setCity(event.target.value);

}

if (weatherData.ready){
    return (
<div className="weather-app">
        <form onSubmit={citySubmit} className="search-form">
          <input type="search" placeholder="Enter a city..." className="city-search" autoFocus="off" onChange={citySearch} />
        
          <input type="submit" value="Search" className="city-submit" />
         
          </form>
          <WeatherInfo data={weatherData}/>
          <Forecast coordinates={weatherData.coordinates}/>
         
 
    </div>
  ); 
} else{
    search();
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
