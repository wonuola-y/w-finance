"use client";

import { useState } from "react";
import CustomDropdown from "../components/dropdown_field";

export default function DropdownPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected:", option);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-xl font-semibold">Custom Dropdown</h1>
      <CustomDropdown options={["Option 1", "Option 2", "Option 3"]} onSelect={handleSelect} />
      {selectedOption && <p className="mt-2 text-gray-700">You selected: {selectedOption}</p>}
    </div>
  );
}
