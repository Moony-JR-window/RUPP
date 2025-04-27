import React from 'react'
import Information_field from '../component/field-Item/Information_field'
import ListApiRent from '../component/listApirent/ListApiRent'




const page = () => {
  return (
    <div className=' w-full h-screen gap-6 flex '>
      <div className=' w-7/12'>
        <Information_field />
      </div>

      <div className=' w-7/12'>
        <ListApiRent />
      </div>

    </div>
  )
}

export default page