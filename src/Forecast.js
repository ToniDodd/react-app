import axios from "axios";
import React from "react";


export default function Forecast(props){

function showForecast(response){
    console.log(response.data)
}

console.log(props)


    let latitude = props.coordinates.latitude
    let longitude = props.coordinates.longitude
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=tb9021cb57677162636fa4a00f5o70a3&units=imperial`
    
    axios.get(apiUrl).then(showForecast);
    return(
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
                    <li><img src="/"/></li>
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
            
    )
}