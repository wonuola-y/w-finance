import React from "react";
const BillsHeader = () => {
    return(
        <div className='flex flex-wrap md:flex-nowrap justify-between border-b-[2px] border-b-gray-100 py-4 items-center '>
            <div className='mr-2 flex md:mr-4 w-8 '>
                              
            </div>
            <div className=' w-[83%] md:w-[55%] md:flex md:flex-shrink'>
                <p className='text-brand-text_gray text-[12px] lg:text-[10px]'>Bill title</p>
            </div>
            <div className='flex items-center md:w-[20%] '>
                <p className='text-[11px] text-brand-text_gray text-[12px] lg:text-[10px]'>Due date</p>
                
            </div>
            <div className='flex  text-[12px] md:w-[20%] justify-end'>
                <p className='text-left text-brand-text_gray text-[12px] lg:text-[10px]'>Amount</p>
            </div>
                        
        </div>
    );
}

export default BillsHeader