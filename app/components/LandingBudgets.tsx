import React from "react";

const LandingBudgets = () => {
    return (
        <div className="flex flex-col flex-grow gap-y-4 items-center justify-center bg-white py-6 px-4 rounded-md">
            <div className='w-full bg-brand-brand_black px-6 py-2 rounded-lg  md:flex flex-col flex-grow'>
                <p className='text-brand-text_gray text-white text-[12px] mb-2'>Current Balance</p>
                <h2 className='text-brand-text_gray text-white font-bold text-2xl'>$3,850.98</h2>
            </div>
            <div className='w-full text-black bg-[#E6E6E6] px-6 py-2 rounded-lg  md:flex flex-col flex-grow '>
                <p className=' text-black text-[12px] mb-2'>Income</p>
                <h2 className=' text-black font-bold text-2xl'>$4,385.98</h2>
            </div>
        </div>
    );
}
export default LandingBudgets