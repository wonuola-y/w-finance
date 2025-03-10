import React from 'react'
import Sidebar from '../components/sidebar'
import BudgetModal from '../modal/budget_modal'


const page = () => {
  return (
      <div className='flex bg-brand-bg_white_clr p-5 md:p-0 '>
          <div className="hidden md:block w-1/4">  <Sidebar /></div>
          <div className='w-full md:w-[75%] md:p-8  '>
              <BudgetModal />
          </div>
    </div>
  )
}

export default page