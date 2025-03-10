import React from "react";

type Props = {
  spent: number;
  max: number;
  bgColor?: string;
};

const BudgetProgress: React.FC<Props> = ({ spent, max, bgColor }) => {
  const remaining = max - spent;
  const percentage = (spent / max) * 100;

  return (
    <div className="w-full max-w-lg mx-auto space-y-4">
      {/* Maximum Amount */}
      <p className="text-gray-600">Maximum of ${max.toFixed(2)}</p>

      {/* Progress Bar */}
      <div className="w-full h-4 bg-[#F8F4F0] rounded-lg relative">
        <div
          className="h-full bg-teal-600 rounded-lg"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Spent & Remaining */}
      <div className="flex justify-between items-center text-gray-700">
        <div className="flex items-center gap-2">
          <div className={`w-1 h-6 ${bgColor}rounded-xl`}></div>
          <div className="text-left">
            <p className="text-sm">Spent</p>
            <p className="text-lg font-bold">${spent.toFixed(2)}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-gray-300 rounded-full"></div>
          <div className="text-right">
            <p className="text-sm">Remaining</p>
            <p className="text-lg font-bold">${remaining.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetProgress;
