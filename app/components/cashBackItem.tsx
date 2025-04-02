import React from "react";
type Props = {
    company : string,
    sector : string,
    amount : string,
    rate : string,
    bg_color : string,
    bg_color2 : string,
    bg_color3 : string,
}

const CashBackItem = ({company,sector,amount,rate,bg_color, bg_color2, bg_color3}:Props) => {
    return(
        <div className=" flex flex-col justify-center items-center ">
            <div className= {` text-white text-[12px] flex max-h-44 gap-x-2 px-2 py-2 justify-between items-center lg:w-full lg:px-4 lg:py-3 `} style = {{backgroundColor : bg_color}}>
                <div className=" flex flex-col w-24 max-w-24">
                    <h3 className="text-white font-bold">{company}</h3>
                    <p className="font-light">{sector}</p>
                </div>
                <div className={`bg-white rounded-full text-[${bg_color}] px-2 py-1 lg:px-4 lg:py:2 lg:font-bold`} style ={{color:bg_color}}>{rate} cashback</div>
                <div>
                    <p>+{amount}</p>
                    <p>added </p>
                </div>
            </div>
            <div className= {`h-2 w-[90%] `} style = {{backgroundColor : bg_color2}}> </div>
            <div className= {`transform h-2 w-[80%] `} style = {{backgroundColor : bg_color3}}> </div>
        </div>
    );

}

export default CashBackItem