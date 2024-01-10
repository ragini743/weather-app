import React from 'react'
import SearchContainer from './SearchContainer';
import WeatherReport from './WeatherReport';
// import { a, weather_API } from '../constant/key';
import { useEffect,useState } from 'react';

const WeatherLayout = () => {
  
    const [weatherData,setWeatherData] = useState(0);
    
    
  return (
    <div className='bg-indigo-800
     text-white py-8 sm:w-[80%] md:w-[60%] mx-auto h-full px-12 md:py-10 max-w-md'>
        <SearchContainer weatherData={weatherData} setWeatherData={setWeatherData} />
        <WeatherReport weatherData={weatherData}/>
     </div>
  )
    
}

export default WeatherLayout ;