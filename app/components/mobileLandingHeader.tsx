import { useState } from "react";
import menu_icon from '../assets/Icons/hambuger-menu.png'
import cancel from '../assets/Icons/cancel.png'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'; 
import downArrow from '../assets/Icons/down-arrow.png'

const MobileLandingHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="md:hidden box-border">
            <div className="bg-[#201F24]  top-0 left-0 sticky px-6 py-2 max-w-[100%] flex justify-between items-center">
                <h1 className=' text-white  font-extrabold animate-slideDown_4'>Finance</h1>
                <button onClick = {() => setIsOpen(!isOpen)}>
                    <Image src={isOpen ? cancel : menu_icon} width={40} height={40} className='w-5 h-5 cursor-pointer' alt='user expense img'  />
                </button>

            </div>
            <div className= {`bg-white z-10 text-black absolute top-[60px] left-0 right-0 bottom-0 px-6 py-4 pb-6 transform origin-top ${isOpen ? "scale-y-1" : "scale-y-0"} transition-all duration-500 delay-200`}>
                <Link href= "/Blog" className="flex items-center justify-between text-right w-full focus:bg-[#F8F4F0] active:bg-[#F8F4F0] px-4 relative  cursor-pointer border-b-[1px] border-b-[#98908B] py-3">
                    <Image src={downArrow} alt= 'down arrow' width={61} height= {45} className="w-2.5 h-2"></Image>
                    <p>Blog</p>
                </Link>

                <Link href= "/Help" className="flex items-center justify-between text-right w-full focus:bg-[#F8F4F0] active:bg-[#F8F4F0] px-4 relative  cursor-pointer border-b-[1px] border-b-[#98908B] py-3">
                    <Image src={downArrow} alt= 'down arrow' width={61} height= {45} className="w-2.5 h-2"></Image>
                    <p>Help</p>
                </Link>

                <Link href= "/" className="flex items-center justify-between text-right w-full focus:bg-[#F8F4F0] active:bg-[#F8F4F0] px-4 relative  cursor-pointer border-b-[1px] border-b-[#98908B] py-3">
                    <Image src={downArrow} alt= 'down arrow' width={61} height= {45} className="w-2.5 h-2"></Image>
                    <p>Contact Us</p>
                </Link>

                <Link href= "/AboutUs" className="flex items-center justify-between text-right w-full focus:bg-[#F8F4F0] active:bg-[#F8F4F0] px-4 relative  cursor-pointer border-b-[1px] border-b-[#98908B] py-3">
                    <Image src={downArrow} alt= 'down arrow' width={61} height= {45} className="w-2.5 h-2"></Image>
                    <p>About Us</p>
                </Link>
            </div>
        </nav>
    );
}

export default MobileLandingHeader