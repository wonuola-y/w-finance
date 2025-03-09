"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
    { id:1, name: "Entertainment", value: 50, color: "#1B7F79" },
    { id: 2, name: "Bills", value: 750, color: "#91C6D2" },
    { id: 3,name: "Dining Out", value: 75, color: "#E8C6A2" },
    { id: 4,name: "Personal Care", value: 100, color: "#4F4A5F" },
];

const totalBudget = 975;
const spentAmount = 338;

const BudgetChart = () => {
    return (
        <div className="bg-white p-6 pb-0 rounded-xl w-full h-2/4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Budgets</h2>
                <button className="text-sm text-gray-500 hover:underline">See Details</button>
            </div>

            <div className="flex justify-center items-center ">
                <div className="relative w-2/3 flex justify-center items-center ">
                    <PieChart width={300} height={300}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={100}
                            dataKey="value"
                            paddingAngle={4}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                    <div className="absolute flex flex-col items-center">
                        <p className="text-2xl font-bold">${spentAmount}</p>
                        <p className="text-gray-500 text-sm">of ${totalBudget} limit</p>
                    </div>
                </div>

                <div className="mt-4 w-1/2 ">
                    {data.map((item) => (
                        <div key={item.id} className="flex flex-col text-sm py-1 px-2 my-3" style={{ borderLeftWidth: 'medium', borderLeftColor: item.color, borderLeftStyle: 'solid'  }}>
                            <div className="flex items-center  text-brand-text_gray">
                            
                                {item.name}
                            </div>
                            
                            <span className="font-semibold">${item.value.toFixed(2)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BudgetChart;
