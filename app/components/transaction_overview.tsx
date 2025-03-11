import Image, { StaticImageData } from 'next/image'
import Emma from "../assets/Sidebar/emma.png";
import React from 'react'
type Props = {
    text?: string,
    img?: string | StaticImageData,
    color?: string,
    amount?: string | number,
    date?: string,
}

const Transaction_overview = ({
    text, img, amount, date, color,
}: Props) => {
  return (
      <div className="flex justify-between border-b-[1px] border-b-gray-100 pb-3 ">
          <div className='w-3/4 flex items-center'>
              <div className='md:mr-2 flex items-center justify-center'>
                  <Image src={img ?? Emma} width={40} height={40} alt='user expense img'  />
             </div>
              <h2 className='mx-4 font-bold text-[14px] '>{text}</h2>
          </div>
          <div className='flex flex-col items-end'>
              <p className={`font-bold my-2 text-${color} text-[14px]  ` }>${amount}</p>
              <p className='text-brand-text_gray text-xs'>{ date}</p>
          </div>
    </div>
  )
}

export default Transaction_overview