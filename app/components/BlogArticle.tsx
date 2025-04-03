import React from "react";
import Image, { StaticImageData } from "next/image";


type Props = {
    category: string,
    title: string,
    author : string,
    story : string,
    image : string | StaticImageData,
    
}

export default function BlogArticle({category, title, author, story, image}:Props){
    return(
        <div>
            <p className="text-white bg-[#277C78] px-3 py-1 w-20 flex justify-center items-center mb-2">{category}</p>
            <h2 className="text-brand-brand_black font-bold text-2xl">{title}</h2>
            <p className="text-[14px] text-brand-text_gray"> <em className="italic">Written by </em>{author}</p>
            <div>
                <Image src = {image} width={4368} height={2448} alt="rubies image" className="w-full my-3 mb-6"/>
            </div>
            <div className="mb-15">
                <p className="text-base text-justify">{story}</p>
            </div>
           
        </div>
    );
}