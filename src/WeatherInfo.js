import React from "react";
import DateFormat from "./DateFormat";
import Temperature from "./Temperature";



export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <h2 className="city">{props.data.city}</h2>
                <div classname="container ">
                    <div className="row justify-content-evenly">
                    <div className="col-6">
                        <ul>
                            <li>
                                <Temperature  fahrenheit= {props.data.temperature} />
                                <img className="current-icon" src={props.data.icon} alt={props.data.iconDescription} />
                  <li>{props.data.description}</li>
                            </li>
                         </ul>
                     </div>
                    
                    <div className="col-6">
                        <ul >
                            <li><DateFormat date={props.data.date} /></li>
                            
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {props.data.wind}mph</li>
                        </ul>
                    </div>
              <hr />
             
                    </div>
              </div>
             </div>
          
      
 
    );
}