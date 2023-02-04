import React from "react";
import "./ForecastDay.css"


export default function ForecastDay(props){

    function day(){
        let date = new Date (props.data.time * 1000);
        let day = date.getDay();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }
    return(
        <div className="forecast-days">
                <div className="forecast-day">{day()}</div>
                <div className="weather-icon"><img className="float-left" src={props.data.condition.icon_url} alt={props.data.condition.icon} /></div>
                <div className="max-temp">{Math.round(props.data.temperature.maximum)}° <span className="min-temp"> |   {Math.round(props.data.temperature.minimum)}°</span></div>
        </div>
    )

}