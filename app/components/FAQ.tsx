import Image from "next/image";
import down from '../assets/Icons/FAQdown.png'
import FAQdata from "../data/FAQData";
import { useState } from "react";

export default function FAQ(){
    const [isOpen, dropDown] = useState<Record<number, boolean>>({});

    //toggle function
    const toggleDropdown = (id : number) => {
        dropDown((prev) => ({
          ...prev,
          [id]: !prev[id], // Toggle only the clicked dropdown
        }));
      };
    
    return(
        <div className="mx-2">
            {FAQdata.map((item, index) =>(
                <div key ={index} className="border-b-brand-outline_gray border-b-[1px]">
                    <div className="flex justify-between px-2 py-4 md:py-2 ">
                        <p className="text-base text-brand-text_gray">{item.question}</p>
                        <button onClick={() => toggleDropdown(index)} >
                            <Image src={down} width={40} height={40} alt="Down arrow" className="w-4 h-4"/>
                        </button>
                    </div>
                    <div className={`${isOpen[index] ? "max-h-68 opacity-100 md:mb-2" : "max-h-0 opacity-0"} overflow-hidden text-base text-brand-text_gray mt-4 transition-all 
                    duration-500 delay-200 origin-top `}>
                        {item.answer}
                    </div>
                </div>
                
            ))}
        </div>
    );
}