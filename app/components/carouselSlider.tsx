import React from "react";
import LandingPots from "../components/LandingPots";
import LandingBills from "../components/LandingBills";
import LandingBudgets from "../components/LandingBudgets";
import { useState } from "react";
import Image from "next/image";
import prev from "../assets/Icons/prev_white.png";
import next from "../assets/Icons/next_white.png";


const CarouselSlider = () =>{
    const [currentSlide,  setCurrent] = useState(0);


    return(
        <section className="relative">
            <div className="absolute top-[40%] -left-3 -right-3  z-10 transform translate-y-[50%] flex justify-between items-center ">
                <button className="flex justify-center z-20 items-center p-3 rounded-full bg-opacity-70 bg-[#201F24]"
                onClick = {() => (currentSlide == 0? (setCurrent(2)):setCurrent((currentSlide %3)-1))}>
                    <Image src = {prev} alt="previous" width = {40} height={40} className="h-4 w-4"/>
                </button>
                <button className="flex justify-center z-20 items-center p-3 rounded-full bg-opacity-70 bg-[#201F24]"
                onClick = {() => setCurrent((currentSlide + 1) % 3)}>
                    <Image src = {next} alt="previous" width = {40} height={40} className="h-4 w-4"/>
                </button>
            </div>
            <div className="px-1 relative overflow-hidden ">
            <div className= {`my-6 transform flex flex-grow w-[300%] items-center  justify-evenly transition-all duration-500 delay-200
                ${currentSlide == 0? "translate-x-0" : ""} ${currentSlide == 1 ? "-translate-x-[33.33%]" : ""}  ${currentSlide == 2 ? "-translate-x-[66.67%]" : ""}`}  >
                <div className={`bg-[#E6E6E6] px-4 py-4 rounded-xl h-[22rem] w-[80%] transition-all duration-500 delay-200 flex flex-col items-center justify-center ${currentSlide == 0 ? "opacity-100" : "opacity-0" }`}>
                    <div>
                    <h2 className="text-2xl text-black text-center">Pots</h2>
                    <p className="text-center px-6 text-[12px] mb-4">Create custom pots where you can save money for specific things</p>
                    <LandingPots />
                    </div>
                </div>
                <div className= {`bg-[#E6E6E6] px-4 py-4 rounded-xl h-[22rem] w-[80%] flex flex-col transition-all duration-500 delay-200 items-center justify-center ${currentSlide == 1 ? "opacity-100" : "opacity-0" }`}>
                    <h2 className="text-2xl text-black text-center">Bills</h2>
                    <p className="text-center px-6 text-[12px] mb-4">Be able to pay recurring bills monthly at the click of a button</p>
                    <LandingBills />
                </div>
                <div className= {`bg-[#E6E6E6] px-4 py-4 rounded-xl h-[22rem] w-[80%] flex flex-col items-center transition-all duration-500 delay-200 justify-center ${currentSlide == 2 ? "opacity-100" : "opacity-0" }`}>
                    <div>
                    <h2 className="text-2xl text-black text-center">Budgets</h2>
                    <p className="text-center px-6 text-[12px] mb-4">
                        Take control of your finances with our budgeting features, to meet your financial goals
                    </p>
                    <LandingBudgets />
                    </div>
                </div>
            </div>
        </div>
        <div className="control flex items-center justify-center gap-x-4">
            <button className=  {`bg-white rounded-full h-3 w-3 transition-all duration-500 delay-200 ${currentSlide == 0? "opacity-100" : "opacity-50"}`}
            onClick = {()=> setCurrent(0)}
            >
            </button>
            <button className=  {`bg-white rounded-full h-3 w-3 transition-all duration-500 delay-200 ${currentSlide == 1? "opacity-100" : "opacity-50"}`}
            onClick = {()=> setCurrent(1)}
            >
            </button>
            <button className=  {`bg-white rounded-full h-3 w-3 transition-all duration-500 delay-200 ${currentSlide == 2? "opacity-100" : "opacity-50"}`}
            onClick = {()=> setCurrent(2)}
            >
            </button>
         </div>
        </section>
        
    );
}
export default CarouselSlider