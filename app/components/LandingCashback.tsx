import React from "react";
import { useState } from "react";
import CashSwitch from "./cashSwich";
import white_star from '../assets/Icons/star_white.png'
import black_star from '../assets/Icons/star_black.png'
import Image from "next/image";

const LandingCashBack = () =>{
     const [flipped,  setState] = useState(false);
    return(
       <div className="w-full h-full ">
            <div className=" w-full h-[65vh] text-white flex flex-grow items-center px-4   transform [perspective:1000px] ">
                <div className={` w-full h-full transition-transform duration-700 [transform-style:preserve-3d] [transform-origin : center] ${flipped ? "[transform:rotateX(180deg)]" : ""}`}>
                    <div className=" absolute px-2 py-4 w-full h-full bg-white text-white flex flex-col flex-grow justify-start items-center  shadow-lg drop-shadow-md [backface-visibility:hidden] lg:px-4 ">
                        <CashSwitch />
                        <h3 className="text-black mt-5 text-4xl px-12 text-center my-6 lg:text-[2.5rem]">Unlimited <span className="text-[#277C78] lg:mt-3 lg:block">Cashback</span></h3>
                        <p className="text-[15px] text-center text-black mb-8 px-12">Instant 1% back on  all your transportation expenditure</p>
                        <div className="w-full  flex justify-end px-4 absolute bottom-4 ">
                        <button className="relative text-white p-4  bg-brand-brand_black transform rounded-full  z-50"
                        onClick = {() => setState(!flipped)}>
                            <Image src= {white_star} alt="star" width={40} height ={40} className="h-5 w-5"/>
                        </button>
                        </div>
                    </div>
                    <div className="absolute  w-full h-full bg-brand-brand_black text-white flex flex-col justify-center items-center shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)] ">
                        <h3 className="text-white mt-5 text-4xl px-12 text-center mb-4">Cash-back</h3>
                        <p className="text-center mb-6 text-[14px] px-8 lg:w-[55%] lg:text-base">
                            Earn unlimited 2% back on all your Transportation expenditure made using your finance card.
                        </p>
                        <p className="text-center text-[14px] mb-8 px-8 lg:w-[55%] lg:text-base">
                        As a bonus you will earn 4% back on your first $10,000 in transportation spend.
                        </p>
                        <div className="w-full  flex justify-end px-4 absolute bottom-4 ">
                        <button className="relative text-black p-4  bg-white transform rounded-full  z-50"
                        onClick = {() => setState(!flipped)}>
                            <Image src= {black_star} alt="star" width={40} height ={40} className="h-5 w-5"/>
                        </button>
                        </div>

                    </div>
                </div>
                
            </div>
        
       </div>
    );
}
export default LandingCashBack