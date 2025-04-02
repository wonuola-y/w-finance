import { useState } from "react";
import pagination from '../assets/Icons/paginatin.png';
import Image from 'next/image'
import Emma from "../assets/Sidebar/emma.png";

type item = {
    name: string
}

type Props = {
    items : item[],
    first : string
}

const Dropdown2 = ({items, first}:Props) =>{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className = {isOpen ? (" py-1 relative flex items-center justify-evenly min-w-[100px] cursor-pointer border border-grey-300 bg-white rounded-xl outline-none ring-2 ") : 
            (" relative flex items-center py-1 justify-evenly min-w-[100px] cursor-pointer border border-grey-300 bg-white rounded-xl bg-[#EBE8E8] ")}
         > 
            <Image src={Emma} width={40} height={40} className=' w-8 h-8' alt='Emma' />
            <button className=" flex px-2 py-2" onClick ={() => setIsOpen(!isOpen)}>
                
                <p className="text-brand-text_gray font-bold text-[13px] lg:text-[12px] text-right mr-8">{first}</p>
                <Image src={pagination} width={40} height={40} className='transform -rotate-90 w-4 h-4' alt='user expense img' />
            </button>
            {isOpen && (
                <div className=" flex bg-white flex-grow flex-col rounded-md shadow-md pl-4 z-10 absolute min-w-[100px] top-[46px] w-full">
                    {items.map((item, index) => (<p key ={index} className="text-brand-text_gray lg:text-[10px] text-[12px] text-left py-1" id={`opt-${index}`}>{item.name}</p>))}
                </div>
            )}
        </div>
    )
}
export default Dropdown2