'use client'
import React, { useState } from 'react'
import Profile from './component/menu/Profile'
import Main from './component/main/Main'

const page:React.FC = () => {
  const [toggle,setToggle] = useState<boolean>(true)
  return (
    <div className='flex '>
      <Profile toggle={toggle} setToggle={setToggle} />
      <Main toggle={toggle} setToggle={setToggle}   />
    </div>
  )
}

export default page