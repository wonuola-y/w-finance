import React from 'react'
import Image, { StaticImageData } from 'next/image'
import good from '../assets/Icons/checked.png'
import bad from '../assets/Icons/warning.png'

type Props = {
    text : string,
    img : string | StaticImageData,
    amount : string,
    dueDate : string,
    state  : boolean

}

const BillItem = ({text, img, amount, dueDate, state
}: Props) =>{
    return(
        <div className='flex flex-wrap md:flex-nowrap justify-between border-b-[2px] border-b-gray-100 py-4 items-center '>
            <div className='mr-2 flex md:mr-4 '>
                <Image src={img} width={40} height={40} className='w-8 h-8' alt='company icon'  />               
            </div>
            <div className=' w-[83%] md:w-[55%] md:flex md:flex-shrink'>
                <p className='font-bold text-[13px] lg:text-[11px]'>{text}</p>
            </div>
            <div className='flex items-center md:w-[20%] '>
                <p className='text-[11px]  lg:text-[10px] text-[#277C78]'>{dueDate}</p>
                {state ? (
                    <Image src={good} width={40} height={40} className='w-3 float-right h-3 ml-2' alt='Checked icon'  />
                ) : (
                    <Image src={bad} width={40} height={40} className='w-3 h-3 float-right ml-2' alt='warning icon'  />
                )}
            </div>
            <div className='flex font-bold text-[12px] md:w-[20%] justify-end lg:text-[10px]'>
                <p className='text-left'>{amount}</p>
            </div>
                        
        </div>
    );
}

export default BillItem