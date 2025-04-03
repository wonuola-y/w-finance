import { useState } from "react";
import pagination from '../assets/Icons/paginatin.png';
import Image from 'next/image'


type item = {
    name: string
}

type Props = {
    items : item[],
    first : string
}

const Dropdown3 = ({items, first}:Props) =>{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className = {isOpen ? (" px-2 py-1  relative flex items-center justify-center cursor-pointer border border-grey-300 bg-white rounded-xl outline-none ring-2 ") : 
            ("px-4 relative flex items-center py-1 justify-center cursor-pointer border border-grey-300 rounded-xl bg-[#EBE8E8] ")}
         > 
            
            <button className=" flex px-2 py-2 justify-between w-full" onClick ={() => setIsOpen(!isOpen)}>
                
                <p className="text-brand-text_gray font-bold text-[13px] lg:text-[12px] text-right ">{first}</p>
                <Image src={pagination} width={40} height={40} className='transform -rotate-90 w-4 h-4' alt='user expense img' />
            </button>
            {isOpen && (
                <div className=" flex bg-white flex-grow flex-col rounded-md shadow-md pl-4 z-10 top-[46px] absolute min-w-[100px] w-full">
                    {items.map((item, index) => (<p key ={index} className="text-brand-text_gray lg:text-[10px] text-[12px] text-left py-1" id={`opt-${index}`}>{item.name}</p>))}
                </div>
            )}
        </div>
    )
}
export default Dropdown3