import { useEffect, useState } from "react";
import Cloudy from '/src/images/cloudy.png' 
import Rain from '/src/images/rain.png' 
import Haze from '/src/images/haze.png' 
import Sun from '/src/images/sun.png' 
import Sunrise from '/src/images/sunrise.png' 
import Humidity from '/src/images/humidity.png' 
import Pressure from '/src/images/fresh-air.png' 
import Wind from '/src/images/wind-direction.png' 

const WeatherInfo = ({items}) => {
 const[weatherImage,setWeatherImage]=useState("")
 const{temp,
    humidity,
    pressure,
    name,
    country,
    sunrise,
    weatherMood,
    speed}=items;
    
let sec=sunrise;
let date=new Date(sec * 1000 );
let timeIs=`${date.getHours()}:${date.getMinutes()}`

useEffect(()=>{
    if(weatherMood){
        switch(weatherMood){
            case "Clouds":
             setWeatherImage(Cloudy)
             break;
            case "Haze":
             setWeatherImage(Haze)
             break;
            case "Drizzle":
             setWeatherImage(Rain)
             break;
            case "Clear":
             setWeatherImage(Sun)
             break;
             default:
                break;   
        }
    }

},[weatherMood])

  return (
    <>
            <div className="app-body ">
       <div className="weather-icon">
       <img src={weatherImage} alt="" srcSet="" />
       </div>
       <div>
        <div className="weather-info">
            <div className="degree">
            <h3 className="degree-text">{temp}&deg;C</h3>
            </div>
            <div className="weather-location">
                <h5>{weatherMood}</h5>
                <p>{name},{country}</p>
            </div>
            {/* <div className="col-md-6 col-sm-12 current-date">
                {new Date().toLocaleString()}
            </div> */}
        </div>
       </div>

       <div className="weather-more-info">
       <div className="more-info">
       <div >
        <img className="info-img" src={Sunrise} alt="" srcSet="" />
       </div>
        <div>
        <span>{timeIs}AM</span>
        <p>Sunrise</p>
        </div>
       </div>
       <div className="more-info">
       <img className="info-img" src={Humidity} alt="" srcSet="" />
<div>
<samp>{humidity}</samp>
        <p>Humidity</p>
</div>
       
       </div>
       <div className="more-info">
       <img className="info-img" src={Pressure} alt="" srcSet="" />
<div>
<samp>Pressure</samp>
        <p>{pressure}</p>
</div>
        
       </div>
       <div className="more-info">
       <img className="info-img" src={Wind} alt="" srcSet="" />

       <div>
       <samp>Wind</samp>
        <p>{speed}</p>
       </div>
       </div>

       </div>

      </div>
    </>
  )
}

export default WeatherInfo
