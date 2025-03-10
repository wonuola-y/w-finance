import React from 'react'
import home from "../assets/Icons/active_home.png";
import budgets from "../assets/Icons/budgets.svg";
import trans from "../assets/Icons/transactions.svg";
import pots from "../assets/Icons/small_pot.png";
import bills from "../assets/Icons/recurring_bills.svg";
import Image from 'next/image'


const Sidebar = () => {
  return (
      <div>
          <div className='bg-brand-brand_black  h-full fixed w-1/4 mb-16  pr-6 rounded-tr-xl'>
              <h1 className="font-extrabold text-3xl text-white mt-10 text-left pl-8 mb-16">w-finance</h1>
              <ul>
                  <li className='py-4 px-6  flex text-black bg-white font-semibold rounded-r-xl '><Image  src={home} alt='home icon' className="mx-6"/>Overview</li>
                  <li className='py-4 px-6 flex text-white  '><Image  src={trans} alt='2 arrows up and down' className="mx-6"/>Transactions</li>
                  <li className='py-4 px-6 flex text-white '><Image src={budgets} alt='pie chart icon with cut outs' className="mx-6"/>Budget</li>
                  <li className='py-4 px-6 flex text-white '><Image  src={pots} alt="a pot icon with doll" className="mx-6"/>Pots</li>
                  <li className='py-4 px-6 flex text-white '><Image  src={bills} alt="a reciept icon" className="mx-6"/>Recurring bills</li>
              </ul>
          </div>

    </div>
  )
}

export default Sidebar