import React from "react";
import { cloudIcon, humidityIcon, windIcon } from "../constant/Icon";

const WeatherReport = () => {
  return (
    <div className="pt-10">
      <div className="weather-image">
        <img src={cloudIcon} alt="cloud-icon"></img>
      </div>
      <div>
        <h1 className="weather-temp text-center text-[2.5rem] font-bold">
          24&#8451;
        </h1>
      </div>
      <div className="location">
        <h1 className="text-center font-bold md:text-[1.5rem]">London</h1>
      </div>
      <div className="flex justify-between items-center pt-5">
        <div className="flex flex-col w-[50%]">
          <div className="humidity flex items-center">
            <div className="w-[10%] ">
              {" "}
              <img src={humidityIcon} alt="humidity-icon"></img>
            </div>

            <p>64%</p>
          </div>
          <p>humidity</p>
        </div>

        <div className="flex items-end flex-col w-[50%]">
          <div className="wind  flex items-center justify-end">
            <div className="w-[10%]">
              <img src={windIcon} alt="wind-icon"></img>
            </div>

            <p>18km/h</p>
          </div>
          <p>wind</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherReport;
