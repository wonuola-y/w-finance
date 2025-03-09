import React from 'react'
const data_bills = [
    { id: 1, name: 'Paid bills', amount: '$18.00', color: "#1B7F79" },
    { id: 2, name: 'Paid bills', amount: '$18.00', color: "#91C6D2"  },
    { id: 3, name: 'Paid bills', amount: '$18.00', color: "#E8C6A2" },
]

const recurring_bills = () => {
  return (
      <div className='flex flex-col w-full px-8 pb-8 '>
          {data_bills.map((item) => (
              <div key={item.id} className='py-5 px-3 flex justify-between bg-brand-bg_white_clr rounded-xl border-l-4 my-2 w' style={{borderColor: item.color}}>
                  <p>{item.name}</p>
                  <p>{ item.amount}</p>
              </div>
          ))}
     </div>
  )
}

export default recurring_bills