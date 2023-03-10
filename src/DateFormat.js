import React from "react";
import "./DateFormat.css"

export default function DateFormat(props){
    let days = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday",
        "Friday",
        "Saturday"
    ];   
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();

    let minutes = props.date.getMinutes();
 if (minutes < 10){
    minutes = `0${minutes}`;
 }
return (<div className="current-time">
    {day} {hours}:{minutes}
</div>);
}