import React from "react";
import Image from "next/image";
import Link from "next/link";
import open_arrow from '../assets/Icons/right_arrow.png'

export default function HelpSideBar() {
    return(
        <div className="hidden md:block w-1/5  fixed h-screen pt-20 ">
            <aside className=" w-full h-full  bg-brand-brand_black text-white  py-6">
        <nav>
            <ul>
                <li className="">
                    <Link href="/Help#privacy" className="text-white flex flex-row items-center justify-end gap-x-3 px-10 py-3 hover:bg-brand-text_gray transition-colors duration-500 delay-200">
                        <p>Privacy</p> 
                        <Image src= {open_arrow} width = {122} height= {244} alt="right arrow"  className="h-4 w-2"/>
                    </Link> 
                </li>
                <li className="">
                    <Link href="/Help#cookie" className="text-white flex flex-row items-center justify-end gap-x-3 px-10 py-3 hover:bg-brand-text_gray transition-colors duration-500 delay-200">
                        <p>Cookies</p>
                        <Image src= {open_arrow} width = {122} height= {244} alt="right arrow"  className="h-4 w-2"/>
                    </Link> 
                </li>
                <li className="">
                    <Link href="/Help#complaint" className="text-white flex flex-row items-center justify-end gap-x-3 px-10 py-3 hover:bg-brand-text_gray transition-colors duration-500 delay-200">
                        <p>Complaints</p>
                        <Image src= {open_arrow} width = {122} height= {244} alt="right arrow"  className="h-4 w-2"/>
                    </Link> 
                </li>
                
            </ul>
        </nav>
    </aside>
        </div>
    );
}