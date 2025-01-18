'use'
import React from 'react'
import ToggleAnimation from './ToggleAnimation'
import { toggle } from '../interface/Toggle'


const ToggleMenu:React.FC<toggle> = ({toggle,setToggle}) => {
    
    return (
        <div className='flex p-5 pt-10 w-full justify-start items-start '>
            <div className=' pl-5 w-2/12 mt-[-10px] '>
                <h1 className='text-4xl font-semibold '>Dentist management <br/> system </h1>
            </div>
            <ToggleAnimation toggle={toggle} setToggle={setToggle}  />
        </div>
    )
}

export default ToggleMenu