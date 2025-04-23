'use client'
import React, { useState } from 'react'
import Profile from './component/menu/Profile'
import Main from './component/main/Main'

const page:React.FC = () => {
  const [toggle,setToggle] = useState<boolean>(false)
  return (
    <div className='relative w-full h-screen'>
      <Profile toggle={toggle} setToggle={setToggle} />
      <Main toggle={toggle} setToggle={setToggle} />
    </div>
  )
}

export default page