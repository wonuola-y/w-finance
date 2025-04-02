import Link from 'next/link'
import {usePathname} from 'next/navigation';
import React from "react";

const LandingHeader = () =>{
    return(
        <header className='bg-[#201F24] md:flex hidden justify-between items-center px-12 py-2 fixed text-white w-full z-50'>
            <h1 className='text-2xl font-extrabold animate-slideDown_4'>Finance</h1>
            <nav className='flex gap-x-2 items-center justify-center'>
                <Link href="/Blog" 
                className=" text-base text-white cursor-pointer py-1 px-3 rounded hover:bg-[#96989A] transition-all duration-500 delay-200 animate-slideDown_2 ">
                    Blog</Link>

                <Link href="/Help" 
                className=" text-base text-white cursor-pointer py-1 px-3 rounded hover:bg-[#96989A] transition-all duration-500 delay-200 animate-slideDown_4 ">
                    Help</Link>

                <Link href="/AboutUs" 
                className=" text-base text-white cursor-pointer py-1 px-3 rounded hover:bg-[#96989A] transition-all duration-500 delay-200 animate-slideDown_6">
                    About Us</Link>

                <Link href="/" 
                className=" text-base text-white cursor-pointer py-1 px-3 rounded hover:bg-[#96989A] transition-all duration-500 delay-200 animate-slideDown_8">
                    Contact</Link>
            </nav>
            <div className='flex gap-x-2 justify-center items-center'>
                <button className='cursor-pointer py-1 px-3 rounded hover:bg-[#96989A] transition-all duration-500 delay-200 animate-slideDown_8'><Link href="/SignUp">Sign Up</Link></button>
                <button className='cursor-pointer py-1 px-3 rounded hover:bg-[#96989A] transition-all duration-500 delay-200 animate-slideDown_6'><Link href="/login">Log in</Link></button>
            </div>
         </header>
    );
}

export default LandingHeader