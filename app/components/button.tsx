import React from 'react'

type Props = {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    width?: string;
    text: string;
    bgColor: string;
    textColor: string;
    className?: string;
    disabled?: boolean;
  
}

const Button = (
    {
        type = "submit",
        // onClick,
        bgColor = "bg-black",
        textColor = "text-white",
        width = "w-full",
        text,
        className,
        disabled = false
    }: Props) => {
  return (
      <button type={type} disabled={disabled} className={` py-3 px-5 rounded-lg ${width} ${bgColor} ${textColor} font-semibold flex items-center ${className}`} >{ text}</button>
  )
}

export default Button