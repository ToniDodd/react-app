import React from "react";
import DateFormat from "./DateFormat";
import Temperature from "./Temperature";


export default function WeatherInfo(props){
    return(
        <div classNmae="WeatherInfo">
        <h2 className="city">{props.data.city}</h2>
          <div classname="container">
            <div className="row">
              <div className="col-6">
                <ul>
                  <li><DateFormat date={props.data.date} /></li>
                  <li>{props.data.description}</li>
                  <li>
                    
                    
                <img src={props.data.icon} alt={props.data.iconDescription} />
                  <Temperature fahrenheit= {props.data.temperature} />
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity: {props.data.humidity}%</li>
                  <li>Wind: {props.data.wind}mph</li>
                </ul>
              </div>
              <hr />
              <div className="row">
                <div className="col-2">
                  <ul>
                    <li>Thu</li>
                    <li><img src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" alt="rain" /></li>
                    <li>45</li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>Fri</li>
                    <li><img src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" alt="rain" /></li>
                    <li>40</li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>Sat</li>
                    <li><img src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" alt="rain" /></li>
                    <li>43</li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>Sun</li>
                    <li><img src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" alt="rain" /></li>
                    <li>43</li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>Mon</li>
                    <li><img src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" alt="rain" /></li>
                    <li>48</li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>Tue</li>
                    <li><img src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" alt="rain" /></li>
                    <li>43</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
      
 
    );
}