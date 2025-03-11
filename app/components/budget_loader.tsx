import React from "react";

type Props = {
  max: number,
  spent:number,
  bgColor?: string;
};

const BudgetProgress: React.FC<Props> = ({max, spent, bgColor }) => {
  
  const percentage = (spent / max) * 100

  return (
    <div className="w-full mx-auto space-y-4">
      {/* Maximum Amount */}
      <p className="text-gray-600">Maximum of ${(max ?? 0).toFixed(2)}</p>

      {/* Progress Bar */}
      <div className="w-full h-4 bg-[#F8F4F0] p-[2px]  rounded-sm relative">
        <div
          className="h-full rounded-sm "
          style={{ width: `${percentage}%`, backgroundColor: `${bgColor}`}}
        />
      </div>

      {/* Spent & Remaining */}
      
    </div>
  );
};

export default BudgetProgress;
