'use client'
import React from 'react'
import { toggle } from '../interface/Toggle'

const ToggleAnimation:React.FC<toggle> = ({toggle,HandleClick}) => {
  return (
    <div onClick={HandleClick} className='flex flex-col gap-1 transition-all cursor-pointer '>
        <div className={` transition-all h-1 bg-gray-500 ${toggle? "  rotate-45 w-10  " :"block w-8 " } `}></div>
        <div className={` transition-all h-1 bg-gray-500 ${toggle? " w-0 absolute " :" block w-8 " } `}></div>
        <div className={` transition-all h-1 bg-gray-500 ${toggle? " -rotate-45 w-10  " :"block w-8 " }  `}></div>
    </div>
  )
}

export default ToggleAnimation