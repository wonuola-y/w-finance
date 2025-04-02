import BudgetProgress from '../components/budget_loader';

const LandingPots = () =>{
    return(
        <div className='bg-white px-4 py-3 rounded-md'>
            <div className='flex justify-between py-5 '>
                <p className='text-gray-400'>Total Saved</p>
                <p className='font-bold text-xl'>${15.00}</p>
            </div>
            <BudgetProgress max={2000} spent={15.00 } bgColor={"#1B7F79"} >
                <div className='flex justify-between pt-3'>
                    <p className='text-gray-400'>
                    {Math.round(((15.00) / (2000)) * 100 * 10) / 10}%
                        </p>
                    <p className='font-semibold text-sm'>Target {2000} </p>
                </div>
            </BudgetProgress>
            <div className='flex justify-between my-2'>
                <button className='bg-[#E6E6E6] text-[12px] px-3 py-1 w-24 rounded'>+Add Money</button>
                <button className='bg-[#E6E6E6] text-[12px] px-3 py-1 w-24 rounded'> Withdraw</button>
            </div>
        </div>
    );
}

export default LandingPots