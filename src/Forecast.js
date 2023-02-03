import axios from "axios";
import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";


export default function Forecast(props){
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect(() => {
    setLoaded(false);
}, [props.coordinates]);

function showForecast(response){
    setForecast(response.data.daily);
    setLoaded(true);
}
if(loaded){
 return(
 <div className="row">
    {forecast.map(function(dailyForecast, index){
        if(index < 6){
            return(
                <div className="col-2" key={index}>
                <ForecastDay data={dailyForecast} />
                </div>
             );
            } else{
                return null;
            }
            })}       
         </div>
     );
} else{ 
    let latitude = props.coordinates.latitude
    let longitude = props.coordinates.longitude
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=tb9021cb57677162636fa4a00f5o70a3&units=imperial`
    
    axios.get(apiUrl).then(showForecast);
 return null;
}
}