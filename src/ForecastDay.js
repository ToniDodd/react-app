import React from "react";


export default function ForecastDay(props){

    function day(){
        let date = new Date (props.data.time * 1000);
        let day = date.getDay();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }
    return(
        
            <ul>
                <li>{day()}</li>
                <li className="weather-icon"><img src={props.data.condition.icon_url} alt={props.data.condition.icon} /></li>
                <li>{Math.round(props.data.temperature.maximum)}°<span>{Math.round(props.data.temperature.minimum)}°</span></li>
            </ul>
        
    )

}