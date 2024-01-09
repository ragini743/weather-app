import React from 'react'
import SearchContainer from './SearchContainer';

const WeatherLayout = () => {
  return (
    <div className='bg-indigo-800
     text-white py-8 sm:w-[80%] md:w-[60%] mx-auto h-full px-12 md:py-10 max-w-md'>
        <SearchContainer />
     </div>
  )
}

export default WeatherLayout ;