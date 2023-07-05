import React, { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
export default function search({setQuery,units,setUnits}) {
    const [city,setCity] = useState('')
    const hanleClick = ()=>{
       if(city!=='') setQuery({q:city})
    }
  return (
    <div>

<div className='flex justify-between'>
        <div className='py-6 px-6'> 
           <input type="text"
            value={city}

           onChange={(e)=> setCity(e.currentTarget.value)}
            placeholder='Another Location '
           className='w-[250px] text-white h-8 bg-transparent border-b border-white focus:outline-none focus:border-white placeholder-white placeholder-opacity-75 ' />
        </div>
        <div  className='w-14 h-14 bg-orange-400 flex cursor-pointer justify-center items-center'>
                <span className='cursor-pointer' onClick={hanleClick}>
                <UilSearch  />
                </span>
        </div>
      </div>
    </div>
  )
}
