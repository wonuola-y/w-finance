import React from 'react'
import Sidebar from '../components/sidebar'
import Tabs from '../components/tabs'
import Image from 'next/image';
import emma from '../assets/Sidebar/emma.png';
import bites from '../assets/Sidebar/bites.png';
import sun from '../assets/Sidebar/sun.png';
import dan from '../assets/Sidebar/new_guy.png';
import bigPot from '../assets/Icons/big_pot.svg';
import TransactionOverview from '../components/transaction_overview';
import BudgetChart from '../modal/budgetChart';
import Bills from '../components/recurring_bills';

const page = () => {
    return (
        <div className='flex bg-brand-bg_white_clr p-5 md:p-0 '>
            <div className="hidden md:block w-1/4">  <Sidebar /></div>
            <div className='w-full md:w-[75%] md:p-8  '>
                <h1 className='mb-12 mt-5 pl-4 text-3xl font-semibold'>Overview</h1>
                <div className='flex flex-col md:flex-row w-100 justify-between '>

                    <Tabs header="Current balance" text="$4,000" headColor="text-white" textColor='text-white' bgColor=" bg-brand-brand_black" width="w-5/6" />
                    <Tabs header="Income" text="$3,816" textColor='text-black' headColor=" text-brand-text_gray" bgColor="bg-white" width="w-5/6" />
                    <Tabs header="Expenses" text="$4,000"
                        headColor=" text-brand-text_gray" textColor='text-black' bgColor="bg-white" width="w-5/6" />
                </div>
                <div className="flex flex-col md:flex-row my-8">
                    <div className='mb-4 md:w-2/3'>
                        <div className=' pots h-1/3 p-8 md:py-8 pb-5   bg-white rounded-2xl'>
                            <div className='pb-8'>
                                <div className='flex justify-between'>
                                    <h1 className='font-bold text-[20px]'>Pots</h1>
                                    <button><h4 className='text-[14px] hover:underline'>See Details</h4></button>

                                </div>
                            </div>
                            <div className=' first_section_pt_1 flex flex-col w-full justify-between '>
                                <div className='flex px-0 py-5 md:p-5  mb-5  rounded-xl bg-brand-bg_white_clr w-full items-center justify-between'>
                                    
                                    <div className=' flex flex-col md:flex-row md:justify-between items-center w-full '>
                                        <h3 className='flex items-center justify-between'>  <Image src={bigPot} alt="big savings pot icon" width={ 20} height={20} className='mr-2'/>Total Saved</h3>
                                        <p className='mt-1 md:mt-0 text-3xl font-bold'>$850</p>
                                    </div>
                                </div>
                                <div className="next-to-tab w-full
                                  pl-4 md:px-4">
                                    <div className='flex justify-between '>
                                        <div className='border-l-[#1B7F79] border-l-2 px-4 w-5/6'>
                                            <h4>Savings</h4>
                                            <p className='font-semibold text-[14px]'>$159</p>
                                        </div>
                                        <div className='border-l-[#91C6D2] border-l-2  px-4 w-5/6' >
                                            <h4>Gift</h4>
                                            <p className='font-semibold text-[14px]'>$159</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between my-4 '>
                                        <div className='border-l-[#E8C6A2] border-l-2  px-4 w-5/6'>
                                            <h4>Concert Ticket</h4>
                                            <p className='font-semibold text-[14px]'>$159</p>
                                        </div>
                                        <div className='border-l-[#4F4A5F] border-l-2  px-4 w-5/6' >
                                            <h4>New Laptop</h4>
                                            <p className='font-semibold text-[14px]'> $159</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='transactions h-2/3 bg-white rounded-xl mt-3 py-6 px-5 md:p-8'>
                            <div className='flex pb-8 justify-between '>
                                <h3 className='font-bold text-black text-[20px]'>Transactions</h3>
                                <button><h4 className='text-[14px] hover:underline'>View All</h4></button>
                            </div>


                            <TransactionOverview text="Emma Richardson" amount="+$75.00" color="brand-green" img={emma} date="19-Aug-2025" />
                            <TransactionOverview text="Sun Kim" amount="-$55.00" color="brand_black" img={sun} date="19-Aug-2025" />
                            <TransactionOverview text="Savory bites" amount="+$75.00" color="black" img={bites} date="19-Aug-2025" />
                            <TransactionOverview text="Dan carter" amount="+$97.00" color="brand-green" img={emma} date="19-Aug-2025" />
                            <TransactionOverview text="Sun Kim" amount="+$75.00" color="brand-green" img={dan} date="19-Aug-2025" />
                        </div>
                    </div>
                    <div className='md:w-1/2 md:mx-4 '>
                        <BudgetChart />
                        <div className='bg-white my-4 rounded-xl '>
                            <div className='flex justify-between px-8 py-8'>
                                <h3 className='font-bold text-black text-[20px]'>Recurring bills</h3>
                                <button><h4 className='text-[14px] hover:underline'>See Details</h4></button>
                            </div>
                            <div className='flex w-full items-center '>
                                <Bills />
                         </div>
                           
                      </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page