import React from "react";
import { useState } from "react";

import SearchContainer from "./components/SearchContainer";
import WeatherReport from "./components/WeatherReport";

const WeatherLayout = () => {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div
      className="bg-indigo-600
   text-white py-8 sm:w-[80%] md:w-[60%] mx-auto h-full px-12 md:py-10 max-w-md rounded-3xl border-gray-300 border-2  shadow-2xl"
    >
      <SearchContainer
        weatherData={weatherData}
        setWeatherData={setWeatherData}
      />

      <WeatherReport weatherData={weatherData} />
    </div>
  );
};

function App() {
  return (
    <div className="flex justify-center items-center h-[80vh] my-14 ">
      <WeatherLayout />
    </div>
  );
}

export default App;
