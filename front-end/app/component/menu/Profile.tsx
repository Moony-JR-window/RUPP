'use client'
import React, { useEffect, useState } from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import Image from 'next/image';
import profile from "/app/image/profile.jpg"
import TimeDisplay from '../time/Time';
import Logout from './Logout';
import ToggleMenu from './ToggleMenu';
import { toggle } from '../interface/Toggle';


const Profile: React.FC<toggle> = ({ toggle, setToggle }) => {
    const [isVisible, setIsVisible] = useState<boolean>(toggle);

    useEffect(() => {
        if (toggle) {
            setIsVisible(true); // Make it visible immediately when toggle is true
        } else {
            // Delay hiding until after the transition
            const timeout = setTimeout(() => setIsVisible(false), 1000); // Matches the transition duration
            return () => clearTimeout(timeout);
        }
    }, [toggle]);


    function handleToggle() {
        setToggle?.(!toggle);
    }
    return (
        <div className={` transition-all ${toggle ? " w-[25%] " : "w-0 delay-[1000ms]  "}  h-screen flex justify-center items-center bg-blue-400 `}>
            <div className='  w-full flex flex-col gap-10 justify-start items-center h-full   '>
                <div className=' font-serif container pl-16 pt-5 text-2xl '>
                    {<TimeDisplay />}
                    <div className={` transition-all absolute top-0 ${toggle ? "left-[20%] " : 'left-[2%] delay-[1000ms] '} `}>
                        <ToggleMenu toggle={toggle} setToggle={setToggle} HandleClick={handleToggle} />
                    </div>
                </div>
                <div className='p-10  flex flex-col gap-5  '>
                    <div className='w-full h-full '>
                        <Image className=' rounded-full ' src={profile} alt='Profile Picture' width={100} height={50} />
                    </div>

                    <h1 className=' text-white '>None Name</h1>
                </div>
                <div className=' p-10 pt-10 gap-5 flex flex-col font-extrabold items-start  '>
                    {/* <span className='flex justify-start items-center '><label className='p-3 text-white  '></label></span> */}
                    <div className=' flex justify-start items-center w-full text-white  '>
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

                <div className='p-10'>
                    <Logout />
                </div>

            </div>
            <div className={` transition-all duration-1000 bg-first  ${!isVisible ? ' hidden ' : ' '} w-[20%] ml-[-2px] rounded-s-3xl h-full`} >
            </div>

        </div>
    )
}

export default Profile