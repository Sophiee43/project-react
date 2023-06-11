import React from "react";
import './App.css';
import Weather from "./weather";
function App() {
  return (
    <div className="App">
      <div className="container"> 
    <h1>Weather App</h1>
    <Weather defaultCity="Chicago"/>
      <footer>
        This project was coded by Sophie and is {""} 
      <a href="https://github.com/Sophiee43/project-react.git">Open-sourced on github </a>
      </footer>
    
      </div>

    </div>
  );
}

export default App;
