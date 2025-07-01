import React,{useEffect, useState} from 'react'
import './Weather.css'
import Rain from '../assets/Rain.png';
import Search from '../assets/Search.png'
import Clear from '../assets/Clear.png'
import Drizzle from '../assets/Drizzle.png'
import Wind from '../assets/Wind.png'
import Snow from '../assets/Snow.png'
import Humidity from '../assets/Humidity.png'
import Cloud from '../assets/Cloud.png'
import axios from 'axios'

const Weather = () => {
  const API_KEY = "f5fe51a7c8c9d46a6ec3bf8991d60bad";
  const [weatherData,setWeatherData] = useState(false);
  const [text,setText] = useState("");

  const allIcons = {
     "01d":Clear,
     "01n":Clear,
     "02d":Cloud,
     "02n":Cloud,
     "03d":Cloud,
     "03n":Cloud,
     "04d":Drizzle,
     "04n":Drizzle,
     "09d":Rain,
     "09n":Rain,
     "10d":Rain,
     "10n":Rain,
     "13d":Snow,
     "13n":Snow,

  }

  const fetchData = async (city) => {
       try { 
         const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
          const icon = allIcons[response.data.weather[0].icon] || allIcons.Clear
        setWeatherData({
          humidity:response.data.main.humidity,
          windSpeed:response.data.wind.speed,
          temperature:Math.floor(response.data.main.temp),
          location:response.data.name,
          icon:icon,
  
        });
    }
       
      catch (error) {

      }
  }   

  const textHandler = (event) => {
      setText(event.target.value);
  }

    useEffect(() => {
        fetchData("London");
    }, []);
  
  return (
    <div className="weather">
        <div className="search-bar">
            <input onChange={textHandler} className="input-city" type="text" placeholder='Search'/>
            <img onClick={()=>{fetchData(text)}} className="search-icon" src={Search} alt="" />
        </div>
        <img className="weather-icon" src={weatherData.icon} alt="" />
        <p className='temperature'>{weatherData.temperature}°c</p>
        <p className="location">{weatherData.location}</p>
        
        <div className="weather-data">
          <div className="col">
            <img src={Humidity} alt="" />
            <div>
              <p>{weatherData.humidity}</p>
              <span>Humidity</span>
            </div>
          </div>
            
          <div className="col">
            <img src={Wind} alt="" />
            <div>
              <p>{weatherData.windSpeed} Km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Weather