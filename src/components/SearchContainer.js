import React, { useState } from "react";
import { searchIcon } from "../constant/Icon";
import { a} from "../constant/key";

const SearchContainer = ({ weatherData, setWeatherData }) => {
  const [searchInput, setSearchInput] = useState("");

  const getWeatherData = async () => {

    const data = await fetch(a + searchInput);
    const json = await data.json();
 
    setWeatherData(json);
  };

  return (
    <div className="flex justify-evenly">
      <div className=" rounded-2xl break-words border-x-0 w-[80%]  cursor-pointer border-gray-50 border-2">
        <input
          type="text"
          placeholder="search city"
          value={searchInput}
          className="border-gray-50 border-2 rounded-2xl pl-2 h-full outline-none break-words w-full text-black"
          onChange={(e) => {
            setSearchInput(e.target.value.toLowerCase());
          }}
        ></input>
      </div>

      <div
        className="w-[10%]"
        onClick={() => {
          getWeatherData() 
          setSearchInput("")
               }}
      >
        <img src={searchIcon} alt="search-icon"></img>
      </div>
    </div>
  );
};

export default SearchContainer;
