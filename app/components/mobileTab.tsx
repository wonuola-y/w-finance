"use client";

import Image, { StaticImageData } from 'next/image'
import React from 'react'
import homeg from "../assets/Icons/active_home.png";
import home from "../assets/Icons/inactive home.png";
import budgets from "../assets/Icons/budgets.svg";
import budgetsg from '../assets/Icons/budget green.png'
import trans from "../assets/Icons/transactions.svg";
import transg from '../assets/Icons/Transaction green.png'
import pots from "../assets/Icons/small_pot.png";
import potsg from '../assets/Icons/pots green.png'
import bills from "../assets/Icons/recurring_bills.svg";
import billsg from '../assets/Icons/recuring green.png'
import Link from 'next/link'
import { useRouter } from 'next/router';
import {usePathname} from 'next/navigation';



const MobileTab = () =>{
    const pathname = usePathname()

    const navItems = [
        { name: "Home", path: "/Overview", activeIcon : homeg, inactiveIcon: home},
        { name: "Transactions", path: "/Transactions", activeIcon : transg, inactiveIcon: trans},
        { name: "Budget", path: "/Budget", activeIcon : budgetsg, inactiveIcon: budgets},
        { name: "Pots", path: "/Pots", activeIcon : potsg, inactiveIcon: pots},
        { name: "Recurring", path: "/Bills", activeIcon : billsg, inactiveIcon: bills}
    ];

    
    return(
        
        <nav className='lg:hidden flex items-center justify-center w-full bg-brand-brand_black fixed bottom-0 left-0 h-12 md:h-16'>
            <ul className = 'flex w-full items-end justify-evenly h-full'>
                

                
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return(
                            <li key = {item.name} className={`flex flex-grow items-center h-10 md:h-14 rounded-t-md justify-center ${isActive ? "bg-white border-b-[#277C78] border-b-[5px] border-solid" : "bg-transparent"}`}>
                                <Link key = {item.name} href={item.path} className='flex justify-center items-center flex-col'>
                                    <Image key = {item.name} src ={isActive ? item.activeIcon : item.inactiveIcon} width ={40} height = {40} alt = {item.name} className='w-5 h-5  mb-[4px]'/>
                                    <p className= {` hidden md:block text-[11px] text-brand-text_gray text-center ${isActive ? "text-green " : "text-white"}`}>{item.name}</p>
                                </Link>
                            </li>  
                        );
                    })}
                
                
            </ul>
        </nav>

    );
}

export default MobileTab