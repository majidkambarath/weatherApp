import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import Selection from '../search/selection'
export default function leftSide({data,setQuery}) {
console.log(data)
let humidity = data?.humidity
let temp = data?.temp
let speed = data?.speed
  return (
    <div className='bg-black/70 h-full w-[400px] '> 
      <div className='flex justify-between'>
        <div className='py-6 px-6'> 
           <input type="text"
            placeholder='Another Location '
           className='w-[250px] text-white h-8 bg-transparent border-b border-white focus:outline-none focus:border-white placeholder-white placeholder-opacity-75 ' />
        </div>
        <div className='w-14 h-14 bg-orange-400 flex cursor-pointer justify-center items-center'>
                <span className='cursor-pointer'>
                <UilSearch  />
                </span>
        </div>
      </div>
      <div>
        <Selection humidity={humidity} temp={temp} speed={speed} setQuery={setQuery} />
      </div>
      
    </div>
  )
}
