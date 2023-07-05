import React from 'react'

export default function selection({humidity,temp,speed,setQuery}) {
    
  return (
    <div>
        <div className='ml-6'>
           <p onClick={()=>setQuery({q:'london'}) } className='font-title text-white mt-2 cursor-pointer transform transition ease-in-out delay-150 hover:-translate-pl-2 hover:scale-110 duration-300'>LONDON</p>
            <p onClick={()=>setQuery({q:'paris'}) } className='font-title text-white mt-4 cursor-pointer transform transition ease-in-out delay-150 hover:-translate-pl-2 hover:scale-110 duration-300'>PARIS </p>
            <p onClick={()=>setQuery({q:'tokyo'}) } className='font-title text-white mt-4 cursor-pointer transform transition ease-in-out delay-150 hover:-translate-pl-2 hover:scale-110 duration-300'>TOKYO </p>
            <p onClick={()=>setQuery({q:'brazil'}) } className='font-title text-white mt-4 cursor-pointer transform transition ease-in-out delay-150 hover:-translate-pl-2 hover:scale-110 duration-300'>BRAZIL </p>
        </div>
        <hr className='w-[300px] mt-4 ml-6' />

        <div>
            <h1 className='text-white font-sub py-5 ml-6'>weather Details </h1>
            <div className='flex justify-around'>
                <h1 className='text-white font-title -ml-9 '>Cloudy</h1>
                <h1 className='text-white font-sub'>{`${temp?.toFixed()}`}%</h1>
            </div>
            <div className='flex justify-around mt-4'>
                <h1 className='text-white font-title -ml-9 '>Humidity</h1>
                <h1 className='text-white font-sub'>{humidity}%</h1>
            </div>
            <div className='flex justify-around mt-4'>
                <h1 className='text-white font-title -ml-9 '>wind</h1>
                <h1 className='text-white font-sub'>{speed} km/h</h1>
            </div>
        </div>
    </div>
  )
}
