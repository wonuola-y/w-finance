import { useState } from "react";
import pagination from '../assets/Icons/paginatin.png';
import Image, { StaticImageData } from 'next/image'

type item = {
    name: string
}

type Props = {
    items : item[],
    first : string
}

const Dropdown = ({items, first}:Props) =>{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className = {isOpen ? ("relative cursor-pointer border border-grey-300 bg-white rounded-md min-w-[100px] outline-none ring-2 ") : 
            ("relative cursor-pointer border border-grey-300 bg-white rounded-md min-w-[100px]")}
         > 
            <button className=" flex px-6 py-2" onClick ={() => setIsOpen(!isOpen)}>
               <p className="text-brand-text_gray text-[12px] lg:text-[10px] text-right mr-2">{first}</p>
                <Image src={pagination} width={40} height={40} className='transform -rotate-90 w-4 h-4' alt='user expense img' />
            </button>
            {isOpen && (
                <div className=" flex bg-white flex-grow flex-col rounded-md shadow-md pl-4 z-10 absolute min-w-[100px] w-full">
                    {items.map((item, index) => (<p key ={index} className="text-brand-text_gray lg:text-[10px] text-[12px] text-left py-1" id={`opt-${index}`}>{item.name}</p>))}
                </div>
            )}
        </div>
    )
}
export default Dropdown