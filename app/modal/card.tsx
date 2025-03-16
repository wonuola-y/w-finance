import React from 'react'

type Props = {
    
    header: string;
    themeColor: string;
    children: React.ReactNode
}

const Card = ({ header, themeColor,  children }:Props) => {

    return (
        <div>
            <div className='w-full' >

                
                        <div className='bg-white mb-4 py-8 px-6 rounded-lg'>
                            <div className='flex justify-between items-center pb-5'>
                                <div className='flex items-center'>
                                    <p className='w-4 h-4 rounded-full mr-4' style={{ backgroundColor: themeColor }}></p>
                                    <h2 className='font-bold'>{header}</h2>
                                </div>
                                <p>...</p>
                            </div>
                    <div>
                        {children}
                           </div>
                        </div>
               
            </div>
        </div>
    )
}

export default Card