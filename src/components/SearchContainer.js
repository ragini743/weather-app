import React, { useEffect, useRef, useState } from "react";
import { searchIcon } from "../constant/Icon";

const SearchContainer = ({searchInput,setSearchInput}) => {
  
  return (
    <div className="flex justify-evenly">
      <div className=" rounded-2xl break-words border-x-0 w-[80%]  cursor-pointer border-gray-50 border-2">
        <input
        type="text"
        placeholder="search city"
        value={searchInput}
        className="border-gray-50 border-2 rounded-2xl pl-2 h-full outline-none break-words w-full text-black"
        onChange={(e) => {
          console.log("change", e.target.value);
          setSearchInput(e.target.value)
        }}
       
      ></input></div>
      
      <div className="w-[10%]">
        <img src={searchIcon} alt="search-icon"></img>
      </div>
    </div>
  );
};

export default SearchContainer;
