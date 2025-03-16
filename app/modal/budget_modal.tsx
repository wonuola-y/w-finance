import React from 'react'
import Emma from "../assets/Sidebar/emma.png";
import TransactionOverview from '../components/transaction_overview'
import BudgetProgress from '../components/budget_loader';
import Card from './card';
const budget_modal_data = [
    { id: 1, name: "Entertainment", expenseName: 'Emma',  value: 50, color: "#1B7F79", spent: 15.00, rem: 305.00, img:Emma, date:'12/12/24', max:305},
    { id: 2, name: "Bills", expenseName: 'Emma', value: 50, color: "#82C9D7", spent: 150.00, rem: 550.00, img:Emma, date:'12/12/24', max:700},
    { id: 3, name: "Dinning out", expenseName: 'Emma', value: 50, color: "#F2CDAC", spent: 150.00, rem: 450.00, img:Emma, date:'12/12/24', max:600},
    { id: 4, name: "Personal care", expenseName: 'Emma', value: 50, color: "#626070", spent: 150.00, rem: 350, img:Emma, date:'12/12/24', max:500 },
    
]


const BudgetModal = () => {
    
  return (
      <div>
          <div className='w-full' >
              
              {budget_modal_data.map((item) =>
              {
                  const maxValue = item.max
                  const spentValue = item.spent
                  const remaining = (maxValue ?? 0) - (spentValue ?? 0)
                  return (
                      <Card key={item.id} header={item.name} themeColor={item.color}>
                          <div key={item.id}>

                              <BudgetProgress max={ item.max ?? 0} spent={item.spent ?? 0} bgColor={item.color} newdiv={<p className='text-brand-text_gray text-sm'> Maximum amount ${item.max.toFixed(2)} </p>} />

                              <div className="flex justify-between">
                                  <div className='flex items-center'>
                                      <div className="h-8 w-1  rounded-full " style={{ backgroundColor: item.color }}></div>
                                      <div className="flex flex-col text-sm py-1 px-2 my-3" >
                                          <div className="flex items-center  text-brand-text_gray">

                                              Spent
                                          </div>

                                          <span className="font-semibold">${item.spent}</span>
                                      </div>
                                  </div>
                                  <div className='flex items-center'>
                                      <div className="h-8 w-1  rounded-full bg-brand-bg_white_clr " ></div>
                                      <div className="flex flex-col text-sm py-1 px-2 my-3" >
                                          
                                          <div className="flex items-center  text-brand-text_gray">
                                              Remaining
                                          </div>

                                          <span className="font-semibold">${remaining}</span>
                                      </div>
                                  </div>
                              </div>
                             <div className='bg-brand-bg_white_clr rounded-xl p-5 mt-5'>
                                <div className='flex justify-between pb-5'>
                                      <h3 className='font-bold text-black text-normal '>Latest Spending</h3>
                                      <p className='text-sm '>See All</p>
                                  </div>
                                  <TransactionOverview text={item.expenseName} img={item.img} color="black" amount={item.value} date={item.date} />
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

export default BudgetModal
