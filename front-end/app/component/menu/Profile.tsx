import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import Image from 'next/image';
import profile from "/app/image/profile.jpg"
import TimeDisplay from '../time/Time';

const Profile = () => {
    return (
        <div className=' w-[25%] h-screen flex flex-col justify-center items-center bg-blue-400 '>
            <div className=' flex flex-col gap-10 justify-start items-start h-full  '>
                <div className=' container pl-4 pt-5 text-2xl '>
                    {<TimeDisplay />}
                </div>
                <div className='p-10 flex flex-col gap-5  '>
                    <div className='w-full h-full '>
                        <Image className=' rounded-full ' src={profile} alt='Profile Picture' width={100} height={50} />
                    </div>

                    <h1 className=' text-white '>None Name</h1>
                </div>
                <div className=' container w-full gap-5 flex flex-col items-start  '>
                    <span className='flex justify-start items-center '><label className='p-3 text-white  '></label></span>
                    <div className='flex justify-start items-center text-white  '>
                        <span className='bg-blue-800 p-2 flex justify-center items-center rounded-full ' >
                            <IoHomeSharp />
                        </span>
                        <label className='p-3  '>Home</label>
                    </div>

                    <div className='flex justify-start items-center text-white  '>
                        <span className='bg-blue-800 p-2 flex justify-center items-center rounded-full ' >
                            <IoSettings />
                        </span>
                        <label className='p-3  '>Settings</label>
                    </div>
                    <div className='flex justify-start items-center text-white  '>
                        <span className='bg-blue-800 p-2 flex justify-center items-center rounded-full ' >
                            <FaLock />
                        </span>
                        <label className='p-3 '>Security</label>
                    </div>
                </div>

                <div className=' container w-full pt-10 text-white ' >
                    <span className='flex justify-start items-center  '> <span className='bg-blue-800 p-2 flex justify-center items-center rounded-full ' ><MdLogout /></span><label className='p-3'>Logout</label></span>
                </div>
            </div>

        </div>
    )
}

export default Profile