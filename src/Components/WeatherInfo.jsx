import { useEffect, useState } from "react";

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
             setWeatherImage("/src/assets/cloudy.png")
             break;
            case "Haze":
             setWeatherImage("/src/assets/rain.png")
             break;
            case "Drizzle":
             setWeatherImage("/src/assets/rain.png")
             break;
            case "Clear":
             setWeatherImage("/src/assets/sun.png")
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
       <div className="">
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
        <img className="info-img" src="/src/assets/sunrise.png" alt="" srcSet="" />
       </div>
        <div>
        <span>{timeIs}AM</span>
        <p>Sunrise</p>
        </div>
       </div>
       <div className="more-info">
       <img className="info-img" src="/src/assets/humidity.png" alt="" srcSet="" />
<div>
<samp>{humidity}</samp>
        <p>Humidity</p>
</div>
       
       </div>
       <div className="more-info">
       <img className="info-img" src="/src/assets/fresh-air.png" alt="" srcSet="" />
<div>
<samp>Pressure</samp>
        <p>{pressure}</p>
</div>
        
       </div>
       <div className="more-info">
       <img className="info-img" src="/src/assets/wind-direction.png" alt="" srcSet="" />

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
