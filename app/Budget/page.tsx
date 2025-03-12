import React from 'react'
import Sidebar from '../components/sidebar'
import BudgetModal from '../modal/budget_modal'
import Button from '../components/button'
import BudgetChart from '../modal/budgetChart'


const page = () => {
  
  return (
    <div className='flex bg-brand-bg_white_clr p-5 md:p-0 justify-between '>
      <div className="hidden lg:block w-1/5 ">  <Sidebar /></div>
      <div className='w-full lg:w-4/5  md:p-8  '>
        <div className='flex justify-between mb-8'>
          <h1 >Budgets</h1>
          <div>
            <Button className='text-center hover:bg-white hover:text-black outline-none hover:outline hover:outline-[1px] hover:outline-brand-outline_gray' text='+ Add New Budget' textColor='text-white' bgColor='bg-black' />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='lg:w-1/2 lg:mr-5 mb-5 lg:mb-0'>
            <BudgetChart />
          </div>
          <div className="lg:w-1/2"> <BudgetModal /></div>
        </div>
      </div>

    </div>
  )
}

export default page