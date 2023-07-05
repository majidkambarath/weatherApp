import React from 'react'
import { formatToLocalTime, iconUrlFromCode } from '../../service/fetchApi'
export default function weatherShow({data:{dt,timezone,name,temp,icon,details}}) {
    console.log(dt,timezone,name,temp)
  return (
    <> 
         <div className="flex justify-center py-9">
            <div className="flex">
               <h className="text-7xl text-white" >
                {temp.toFixed()}°
               </h>
               <div className="mt-4">
               <h className="text-3xl text-white font-sub ml-2  ">
                {name}
                </h>
                <h1  className="text-xs text-white font-time ml-2">
                {formatToLocalTime(dt,timezone)}
                </h1>
               </div>
               <div className=" ml-2">
                <div className='-mt-6'>
                <img className='w-23' src={iconUrlFromCode(icon)} alt="img" />
                </div>
                <div className='-mt-5 ml-6'>
                <h className=" font-time text-white text-sm ml-2 ">{details}</h>
                </div>
               
               </div>
            </div>
            
            </div>
    </>
  )
}
