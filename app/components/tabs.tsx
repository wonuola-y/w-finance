import React from 'react'

type Props = {
    text: string;
    header: string;
    bgColor: string;
    headColor: string;
    textColor: string;
    width: string;
}
const tabs = ({text, header, bgColor = 'bg-black', textColor="text-white",headColor,  width = "w-1/4"}:Props) => {
  return (
      <div className={`py-6 px-7 rounded-xl ${bgColor} w-full md:${width} md:mx-4 my-4 md:my-0`}>
          <h4 className={`${headColor}`}> {header}</h4>
          <p className={`${textColor}  font-semibold text-3xl`}>{text}</p>
    </div>
  )
}

export default tabs