'use client'
import React from 'react'
import { MdLogout } from 'react-icons/md'

const Logout = () => {
    return (
        <div className=' font-extrabold container w-full text-white '>
            <button onClick={() => alert("logout Account")}  >
                <span className='flex justify-start items-center  '>
                    <span className='bg-blue-800 p-2 flex justify-center items-center rounded-full ' >
                        <MdLogout />
                    </span>
                    <label className='p-3'>Logout</label></span>
            </button>
        </div>
    )
}

export default Logout