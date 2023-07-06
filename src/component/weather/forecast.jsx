import React from 'react'
import { iconUrlFromCode } from '../../service/fetchApi'

export default function forecast({title ,items}) {
   

  return (
    <div>
        <div className='flex items-center justify-start '>
        <p className='text-white font-medium ml-5  text-sm uppercase'>{title}</p>
        </div>
       <hr className='my-2 md:w-[750px] ml-6 ' />
       <div className='flex flex-row items-center justify-evenly text-white '>
        {
          items.map((item)=>{
            console.log(items)
            return(
              <div className='flex flex-col items-center justify-center'>
            <p className='font-time text-lg'> {item.title} </p>
            <img className='w-9 my-2' src={iconUrlFromCode(item.icon)} alt="img" />
            <p className='font-medium'> {`${item.temp?.toFixed()}`}°</p>
          </div>
            )
            
        
          })
        }
          
       </div>
    </div>
  )
}
