import React from 'react'
import Profile from './component/menu/Profile'
import Main from './component/main/Main'

const page = () => {
  return (
    <div className='flex '>
      <Profile />
      <Main />
    </div>
  )
}

export default page