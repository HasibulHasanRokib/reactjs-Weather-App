import { useEffect, useState } from "react"
import WeatherInfo from "./WeatherInfo"
const WeatherApp = () => {
const [searchItem,setSearchItem]=useState("Dhaka")
const[items,setItems]=useState({})
const getAllItems=async()=>{
 try{
let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchItem}&units=metric&appid=8ef88bd0724830320a0667d223c82fde`;
let res=await fetch(url);
let data=await res.json();
const {temp,humidity,pressure}=data.main;
const{name}=data;
const{country,sunrise}=data.sys;
const{main:weatherMood}=data.weather[0];
const{speed}=data.wind;

const allData={
    temp,
    humidity,
    pressure,
    name,
    country,
    sunrise,
    weatherMood,
    speed
}
setItems(allData)



 }
 catch(error){
 console.log(error)
 }  
}
useEffect(()=>{
getAllItems();
},[])


  return (
    <div>
    <div className="heading">
    <h1 className="text-white">Weather React App</h1>
    </div>
    <div className="search">
        <input type="text" placeholder="search..."
        required className="input-search" value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} />
        <button onClick={getAllItems} className="btn-search">Search</button>
    </div>
    <WeatherInfo items={items}/>
    </div>
  )
}

export default WeatherApp
