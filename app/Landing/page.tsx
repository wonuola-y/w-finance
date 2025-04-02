"use client";

import React from "react";
import LandingHeader from "../components/landingHeader";
import MobileLandingHeader from "../components/mobileLandingHeader";
import Image from 'next/image';
import home from "../assets/Icons/inactive home.png";
import budgets from "../assets/Icons/budgets.svg";
import trans from "../assets/Icons/transactions.svg";
import pots from "../assets/Icons/small_pot.png";
import bills from "../assets/Icons/recurring_bills.svg";
import BudgetChart from '../modal/budgetChart';
import checked from '../assets/Icons/checked.png';
import Dropdown2 from "../components/dropdown2";
import Dropdown3 from "../components/dropdown3";
import { useState } from "react";
import CarouselSlider from "../components/carouselSlider";
import LandingCashBack from "../components/LandingCashback";
import LandingPerksCard from "../components/LandingPerksCard";
import bandwidth from '../assets/Icons/bandwidth1.png'
import zero_fees from '../assets/Icons/zero_fee.svg'
import LandingFooter from "../components/LandingFooter";
import LandingBudgetChart from "../components/LandingBudgetChart";
import Carousel from "../components/carousel";
import Link from "next/link";






export default function Landing() {
    const [clicked, setColor] = useState(false);
   
    return(
        <div className="max-w-[100%] box-border bg-brand-bg_white_clr  md:p-0 ">
            
            {/*<motion.div
            initial = {{x:-100, opacity: 0}}
            animate = {{ x :0, opacity: 1}}
            transition = {{duration : 0.5, delay : 0.5}}
            >
                <h1>Slide-In Animation with framer-motion</h1>
            </motion.div>

            <h2 className="animate-slideIn text-4xl">Using Tailwind</h2>*/}
            <LandingHeader />
            <MobileLandingHeader/>
            <div className="px-2">
                <h2 className="font-bold text-4xl text-center px-12 pt-12 pb-4 animate-slideDown_12 lg:px-96 lg:text-5xl lg:pt-24" >
                    <span className="text-[#277C78]">Financial Tracker </span>
                made especially for <span className="text-[#277C78] italic">you</span></h2>
                <p className="px-12 text-center mb-4 lg:px-[30%]">
                    Spend, save and manage your money all in one place. Open a full bank account with us today!
                </p>
                <button className="flex items-center justify-center overflow-hidden  hover:bg-[#1C5B59] transition-all duration-500 delay-200  text-white bg-[#277C78] px-8 py-2 mx-[auto] rounded-full animate-expand ">
                    <span className="whitespace-nowrap animate-visible"><Link href= "/SignUp">Open Finance account</Link></span>
                </button>

                <div className="flex justify-center items-center w-full">
                <div className="my-12 px-3 rounded-lg lg:flex justify-between lg:w-[80%] lg:pr-4 lg:px-0 lg:border-brand-outline_gray lg:border-[1px]  " >
                    <div className="bg-[#201F24] px-12 py-6 rounded-lg mx-4 lg:mx-0 lg:mr-4 lg:flex justify-center items-center lg:w-[28%]  ">
                        <ul>
                            <li className="flex text-white py-2.5">
                                <Image src= {home} width ={40} height = {40} alt = "home" className="w-5 h-5 mr-6"/>
                                <p >Home</p>
                            </li>

                            <li className="flex text-white py-2.5">
                                <Image src= {trans} width ={40} height = {40} alt = "home" className="w-5 h-5 mr-6"/>
                                <p >Transaction</p>
                            </li>

                            <li className="flex text-white  py-2.5">
                                <Image src= {budgets} width ={40} height = {40} alt = "home" className="w-5 h-5 mr-6"/>
                                <p >Budgets</p>
                            </li>

                            <li className="flex text-white  py-2.5">
                                <Image src= {pots} width ={40} height = {40} alt = "home" className="w-5 h-5 mr-6"/>
                                <p >Pots</p>
                            </li>

                            <li className="flex text-white  py-2.5">
                                <Image src= {bills} width ={40} height = {40} alt = "home" className="w-5 h-5 mr-6"/>
                                <p >Recurring Bills</p>
                            </li>
                        </ul>
                    </div>
                    <div className="py-6 px-4 lg:w-[28%] lg:h-full lg:flex lg:flex-col items-center justify-center lg:flex-grow lg:pt-16">
                        <div className='w-full bg-brand-brand_black px-6 py-4 rounded-lg mb-4 md:flex flex-col flex-grow'>
                            <p className=' text-white text-[12px] mb-2'>Current Balance</p>
                            <h2 className=' text-white font-bold text-3xl'>$3,850.98</h2>
                        </div>
                        <div className='w-full text-black bg-white px-6 py-4 rounded-lg mb-4 md:flex flex-col flex-grow '>
                            <p className=' text-black text-[12px] mb-2'>Income</p>
                            <h2 className=' text-black font-bold text-3xl'>$4,385.98</h2>
                        </div>
                    </div>
                    <div className="lg:px-4  lg:py-4">
                        
                        <div className="lg:hidden" ><BudgetChart /></div>
                        <div className="lg:block hidden"><LandingBudgetChart/></div>
                    </div>
                </div>
                </div>
                <div className="bg-[#201F24] mx-3 px-4 py-6 ">
                    
                    <div className="">
                    <h2 className="font-bold text-white text-4xl text-center px-12 pt-4 pb-4 animate-slideDown_12" >Efficiency at its best</h2>
                    <p className="px-12 text-center mb-4 text-white ">Empowering global finance management </p>
                    <div className="lg:flex items-center justify-center lg:mb-20">      
                        <div className="mt-12 px-3 lg:w-[40%] lg:pl-12 ">
                            <p className="flex items-center text-[13px] bg-white text-black w-32 px-2 mb-2">
                                <span>Account Top-up</span>
                                <Image src= {checked} width ={40} height = {40} alt = "checked" className="w-3 h-3 ml-2"/>
                            </p>
                            <h2 className="pr-15 text-white text-3xl mb-4 lg:text-4xl">
                                Secure Finances: Your gateway to stable finances
                            </h2>
                            <p className="text-white pr-20 text-[12px] lg:text-base">
                                Simplifying payments in Nigeria and Internationally
                            </p>
                        </div>

                        <div className="lg:min-w-[40%] lg:px-24 ">
                            <div className="bg-[#E6E6E6]  rounded-2xl mx-3 px-3 py-3 mt-6 lg:p-7  ">
                                <div className="bg-white rounded-2xl flex flex-grow min-w-[20%] flex-col px-6 py-3">
                                    <h3 className="text-2xl text-black">Amount</h3>
                                    <p className="text-[#626070] text-[12px] mb-4">Deposit Money</p>

                                    <div className="bg-[#E6E6E6] rounded-xl px-4 py-2">
                                        <p className="text-brand-text_gray text-[13px] flex mb-1"><span className="mr-1 block">$ </span>
                                            <input className="w-full bg-transparent border-b-brand-outline_gray outline-0 placeholder:text-brand-text_gray placeholder:text-[13px]"
                                             type= "text" placeholder="Enter amount"></input>
                                        </p>
                                        <p className="text-[#626070] text-[10px]">Balance: $6,420.00</p>
                                    </div>

                                    <div className='py-4'>
                                        <p className="text-brand-text_gray text-[12px] text-left pr-2 pb-1">Who are you sending money to?</p>
                                        <Dropdown2 items = {[{name:"Rachel Smith"}, {name: "Emma Richards"}, {name: "Rosa Parks"}]} first = "John Smith"/>
                                    </div>

                                    <div className=''>
                                        <p className="text-brand-text_gray text-[12px] text-left pr-2 pb-1">Who are you sending money to?</p>
                                        <Dropdown3 items = {[{name:"Transportation"}, {name: "General"}, {name: "Utilities"}]} first = "Lifestyle"/>
                                    </div>
                                    <button className = {`px-4 py-3 my-2 mt-3 text-white w-full rounded-xl ${clicked ? "bg-[#277C78]" : "bg-[#201F24]"} transition-all duration-800 delay-200`}
                                    
                                    onClick ={() => setColor(!clicked)}>
                                        <p className="whitespace-nowrap animate-visible text-[13px]">Confirm and Pay</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    </div>
                    <div>
                     <div className="lg:hidden"><CarouselSlider /></div>
                     <div className="hidden lg:block" ><Carousel/></div>
                    </div>     
                </div>
                <div className="my-6 lg:my-16 lg:mx-24">
                    <h2 className="px-14 text-3xl text-center mb-6 lg:text-5xl lg:px-[25%]">Helping Entrepreneurs make <span className="text-[#277C78] font-bold">more money</span></h2>
                    <p className="inline-block  max-w-36 bg-[#277C78] text-white px-3 py-1 ml-4 font-bold">Coming Soon!</p>
                    <LandingCashBack />
                </div>
                <div className="px-4 my-12 lg:flex justify-center items-center lg:gap-x-4">
                    <LandingPerksCard 
                    name = "zero fees" 
                    description="Complete transparency with no hidden fees" 
                    image = {zero_fees}/>

                    <LandingPerksCard 
                    name = "Fast Network" 
                    description="Super fast transactions that get delivered at an instant." 
                    image = {bandwidth}/>
                </div>
            </div>
            <footer>
                <LandingFooter />
            </footer>
           
        </div>
    );
}