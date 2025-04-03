"use client";
import { useState, useRef, useEffect } from "react";
import pagination from '../assets/Icons/paginatin.png';
import Image from 'next/image'

type item = {
    name: string
}

type Props = {
    items : item[],   
}

const Dropdown = ({items}:Props) =>{
    const [isOpen, setIsOpen] = useState(false);
    const [defaultValue, setDefaultValue] = useState(items[0].name)
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        //attach event listener
        document.addEventListener("mousedown", handleClickOutside)

        return() =>{
            //cleanup event listener
            document.removeEventListener("mousedown", handleClickOutside)
        };
    }, [])
    

    return (
        <div ref ={ref} className = {isOpen ? ("relative cursor-pointer border border-grey-300 bg-white rounded-md min-w-[100px] outline-none ring-2 ") : 
            ("relative cursor-pointer border border-grey-300 bg-white rounded-md min-w-[100px] transition duration-500 delay-200")}
         > 
            <button className=" flex px-6 py-2" onClick ={() => setIsOpen(!isOpen)}>
               <p className="text-brand-text_gray text-[12px] lg:text-[10px] text-right mr-2">{defaultValue}</p>
                <Image src={pagination} width={40} height={40} className='transform -rotate-90 w-4 h-4' alt='user expense img' />
            </button>
            {isOpen && (
                <div className=" flex bg-white flex-grow flex-col rounded-md shadow-md  z-10 absolute min-w-[100px] w-full">
                    {items.map((item, index) => 
                        (<button key ={index} 
                            onClick={() => setDefaultValue(item.name)}
                        className="text-brand-text_gray lg:text-[10px] text-[12px] lg:w-full text-left py-1 transition duration-500 delay-200 px-6 hover:bg-brand-brand_black hover:text-white "
                         id={`opt-${index}`}>{item.name}
                         
                         </button>))
                        }
                </div>
            )}
        </div>
    )
}
export default Dropdown