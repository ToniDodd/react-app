import React from "react";
  
export default function Temperature(props){
    return (
        <div className="fahrenheit">
        <span className="temperature">{props.fahrenheit}</span>
        <span className="fahrenheit"> °F </span>
        </div>
    );
      
}