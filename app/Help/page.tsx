"use client";

import React from "react";
import LandingHeader from "../components/landingHeader";
import MobileLandingHeader from "../components/mobileLandingHeader";
import LandingFooter from "../components/LandingFooter";
import HelpSideBar from "../components/helpSidebar";
import statements from "../data/privacyStatement";
import FAQ from "../components/FAQ";



export default function Help(){
    const updatedDate = "24 Mar 2025"

    return(
        <div className="bg-brand-bg_white_clr">
            <LandingHeader />
            <MobileLandingHeader />
            <HelpSideBar />
            <div className="md:pt-20 pt-5 flex  ">
                <div className="w-1/5 h-screen static hidden md:block"> </div>
                <div className=" md:w-4/5 px-6 md:px-24 w-full">
                   <div id ="privacy" className="pt-10">
                        <h2 className="text-4xl font-bold text-brand-brand_black my-2">Privacy</h2> 
                        <h4 className=" text-base font-bold text-[#277C78] mb-4">Last Upddated: {updatedDate}</h4>
                        <p className="text-justify ">
                            {statements.PrivacyStatement}
                        </p>
                   </div>
                   <div id ="cookie" className="py-6">
                        <h2 className="text-4xl font-bold text-brand-brand_black my-2">Cookie Policy</h2> 
                        <p className="text-justify ">
                            {statements.cookieStatement}
                        </p>
                   </div>
                   <div id="complaint" className="py-8">
                    <h2 className="text-4xl font-bold">Complaint</h2>
                    <p className="text-base text-brand-text_gray mb-8">Submit any of your complaints and get a reply from our staff within 24hrs</p>
                    <div className="mb-4">
                        <textarea placeholder="Enter your message here..."
                        className={`w-full h-auto min-h-[40vh] border-brand-outline_gray border-[1px] rounded-lg p-2 mb-2 bg-brand-bg_white_clr
                        text-base placeholder:text-[14px] placeholder:text-brand-text_gray `}></textarea>
                        <button className=" bg-brand-brand_black cursor-pointer text-center font-bold  text-white w-full rounded-lg py-2">Submit</button>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">FAQs</h2>
                    <div>
                        <FAQ />
                    </div>

                   </div>
                   <div className="md:hidden"><LandingFooter /></div>

                </div>
            </div>
            
        </div>
    );
}