"use client";

import React from 'react'
import Sidebar from '../components/sidebar'

import emma from '../assets/Sidebar/emma.png';
import bites from '../assets/Sidebar/bites.png';
import sun from '../assets/Sidebar/sun.png';
import dan from '../assets/Sidebar/new_guy.png';
import TransactionList from '../components/TransactionsList'
import MobileTab from '../components/mobileTab';
// import pagination from '../assets/Icons/paginatin.png';
// import Image  from 'next/image'
import Dropdown from '../components/dropdown';

const listOfTransactions = [
    {id : 1, text: "Emma Richardson", amount : "+&75.00", color : "brand_black", img: emma, date: "19-Aug-2025", category : "Personal care"  },
    {id : 2, text: "Sun Kim", amount : "-$55.00", color : "brand-green", img: sun, date: "19-Aug-2025", category : "General"  },
    {id : 3, text: "Savory bites", amount : "+$75.00", color : "brand_black", img: bites, date: "19-Aug-2025", category : "Lifestyle"  },
    {id : 4, text: "Dan carter", amount : "+$97.00" , color : "brand_black", img: dan, date: "19-Aug-2025", category : "General"  },
    {id : 5, text: "Sun Kim", amount : "+$75.00", color : "brand_black", img: sun, date: "19-Aug-2025", category : "Transportation"  },
    {id : 6, text: "Emma Richardson", amount : "+&75.00", color : "brand_black", img: emma, date: "19-Aug-2025", category : "Personal care"  },
    {id : 7, text: "Sun Kim", amount : "-$55.00", color : "brand-green", img: sun, date: "19-Aug-2025", category : "General"  },
    {id : 8, text: "Savory bites", amount : "+$75.00", color : "brand_black", img: bites, date: "19-Aug-2025", category : "Lifestyle"  },
    {id : 9, text: "Dan carter", amount : "+$97.00" , color : "brand_black", img: dan, date: "19-Aug-2025", category : "General"  },
    {id : 10, text: "Sun Kim", amount : "+$75.00", color : "brand_black", img: sun, date: "19-Aug-2025", category : "Transportation"  },
    {id : 11, text: "Emma Richardson", amount : "+&75.00", color : "brand_black", img: emma, date: "19-Aug-2025", category : "Personal care"  },
    {id : 12, text: "Sun Kim", amount : "-$55.00", color : "brand-green", img: sun, date: "19-Aug-2025", category : "General"  },
    {id : 13, text: "Savory bites", amount : "+$75.00", color : "brand_black", img: bites, date: "19-Aug-2025", category : "Lifestyle"  },
    {id : 14, text: "Dan carter", amount : "+$97.00" , color : "brand_black", img: dan, date: "19-Aug-2025", category : "General"  },
    {id : 15, text: "Sun Kim", amount : "+$75.00", color : "brand_black", img: sun, date: "19-Aug-2025", category : "Transportation"  }



]


const Transactions = () =>{
    return(
        <div className= "flex bg-brand-bg_white_clr flex-col md:h-auto items-center justify-center lg:justify-around lg:flex-row lg:items-start">
            <div className="hidden lg:block lg:w-1/5 lg:mr-10"> <Sidebar /></div>
            <div className = "flex pb-10 w-full mx-4 md:px-10 lg:p-2 p-4 md:items-center md:justify-center lg:w-4/5 flex-col ">
                <h2 className='mb-4 font-bold text-[20px] md:w-full md:text-left pl-[20px]'>Transactions</h2>
                <div className="bg-white min-h-5/6 rounded-xl w-full flex   flex-col mb-12 flex-grow items-center lg:px-12 ">
                    <div className='flex flex-row px-4 my-4 w-full items-center place-content-between justify-center md:justify-between md:pl-8 mx-8 md:my-6 '>
                        <div className='flex flex-col relative'>
                            
                            <input className='flex-1 outline-none pl-2 border border-grey-300 
                            rounded-md p-2 focus:outline-none focus:ring-2 text-xs
                            ' placeholder='Search transaction'></input>
                            <button className = 'h-5 w-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-grey-300 p-1 bg-search-icon bg-center bg-contain bg-no-repeat' >
                             </button>
                        </div>

                        <div className='ml-4 mr-2 md:hidden'>
                        <button className = 'h-5 w-5 text-grey-300 p-1 bg-category bg-center bg-contain bg-no-repeat' >
                        </button>
                        </div>
                        
                        <div className='mx-2 md:hidden'>
                        <button className = 'h-5 w-5 text-grey-300 p-1 bg-filter bg-center bg-contain bg-no-repeat' >
                        </button>
                        </div>
                        <div className=' hidden md:flex mx-6 items-center justify-center'>
                            <p className="text-brand-text_gray text-[12px] text-left pr-2">Sort by</p>
                           <Dropdown items = {[{name:"Latest"}, {name:"Age"}, {name: "Size"}, {name: "Modified"}]} />
                        </div>
                        <div className=' hidden md:flex mx-6 items-center justify-center'>
                            <p className="text-brand-text_gray text-[12px] text-left pr-2">Category</p>
                           <Dropdown items = {[{name:"All categories"}, {name:"Transportation"}, {name: "Lifestyle"}, {name: "General"}]} />
                        </div>
                    </div>
                    <div className = 'w-full px-4 ' >
                        <TransactionList Transactions={listOfTransactions} itemsPerPage={10} />
                        
                    </div>
                    
                </div>
            </div>
            <div>
            <MobileTab/>
            </div>
        </div>
    )
}

export default Transactions