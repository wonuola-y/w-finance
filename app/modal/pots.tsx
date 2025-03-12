import React from 'react'
import BudgetProgress from '../components/budget_loader';
import Card from './card';
import Button from '../components/button';
const pot_data = [
    { id: 1, name: "Savings", expenseName: 'Emma', value: 50, color: "#1B7F79", saved: 15.00, rem: 305.00, date: '12/12/24', max: 2000 },
    { id: 2, name: "Bills", expenseName: 'Emma', value: 50, color: "#82C9D7", saved: 150.00, rem: 550.00, date: '12/12/24', max: 700 },
    { id: 3, name: "Dinning out", expenseName: 'Emma', value: 50, color: "#F2CDAC", saved: 150.00, rem: 450.00, date: '12/12/24', max: 600 },
    { id: 4, name: "Personal care", expenseName: 'Emma', value: 50, color: "#626070", saved: 150.00, rem: 350, date: '12/12/24', max: 500 },

]


const PotModal = () => {

    return (
        <div>
            <div className='w-full lg:grid grid-cols-2 gap-4' >

                {pot_data.map((item) => {
                    // const maxValue = item.max
                    // const savedValue = item.saved
                    // const remaining = (maxValue ?? 0) - (savedValue ?? 0)
                    return (
                        <Card key={item.id} header={item.name} themeColor={item.color}>
                            <div key={item.id}>
                                <div className='flex justify-between py-5 '>
                                    <p className='text-gray-400'>Total Saved</p>
                                    <p className='font-bold text-xl'>${item.saved}</p>
                                </div>
                                <BudgetProgress max={item.max ?? 0} spent={item.saved ?? 0} bgColor={item.color} >
                                    <div className='flex justify-between pt-3'>
                                        <p className='text-gray-400'>
                                        {Math.round(((item.saved ?? 0) / (item.max ?? 1)) * 100 * 10) / 10}%
                                            </p>
                                        <p className='font-semibold text-sm'>Target {item.max} </p>
                                    </div>
                                </BudgetProgress>
                                <div className='flex justify-between my-5'>
                                    <Button text='+ Add Money' bgColor='bg-[#F8F4F0] ' textColor='black' width='1/2' className='hover:bg-white utline-none hover:outline hover:outline-[1px] hover:outline-brand-outline_gray' />
                                    <Button text='Withdraw Money' bgColor='bg-[#F8F4F0]' textColor='black' width='1/2' className='hover:bg-white utline-none hover:outline hover:outline-[1px] hover:outline-brand-outline_gray' />
                                </div>

                            </div>
                        </Card>
                    )
                }
                )}
            </div>
        </div>

    )
}

export default PotModal
