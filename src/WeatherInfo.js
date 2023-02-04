import React from "react";
import DateFormat from "./DateFormat";
import Temperature from "./Temperature";
import "./WeatherInfo.css"



export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <div className="current">
            <h2 className="city">{props.data.city}</h2>
            <DateFormat date={props.data.date} />
             <div className="description">{props.data.description}</div>
            <div className="current-icon">
            <img src={props.data.icon} alt={props.data.iconDescription} />
                </div>
                <Temperature  fahrenheit= {props.data.temperature} />
               </div>
                <div className="conditions">
                <div className="humidity" >Humidity: {props.data.humidity}%</div>
                <div className="wind">Wind: {props.data.wind}mph</div>
                </div>
              <hr />
             
            </div>
    );
}