import React from "react";
import LandingPots from "../components/LandingPots";
import LandingBills from "../components/LandingBills";
import LandingBudgets from "../components/LandingBudgets";
import { useState } from "react";



const Carousel = () =>{


    return(
        <section className="relative">
        
            <div className="px-1  ">
            <div className= {`my-6 transform flex flex-grow w-full gap-x-6 items-center  justify-center `}  >
                <div className={`bg-[#E6E6E6] px-4 py-4 rounded-xl h-[22rem] w-[25%]  flex flex-col items-center justify-center `}>
                    <div>
                    <h2 className="text-2xl text-black text-center">Pots</h2>
                    <p className="text-center px-6 text-[12px] mb-4">Create custom pots where you can save money for specific things</p>
                    <LandingPots />
                    </div>
                </div>
                <div className= {`bg-[#E6E6E6] px-4 py-4 rounded-xl h-[22rem] w-[25%] flex flex-col  items-center justify-center `}>
                    <h2 className="text-2xl text-black text-center">Bills</h2>
                    <p className="text-center px-6 text-[12px] mb-4">Be able to pay recurring bills monthly at the click of a button</p>
                    <LandingBills />
                </div>
                <div className= {`bg-[#E6E6E6] px-4 py-4 rounded-xl h-[22rem] w-[25%] flex flex-col items-center justify-center `}>
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
       
        </section>
        
    );
}
export default Carousel