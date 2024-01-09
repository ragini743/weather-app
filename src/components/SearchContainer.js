import React from 'react'
import { searchIcon } from '../constant/Icon'

const SearchContainer = () => {
  return (
    <div className='flex justify-evenly'>
        <input type='text'placeholder='search city' id="text" className='border-gray-50 border-2 rounded-2xl break-words outline-none w-[80%] pl-2'></input>
        <div className='w-[10%]'>
            <img src={searchIcon} alt="search-icon"></img>
        </div>
    </div>
  )
}

export default SearchContainer