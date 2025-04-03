import React from "react";
import Link from "next/link";
import Image from "next/image";
import twitter from "../assets/Icons/twitter.png"
import linkedin from "../assets/Icons/linkedin.png"
import facebook from "../assets/Icons/facebook-app-symbol.png"
import instagram from "../assets/Icons/instagram.png"

const LandingFooter = () =>{
    return(
        <div className="text-white bg-brand-brand_black px-10 py-8 box-border lg:pb-4">
            <div className="flex flex-wrap box-border gap-y-4 gap-x-6 lg:justify-center lg:items-center ">
                <div className="w-[45%] box-border lg:w-[15%]">
                   <h4 className="font-bold text-[16px] text-white">
                        <Link href="/" className="transition-all duration-500 delay-200 text-white focus:underline active:underline underline-offset-1 hover:text-[#277C78]">About Us</Link></h4>
                    <ul className="text-[16px]">
                        <li><Link className=" text-[#96989A] hover:text-white active:text-white hover:underline duration-400  delay-100 transition-all focus:text-white cursor-pointer" href="/AboutUs#vision">Our Vision</Link></li>
                        <li><Link className=" text-[#96989A] hover:text-white active:text-white hover:underline duration-400  delay-100 transition-all focus:text-white cursor-pointer" href="/AboutUs#culture">Our Culture</Link></li>
                        <li><Link className=" text-[#96989A] hover:text-white active:text-white hover:underline duration-400  delay-100 transition-all focus:text-white cursor-pointer" href="/AboutUs#staff">Our Staff</Link></li>
                    </ul>
                </div>
                <div className="w-[45%] box-border lg:w-[15%]">
                <h4 className="font-bold text-[16px] text-white">
                <Link href="/Help" className="transition-all duration-500 delay-200 text-white focus:underline active:underline underline-offset-1 hover:text-[#277C78]">Help</Link></h4>
                    <ul className="text-[16px]">
                        <li><Link className=" text-[#96989A] hover:text-white active:text-white hover:underline duration-400  delay-100 transition-all focus:text-white cursor-pointer" href="/Help#privacy">Privacy</Link></li>
                        <li><Link className=" text-[#96989A] hover:text-white active:text-white hover:underline duration-400  delay-100 transition-all focus:text-white cursor-pointer" href="/Help#complaint">Complaints</Link></li>
                        <li><Link className=" text-[#96989A] hover:text-white active:text-white hover:underline duration-400  delay-100 transition-all focus:text-white cursor-pointer" href="/#Help#cookie">Cookie policy</Link></li>
                    </ul>
                </div>
                <div className="w-[50%] box-border lg:w-[15%]">
                <h4 className="font-bold text-[16px] text-white">
                <Link href="/" className="transition-all duration-500 delay-200 text-white focus:underline active:underline underline-offset-1 hover:text-[#277C78]">Company Policies</Link></h4>
                    <ul className="text-[16px]">
                        <li><Link className=" text-[#96989A] hover:text-white active:text-white hover:underline duration-400  delay-100 transition-all focus:text-white cursor-pointer" href="/">Website Terms</Link></li>
                        <li><Link className=" text-[#96989A] hover:text-white active:text-white hover:underline duration-400  delay-100 transition-all focus:text-white cursor-pointer" href="/">Legal Agreement</Link></li>
                        <li><Link className=" text-[#96989A] hover:text-white active:text-white hover:underline duration-400  delay-100 transition-all focus:text-white cursor-pointer" href="/">Modern Slavery Policy</Link></li>
                    </ul>
                </div>
            </div>
            <div className="py-2 mt-4 lg:flex justify-between flex-row-reverse lg:mx-12 items-end lg:mt-8">
                <div>
                    <ul className="flex justify-start items-center gap-x-2">
                        <li><a href="" className="w-9 h-9 rounded-md bg-white flex items-center justify-center p-2 cursor-pointer">
                            <Image src= {twitter} alt="twitter" width={64} height={64} className="w-5 h-5" />
                            </a>
                        </li>
                        <li><a href="" className="w-9 h-9 rounded-md bg-white flex items-center justify-center p-2 cursor-pointer">
                            <Image src= {facebook} alt="facebook" width={64} height={64} className="w-5 h-5" />
                            </a>
                        </li>
                        <li><a href="" className="w-9 h-9 rounded-md bg-white flex items-center justify-center p-2 cursor-pointer">
                            <Image src= {instagram} alt="instagram" width={64} height={64} className="w-5 h-5" />
                            </a>
                        </li>
                        <li><a href="" className="w-9 h-9 rounded-md bg-white flex items-center justify-center p-2 cursor-pointer">
                            <Image src= {linkedin} alt="linkedin" width={64} height={64} className="w-5 h-5" />
                            </a>
                        </li>
                    </ul>
                    <h3 className="text-white font-bold text-[18px]">Contact Links</h3>
                </div>
                <h3 className="text-white text-3xl font-extrabold">Finance</h3>
            </div>
           
            
        </div>
    );
}
export default LandingFooter