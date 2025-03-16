import Image, { StaticImageData } from 'next/image'
import React from 'react'
type Props = {
    text: string,
    img: string | StaticImageData,
    color: string,
    amount: string,
    date: string,
    category: string,
}

const Transaction_page = ({
    text, img, amount, date, color, category
}: Props) => {
  return (
      <div className='flex w-full border-b-[1px] border-b-gray-100 py-3 items-center justify-start justify-between w-full'>
        
            <div className='mr-2 flex '>
                  <Image src={img} width={40} height={40} className='w-8 h-8' alt='user expense img'  />
                  
            </div>
            
        
            <div className='md:w-1/2 flex flex-grow md:flex-grow-0 flex-col md:flex-shrink md:w-[30%]  '>
                <h2 className='font-bold text-sm text-[12px] md:text-[12px]'>{text}</h2>
                <p className='text-xs  md:hidden' >{category}</p>
            </div>

            <div className='hidden md:block mx-8 md:[20%] md:min-w-[20%]'>
                <p className='text-xs md:text-left md:text-[10px] ' >{category}</p>
            </div>  

            <div className='hidden md:block mx-8 md:[20%] '>
            <p className='text-brand-text_gray text-[10px] text-right md:text-center'>{ date}</p>
            </div>
          <div className='flex flex-col justify-end md:[20%]'>
              <p className={`font-bold my-2 text-${color} text-[11px] text-brand-green  text-right` }>{amount}</p>
              <p className='text-brand-text_gray text-[9px] text-right md:hidden'>{ date}</p>
          </div>
    </div>
  )
}

export default Transaction_page