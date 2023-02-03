import React, { useState } from "react";
  
export default function Temperature(props){
    const [ unit, setUnit] = useState("fahrenheit")

    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit")
    }

function convertToCelsius(event){
    event.preventDefault();
    setUnit("celsius");
}


    if (unit === "fahrenheit"){
        
      return (
        <div className="fahrenheit">
        <span className="temperature">{props.fahrenheit}</span>
        <span className="fahrenheit"> °F | 
        <a href="/" onClick={convertToCelsius}>°C</a>
        </span>
        </div>
    );
      } else{
        let celsiusTemp = 5 * (props.fahrenheit - 32) / 9;
        return (
            <div className="fahrenheit">
            <span className="temperature">{Math.round(celsiusTemp)}</span>
            <span className="fahrenheit"> <a href="/" onClick={convertToFahrenheit}>°F</a> | 
            °C
            </span>
            </div>
        )
      }
}