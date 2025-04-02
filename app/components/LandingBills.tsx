import React from "react";
import Image from "next/image";
import BillItem from "./billItems";
import logo_1 from '../assets/Icons/Ellipse 13.png'
import logo_2 from '../assets/Icons/Ellipse 13 1.png'
import logo_3 from '../assets/Icons/Ellipse 13 2.png'
import good from '../assets/Icons/checked.png'
import bad from '../assets/Icons/warning.png'


const LandingBills = () =>{
    return(
        <div className="bg-white py-6 px-4 rounded-lg">
            <div className='flex flex-wrap justify-between border-b-[2px] border-b-gray-100 py-2 items-center '>
                <Image src = {logo_1} width = {40} height = {40} alt = "bill Image" className="w-6 h-6"/>
                <div className=' flex w-[80%] flex-grow flex-shrink  max-w-[86%]'>
                    <p className='font-bold text-[12px] lg:text-[11px]'>Elevate Education</p>
                </div>
                <div className='flex items-center  '>
                    <p className='text-[10px]  lg:text-[10px] text-[#277C78]'>Monthly-1st
                        <span> <Image src={good} width={40} height={40} className='w-3 float-right h-3 ml-2' alt='Checked icon'  /></span>
                    </p>
                    
                </div>
                <div className='flex font-bold text-[12px] md:w-[20%] justify-end lg:text-[10px]'>
                    <p className='text-left'>$250.00</p>
                </div>
            </div>
            <div className='flex flex-wrap justify-between border-b-[2px] border-b-gray-100 py-2 items-center '>
                <Image src = {logo_2} width = {40} height = {40} alt = "bill Image" className="w-6 h-6"/>
                <div className=' flex w-[80%] flex-grow flex-shrink max-w-[86%]'>
                    <p className='font-bold text-[12px] lg:text-[11px]'>Brave zen spa</p>
                </div>
                <div className='flex items-center '>
                    <p className='text-[10px]  lg:text-[10px] text-[#277C78]'>Monthly-3rd
                        <span> <Image src={good} width={40} height={40} className='w-3 float-right h-3 ml-2' alt='Checked icon'  /></span>
                    </p>
                    
                </div>
                <div className='flex font-bold text-[12px] md:w-[20%] justify-end lg:text-[10px]'>
                    <p className='text-left'>$70.00</p>
                </div>
            </div>
            <div className='flex flex-wrap  justify-between border-b-[2px] border-b-gray-100 py-2 items-center '>
                <Image src = {logo_3} width = {40} height = {40} alt = "bill Image" className="w-6 h-6 mr-2"/>
                <div className=' flex w-[80%] flex-grow flex-shrink max-w-[86%]'>
                    <p className='font-bold text-[12px] lg:text-[11px]'>Charlie Electric Company</p>
                </div>
                <div className='flex items-center  '>
                    <p className='text-[10px]  lg:text-[10px] text-[#277C78]'>Monthly-5th
                        <span> <Image src={bad} width={40} height={40} className='w-3 float-right h-3 ml-2' alt='Checked icon'  /></span>
                    </p>
                    
                </div>
                <div className='flex font-bold text-[12px] md:w-[20%] justify-end lg:text-[10px]'>
                    <p className='text-left'>$10.00</p>
                </div>
            </div>
        </div>
    );
}
export default LandingBills