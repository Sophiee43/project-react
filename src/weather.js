import React,{ useState } from "react";
import "./weather.css"
import axios from "axios"

export default function Weather(){
const [ready, setReady]=useState(false);
const[temperature,setTemperature]=useState(null);
function handleResponse(response) {
  console.log(response.data);
  setTemperature(response.data.main.temp);

  setReady(true);
}
if(ready){
return( 
<div className="weather">
  <form>
  <div className="row">
  <div className="col-9">
  
   <input type="search" placeholder="Enter a city.."
   className="form-control" 
   autoFocus="on"/>
   </div>
   <div className="col-3">
   <input type="submit" value="Search" className="btn btn-primary w-100"/>
  
   </div>
   </div>
   </form>
   <h1>Lagos</h1>
   <ul>
    <li>Thursday 09:30</li>
    <li>Mostly cloudy</li>
   </ul>
  <div className="row mt-3">
   <div className="col-6">
    <div className="clearfix">
    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Clear"
    />
    <span className="temperature">{Math.round(temperature)}</span>
    <span className="unit">℃</span>
    </div>
   </div>
   <div className="col-6">
    <ul>
      <li>Precipitation : 15%</li>
      <li>Humidity:72%</li>
      <li>Wind:13km/h</li>
    </ul>
   </div>
  </div>
</div>);
}
else{

  const apiKey ="0f8bc384a7c31b717a18cfe38a95ae06";
  let city="Lagos"
  let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}appid=${apiKey}&units=metric`;


  axios.get(apiUrl).then(handleResponse)
 
}


}