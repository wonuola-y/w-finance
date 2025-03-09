import React from 'react'
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    type?: 'date' | 'text' | 'email' | "password" | 'number';
    placeholder?: string;
    value?: string;
    className: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    width: string;
}
const Input = ({
    type = "text",
    placeholder = "Enter text",
    value,
    onChange,
    className,
    width = "w-full",
}:InputProps) => {
  return (
      <div>
          <input type={type} placeholder={placeholder} onChange={onChange} value={value} className={` py-3 px-5 rounded-lg border-brand-outline_gray border-[1px] ${width}  ${className}`} />
    </div>
  )
}

export default Input