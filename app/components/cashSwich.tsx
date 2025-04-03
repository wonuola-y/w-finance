import React from "react";
import CashBackItem from "./cashBackItem";
import { useState} from "react";


const CashSwitch = () => {
    const [currentSlide,  setCurrent] = useState(0);
    

    

    return(
        <div className="flex flex-col bg-[#F8F4F0] h-[35%] py-10 px-4 justify-start items-center overflow-hidden lg:w-full lg:h-[45%] lg:pt-12 ">
            <div className= {`transition-transform duration-500 ease-in-out lg:w-[35%]  
            ${currentSlide == 0? "translate-x-0" : ""} ${currentSlide == 1 ? "-translate-y-[33.33%]" : ""}  ${currentSlide == 2 ? "-translate-y-[66.67%]" : ""}`} >
                <div className= {`${currentSlide === 0 ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
                onClick={() => setCurrent((currentSlide + 1) % 3)}>
                    <CashBackItem company = "Bolt" sector = "Transportation" amount="5.00" rate="2%" bg_color="#277C78" bg_color2="#1A6965" bg_color3="#1C5B59" />
                </div>
                <div className= {`${currentSlide === 1 ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
                onClick={() => setCurrent((currentSlide + 1) % 3)}>
                    <CashBackItem company = "Twitter" sector = "Advertisement" amount="10.00" rate="1%" bg_color = "#FF0000"  bg_color2="#C20B0B" bg_color3="#6E0B0B"  />  
                </div>
                <div className= {`${currentSlide === 2 ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
                onClick={() => setCurrent((currentSlide + 1) % 3)}>
                    <CashBackItem company = "Macy's" sector = "Fashion" amount="5.00" rate="2%" bg_color="#8C0CE8" bg_color2="#6A0CAD" bg_color3="#38055C" />
                </div>
            </div>
        </div>
    );

}
export default CashSwitch