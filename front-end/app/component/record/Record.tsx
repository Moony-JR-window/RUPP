import React from 'react'
import Image from 'next/image'
import doctor from '/app//image/doctor.jpg'

const Record = () => {
  return (
    <div className=' container flex justify-end items-center h-full w-full text-white ' >

      <div className=' w-9/12 flex justify-between items-center rounded-md overflow-hidden bg-blue-400 pl-10 h-4/6 '>
        <div className=' gap-5 flex flex-col  '>
          <h1 className='text-xl'>Good Morning, </h1>
          <h1 className=' text-3xl font-semibold '>Mr. Not NAME </h1>
          <h1>This is You Sumarry Of Apirent.  </h1>
          <section className='flex gap-5 '>

            <div className='flex gap-3 '>
              <div className='w-14 h-14 rounded-md bg-red-400'></div>
              <div>
                <p>99+ </p>
                <span>Apirent</span>
              </div>
            </div>

            <div className='flex gap-3 '>
              <div className='w-14 h-14 rounded-md bg-green-400 '></div>
              <div>
                <p>99+ </p>
                <span>Apirent</span>
              </div>
            </div>
          </section>

        </div>
        <div className=' w-2/5  '>
          <Image className='mt-5 ' src={doctor} alt={''} width={250} height={100} />
        </div>
      </div>

    </div>
  )
}

export default Record