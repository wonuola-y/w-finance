import React from "react";

type Props = {
  max: number,
  spent: number,
  percentageValue?: number,
  bgColor?: string;
  children?: React.ReactNode
  newdiv?:React.ReactNode
};

const BudgetProgress: React.FC<Props> = ({ max, spent, bgColor, percentageValue, children,newdiv }) => {

  const percentage = percentageValue ?? (max > 0 ? (spent / max) * 100 : 0)

  return (
    <div className="w-full mx-auto space-y-4">
      {/* Maximum Amount */}
      {newdiv}

      {/* Progress Bar */}
      <div className="w-full h-4 bg-[#F8F4F0] p-[2px]  rounded-sm relative">
        <div
          className="h-full rounded-sm "
          style={{ width: `${percentage}%`, backgroundColor: `${bgColor}` }}
        />
      </div>
      {children}
      {/* Spent & Remaining */}

    </div>
  );
};

export default BudgetProgress;
