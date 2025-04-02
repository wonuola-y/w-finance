import React from 'react' 


const TransactionHeader = () => {
    return (
            <div className='flex w-full border-b-[1px] border-b-gray-100 py-3 items-center justify-start justify-between w-full'>
                <div className='mr-2 flex  w-8'>
                    <p className='text-xs md:text-left ' > </p>                                   
                </div>
                
                <div className='md:w-1/2 flex flex-grow md:flex-grow-0 flex-col md:flex-shrink md:w-[30%]  '>
                    <p className='text-xs text-brand-text_gray md:text-[10px]' >Reciepient/Sender</p>
                </div>
    
                <div className='hidden md:block mx-8 md:[20%] md:min-w-[20%]'>
                    <p className='text-xs text-brand-text_gray md:text-left md:text-[10px] ' >Category</p>
                </div>  
    
                <div className='hidden md:block mx-8 md:[20%] '>
                <p className='text-brand-text_gray text-[9px] text-right md:text-center md:text-[10px]'>Transaction date</p>
                </div>
                <div className='flex flex-col justify-end md:[20%]'>
                    <p className={`font-bold my-2 text-brand-text_gray text-[11px] text-brand-green md:text-[10px]  text-right` }>Amount</p>
                </div>
            </div>
    );
}

export default TransactionHeader