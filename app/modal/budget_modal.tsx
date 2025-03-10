import React from 'react'
import Emma from "../assets/Sidebar/emma.png";
import TransactionOverview from '../components/transaction_overview'
import BudgetProgress from '../components/budget_loader';
const budget_modal_data = [
    { id: 1, name: "Entertainment", value: 50, color: "#1B7F79", spent: 15.00, rem: 305.00, img:Emma, date:'12/12/24'},
    { id: 2, name: "Bills", value: 50, color: "#82C9D7", spent: 150.00, rem: 600.00, img:Emma, date:'12/12/24'},
    { id: 3, name: "Dinning out", value: 50, color: "#F2CDAC", spent: 150.00, rem: 600.00, img:Emma, date:'12/12/24'},
    { id: 4, name: "Perosnal care", value: 50, color: "#626070", spent: 150.00, rem: 500, img:Emma, date:'12/12/24' },
    {}
]


const BudgetModal = () => {
   
  return (
      <div>
          <div  className='bg-white' >
              {budget_modal_data.map((item) => (
                  <div key={item.id}>
                      <div>
                          <h2>{item.name}</h2>
                          <p>...</p>
                      </div>
                      <div>
                          <p>Maximum of $50.00</p>
                          <BudgetProgress max={item.rem ?? 0} spent={item.spent ?? 0} bgColor='bg-[#F8F4F0]' />
                          <div className="flex">
                              <div>
                                  <div className="flex flex-col text-sm py-1 px-2 my-3" style={{ borderLeftWidth: 'medium', borderLeftColor: item.color, borderLeftStyle: 'solid' }}>
                                      <div className="flex items-center  text-brand-text_gray">

                                          Spent
                                      </div>

                                      <span className="font-semibold">{item.spent}</span>
                                  </div>
                              </div>
                              <div>
                                  <div className="flex flex-col text-sm py-1 px-2 my-3" style={{ borderLeftWidth: 'medium', borderLeftColor: item.color, borderLeftStyle: 'solid' }}>
                                      <div className="flex items-center  text-brand-text_gray">

                                          Remaining
                                      </div>

                                      <span className="font-semibold">{item.rem}</span>
                                  </div>
                              </div>
                          </div>
                          <TransactionOverview text={item.name} img={item.img} color={item.color} amount={item.value} date={item.date} />
                      </div>
                  </div>
              ))}
          </div>
    </div>
  )
}

export default BudgetModal