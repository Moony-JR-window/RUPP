
'use client'
import React, { useState } from 'react'
import ToggleMenu from '../menu/ToggleMenu'
import { toggle } from '../interface/Toggle'

const Main:React.FC<toggle> = ({toggle,setToggle}) => {
    return (
        <div className={` w-full h-screen justify-start items-center flex flex-col bg-gray-200 ${toggle? " ml-[-50px]  rounded-s-3xl " : " delay-[1000ms] "} `}>
            <ToggleMenu toggle={toggle} setToggle={setToggle}  />
            Main

        </div>
    )
}

export default Main