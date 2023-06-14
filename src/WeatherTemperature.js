import React ,{useState} from "react"
export default function WeatherTemperature(props){
 const [unit,setunit]=useState("celsius");
 function showFahrenheit(event){
  event.preventDefault();
  setunit("fahrenheit");
 }
 function fahrenheit(){
  return (props.celsius * 9)/5 + 32;
 }
 function showCelsius(event){
  event.preventDefault();
  setunit("celsius");
 }
 if (unit==="celsius"){
  return(
   <div className="WeathetrTemperature">
    <span className="temperature">{Math.round(props.celsius)}</span>
    <span className="unit">℃|{""} <a href="/" onClick={showFahrenheit}>℉</a></span>
   </div>
  );
 }else {
 return(
  
   <div className="WeatherTemperature">
    <span className="temperature">{Math.round(fahrenheit())}</span>
    <span className="unit"
    ><a href="/" onClick={showCelsius}>℃ </a> {""}|℉</span>
    </div>
 );
}
}