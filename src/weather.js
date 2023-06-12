import React,{ useState } from "react";
import "./weather.css";


import WeatherInfo from "./WeatherInfo"
import axios from "axios";

export default function Weather(props){
const [city ,setCity]=useState(props.defaultCity)
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
function Search (){

    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

}
function handleSubmit(event){
event.preventDefault();
Search();
}
function handleCityChange(event){
setCity(event.target.value)
}
if(weatherData.ready){
return( 
<div className="weather">
  <form onSubmit={handleSubmit}>
  <div className="row">
  <div className="col-9">
  
   <input type="search" placeholder="Enter a city.."
   className="form-control" 
   autoFocus="on"
   onChange={handleCityChange}/>
   </div>
   <div className="col-3">
   <input type="submit" value="Search" className="btn btn-primary w-100"/>
  
   </div>
   </div>
   </form>
   <WeatherInfo data={weatherData}/>
   </div>);
}
else{
Search();
return "Loading"

}


}