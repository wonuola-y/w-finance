import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
    name : string,
    description : string,
    image : string | StaticImageData,
}

const LandingPerksCard = ({name, description, image}:Props) => {
    const nameList = name.split(" ")
    return(
        <div className="bg-white py-6 rounded-lg shadow-lg px-7 my-6 lg:w-[25%] max-h-[67vh] ">
            <h2 className="text-5xl pr-36 text-black lg:text-[2.5rem]">{nameList[0]} <strong className="text-[#277C78]">{nameList[1]}</strong></h2>
            <p className="text-[15px] mt-2 pr-24 text-brand-text_gray ">{description}</p>
            <div className="flex justify-center items-center w-full h-full px-6 py-6">
                <Image src= {image} width={40} height={40} alt="imageIcon" className="w-[80%] h-[80%]" />
            </div>

        </div>
    );
}
export default LandingPerksCard