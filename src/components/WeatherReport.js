import React from "react";
import {  humidityIcon, windIcon } from "../constant/Icon";

const WeatherReport = ({ weatherData }) => {
  console.log("sdfghn",weatherData)
  if (!weatherData||!weatherData.weather|| weatherData.length===null) {
    return <h1 className="pt-6 font-bold text-lg">data not found 
    </h1>;
  }
  const { main, name, wind, weather } = weatherData;
 console.log("weatherData.name",name)
  const icon = weather[0]?.icon;
  const description =  weather[0]?.description

  const img_URL = `https://openweathermap.org/img/wn/${icon}@2x.png` ;
  // console.log(img_URL)

  const { temp, humidity } = main;
  const { speed } = wind;
 
  const temp1 = (temp - 273.15).toFixed(1);
 
  return (
    <div className="pt-10">
      <div className="weather-image flex justify-center">
        <img
          src={img_URL
        }
          alt={description}
        ></img>
      </div>
      <div>
        <h1 className="weather-temp text-center text-[2.5rem] font-bold">
          {temp1}&#8451;
        </h1>
      </div>
      <div className="location">
        <h1 className="text-center font-bold md:text-[1.5rem]">{name}</h1>
      </div>
      <div className="flex justify-between items-center pt-5">
        <div className="flex flex-col w-[50%]">
          <div className="humidity flex items-center">
            <div className="w-[10%] ">
              {" "}
              <img src={humidityIcon} alt="humidity-icon"></img>
            </div>

            <p>{humidity}%</p>
          </div>
          <p>humidity</p>
        </div>

        <div className="flex items-end flex-col w-[50%]">
          <div className="wind  flex items-center justify-end">
            <div className="w-[10%]">
              <img src={windIcon} alt="wind-icon"></img>
            </div>

            <p>{(speed * (3.6)).toFixed(1)}km/h</p>
          </div>
          <p>wind</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherReport;
