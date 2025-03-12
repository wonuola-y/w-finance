import React from 'react'
import Sidebar from '../components/sidebar'
import Button from '../components/button'
import PotModal from '../modal/pots'

const page = (

) => {
  return (
      <div className='flex bg-brand-bg_white_clr p-5 md:p-0 justify-between '>
          <div className="hidden lg:block w-1/5 ">  <Sidebar  /></div>
          <div className='w-full lg:w-4/5  md:p-8  '>
              <div className='flex justify-between mb-8'>
                  <h1 >Pots</h1>
                  <div>
                      <Button className='text-center hover:bg-white hover:text-black outline-none hover:outline hover:outline-[1px] hover:outline-brand-outline_gray' text='+ Add New Pot' textColor='text-white' bgColor='bg-black' />
                  </div>
              </div>
              <div className=''>
                  
                  <PotModal />
              </div>
          </div>

      </div>
  )
}

export default page