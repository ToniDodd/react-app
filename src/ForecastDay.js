import React from "react";


export default function ForecastDay(props){

    function day(){
        let date = new Date (props.data.time * 1000);
        let day = date.getDay();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }
    return(
        
            <div>
                <div className="forecast-day">{day()}</div>
                <div className="weather-icon"><img src={props.data.condition.icon_url} alt={props.data.condition.icon} /></div>
                <div className=" max-temp d-flex justify-content-around">{Math.round(props.data.temperature.maximum)}°<span className="min-temp">{Math.round(props.data.temperature.minimum)}°</span></div>
            </div>
        
    )

}