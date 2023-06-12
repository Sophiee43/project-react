import React,{ useState } from "react";
import "./weather.css";
import Date from "./formattedDate"
import axios from "axios";

export default function Weather(props){

const[weatherData,setWeatherData]=useState({ready :false});
function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
    ready: true,
    temperature:  response.data.main.temp,
 humidity:response.data.main.humidity,description:response.data.weather[0].description,
 date:new Date(response.data.dt * 1000),
 iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    wind: response.data.wind.speed,
    city:response.data.name
    
  })
  ;
}
if(weatherData.ready){
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
   <h1>{weatherData.city}</h1>
   <ul>
    <li><Date date={weatherData.date}/></li>
    <li className="text-capitalize">{weatherData.description}</li>
   </ul>
  <div className="row mt-3">
   <div className="col-6">
    <div className="clearfix">
    <img src={weatherData.iconUrl}alt={weatherData.description}className="float-left"
    />
    <div className="float-left">
    <span className="temperature">{Math.round(weatherData.temperature)}</span>
    <span className="unit">℃</span>
    </div>
    </div>
   </div>
   <div className="col-6">
    <ul>
      <li>Precipitation : 15%</li>
      <li>Humidity:{weatherData.humidity}</li>
      <li>Wind:{weatherData.wind}km/h</li>
    </ul>
   </div>
  </div>
</div>);
}
else{


    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let city="lagos"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
 return "Loading...";
}


}