"use client";

import React from 'react'
import Sidebar from '../components/sidebar'
import bill_icon from '../assets/Icons/recurring Icon.png'
import Image, { StaticImageData } from 'next/image'
import BillList from '../components/billsList';
import MobileTab from '../components/mobileTab';
import Dropdown from '../components/dropdown';
import BillsHeader from '../components/billsHeader';



const Bills = () =>{
    return(
        <div className='flex bg-brand-bg_white_clr  flex-col py-6  lg:py-0 md:pb-12 lg:flex-row lg:items-start md:h-auto '>
            {/*className = 'flex bg-brand-bg_white_clr flex-col md:h-auto w-screen items-center justify-center lg:justify-around lg:flex-row lg:items-start' */}
            <div className='hidden lg:block w-[25%]'><Sidebar/></div>
            <div className='w-full flex flex-col px-6 lg:w-[75%] lg:py-6'>
                <div>
                    <h2 className='mb-4 pl-4 text-2xl font-semibold'>Recurring Bills</h2>
                </div>
                <div className='flex flex-col lg:flex-row lg:gap-x-4 '>
                    <div className='left-total-summary flex flex-col justify-start md:flex-row md:gap-x-4 items-stretch h-full lg:flex-col lg:w-[50%] '>
                        <div className='w-full bg-brand-brand_black px-6 py-4 rounded-lg mb-4 md:flex flex-col flex-grow'>
                            <Image src={bill_icon} width={40} height={40} 
                            className='w-8 clear-both float-left h-8 mr-4 md:my-8' alt='user expense img'  /> 
                            <p className='text-brand-text_gray text-white text-[12px] mb-2'>Total Bills</p>
                            <h2 className='text-brand-text_gray text-white font-bold text-3xl'>$385.98</h2>
                        </div>
                        <div className='bg-white w-full rounded-lg black px-6 py-4  mb-4 '>
                            <h3 className=' font-bold text-[15px] text-black mb-2'>Summary</h3>
                            <div className='border-b-[2px] border-b-gray-100 py-3 flex justify-between'>
                                <p className='text-brand-text_gray text-[13px] lg:text-[10px]'>Paid Bills</p>
                                <p className=' text-[13px] text-black font-bold lg:text-[10px]'>{`2($230.00)`}</p>
                            </div> 
                            <div className='border-b-[2px] border-b-gray-100 py-3 flex justify-between'>
                                <p className='text-brand-text_gray text-[13px] lg:text-[10px]'>Total Upcoming</p>
                                <p className=' text-[13px] text-black  font-bold lg:text-[10px]'>{`2($1230.00)`}</p>
                            </div>
                            <div className=' py-3 flex justify-between'>
                                <p className='text-brand-text_gray text-[13px] text-red-500 lg:text-[10px]'>Due soon</p>
                                <p className=' text-[13px] text-red-500 font-bold lg:text-[10px]'>{`2($40.00)`}</p>
                            </div>    
                        </div>
                        
                    </div>
                    <div className='bg-white rounded-lg py-8 px-6 mb-12 md:mb:20 lg:w-full'>
                        <div className='flex justify-between  gap-x-2 md:gap-x-20 mb-4'>
                            <div className='flex flex-col flex-grow relative'>
                                
                                <input className='flex-1 outline-none pl-2 lg:text-[10px] border border-grey-300 
                                rounded-md p-2 focus:outline-none focus:ring-2 text-xs
                                ' placeholder='Search transaction'></input>
                                <button className = 'h-5 w-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-grey-300 p-1 bg-search-icon bg-center bg-contain bg-no-repeat' >
                                </button>
                            </div>

                            <div className='ml-4 mr-2 md:hidden'>
                            <button className = 'h-5 w-5 text-grey-300 p-1 bg-category bg-center bg-contain bg-no-repeat' >
                            </button>
                            </div>

                            <div className=' hidden md:flex mx-6 items-center justify-center'>
                                <p className="text-brand-text_gray text-[12px] lg:text-[10px] text-left pr-2">Sort by</p>
                                <Dropdown items = {[{name:"Age"}, {name: "Size"}, {name: "Modified"}]} first = "Latest"/>
                            </div>
                        </div>
                        <div>
                            <div className='hidden md:block'><BillsHeader/></div>
                            <BillList/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <MobileTab/>
            </div>
        </div>
    );
}
export default Bills