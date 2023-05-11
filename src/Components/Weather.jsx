import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import { CircularProgress } from "@mui/material";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const API_KEY = "6293bb9e255ad39f4bc3615271753232";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      setLoading(false);
  };

  return (
    <>
        {loading && <CircularProgress/>}
    <div className="container" >
     <h1 style={{color:"red",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"calibri",fontWeight:"bold"}}>World Weather Report</h1>
    <div style={{backgroundColor:"#f76a05",margin:"80px",borderRadius:"30px",border:"1px solid black"}}> 
      <br/>

      <input className="form-control w-50 container"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)} style={{border:"2px solid black",height:"50px",fontFamily:"'calibri",fontSize:"21px",fontWeight:"bold",textTransform:"uppercase"}} 
      /><br/>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Button variant="contained" color="success" style={{fontWeight:"bold"}} onClick={handleSearch}>Search</Button>
      </div>
      <br/>{weatherData && (
        <div className="container card w-25" style={{border:"2px solid green",borderRadius:"10px"}} >
          <h2>{weatherData.name}</h2>
          <h4>Temperature: {weatherData.main.temp}°C</h4>
          <h4>Humidity: {weatherData.main.humidity}%</h4>
          <h4>Description: {weatherData.weather[0].description}</h4>
        </div>
      )}<br/>
    </div>
    </div>


<h1>updated file added to modal brnch q5454</h1>


    </>
  );
}

export default Weather;
