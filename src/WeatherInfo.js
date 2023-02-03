import React from "react";
import DateFormat from "./DateFormat";
import Temperature from "./Temperature";
import Forecast from "./Forecast";


export default function WeatherInfo(props){
    return(
        <div classNmae="WeatherInfo">
            <h2 className="city">{props.data.city}</h2>
                <div classname="container">
                    <div className="row">
                    <div className="col-6">
                        <ul>
                            <li>
                                <img src={props.data.icon} alt={props.data.iconDescription} />
                  <Temperature fahrenheit= {props.data.temperature} />
                            </li>
                         </ul>
                     </div>
                    <div className="col-6">
                        <ul>
                            <li><DateFormat date={props.data.date} /></li>
                            <li>{props.data.description}</li>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {props.data.wind}mph</li>
                        </ul>
                    </div>
              <hr />
             
                    </div>
              </div>
              <Forecast />
          </div>
      
 
    );
}