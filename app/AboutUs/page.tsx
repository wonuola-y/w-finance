"use client";

import React from "react";
import LandingHeader from "../components/landingHeader";
import MobileLandingHeader from "../components/mobileLandingHeader";
import LandingFooter from "../components/LandingFooter";
import Image from "next/image";
import mission from "../assets/Icons/mission.jpg"
import vision from "../assets/Icons/vision.jpg"
import malestaff1 from "../assets/Icons/male staff.jpg"
import femalestaff1 from "../assets/Icons/female staff.jpg"


export default function AboutUs() {
    return(
        <div className="max-w-[100%] box-border bg-brand-bg_white_clr">
            <LandingHeader/>
            <MobileLandingHeader />
            <div className="px-8 lg:pt-20">
                <div className={` bg-brand-brand_black text-white px-12 py-20`}>
                   <h2 className={`text-white text-4xl font-bold relative after:content-[' '] after:absolute after:w-20 
                    after:h-2 after:bg-[#277C78] after:top-[-20px] after:left-0 mb-6`}>About Us</h2> 
                    <p className="text-base ">
                        Lorem ipsum dolor sit amet. Et sit sanctus at volutpat amet lorem. 
                        Et nonumy luptatum. Commodo laoreet et eu dolor. Option
                    </p>
                </div>
                <div id="vision" className={`relative my-12 flex gap-x-6 py-6 justify-center items-start lg:flex-row flex-col
                    after:content-[" "] after:block after:absolute after:w-[70vw] after:h-[1px] after:bg-brand-outline_gray after:-bottom-4`}>
                    <p className="overflow-hidden w-full md:max-w-[25%] flex items-end flex-grow max-h-60">
                        <Image src={mission} width={400} height={400}alt="mission image"  className="w-full"/>
                    </p>
                    <div className="md:w-[50%] w-full mt-8 md:mt-0">
                        <h3 className="text-2xl font-bold mb-3 text-black">Mission</h3>
                        <p className="text-justify text-base">
                        Lorem ipsum dolor sit amet. Nostrud takimata magna sea lorem. Nisl sit illum. Est et consequat sed amet odio lorem duis. 
                        Eum cum congue eos sit diam dolor autem. Dolor duis gubergren. Et in esse duo ipsum eros sanctus. Tempor volutpat invidunt. 
                        Labore sed praesent et. Eos sit eirmod amet sed dolor nostrud odio. Delenit ad elitr sea diam erat. Diam kasd ipsum elitr et.
                         Eos erat et aliquyam. Et labore tincidunt autem. Gubergren dolore kasd duo et eu option. Gubergren magna sit justo est.
                         Ut praesent iusto duis sea. Aliquam enim illum sit sadipscing molestie. Accumsan illum dolore eum consetetur diam nobis. 

                        </p>
                    </div>
                </div>
                <div className={`relative my-12 flex gap-x-6 py-6 justify-center items-start flex-col md:flex-row
                    after:content-[" "] after:block after:absolute after:w-[70vw] after:h-[1px] after:bg-brand-outline_gray after:-bottom-4`}>
                    <p className="overflow-hidden w-full md:max-w-[25%] flex items-end flex-grow max-h-60">
                        <Image src={vision} width={400} height={400}alt="mission image"  className="w-full"/>
                    </p>
                    <div className="md:w-[50%] w-full mt-8 md:mt-0">
                        <h3 className="text-2xl font-bold mb-3 text-black">Vision</h3>
                        <p className="text-justify text-base">
                        Lorem ipsum dolor sit amet. Nostrud takimata magna sea lorem. Nisl sit illum. Est et consequat sed amet odio lorem duis. 
                        Eum cum congue eos sit diam dolor autem. Dolor duis gubergren. Et in esse duo ipsum eros sanctus. Tempor volutpat invidunt. 
                        Labore sed praesent et. Eos sit eirmod amet sed dolor nostrud odio. Delenit ad elitr sea diam erat. Diam kasd ipsum elitr et.
                         Eos erat et aliquyam. Et labore tincidunt autem. Gubergren dolore kasd duo et eu option. Gubergren magna sit justo est.
                         Ut praesent iusto duis sea. Aliquam enim illum sit sadipscing molestie. Accumsan illum dolore eum consetetur diam nobis. 

                        </p>
                    </div>
                </div>
                
                <section className="md:px-40 md:py-12" id="culture">
                    <h3 className="text-center text-3xl text-brand-brand_black font-bold mb-8">Our <span className="text-[#277C78]">Culture</span></h3>
                    <h4 className="text-2xl text-black font-bold relative after:content-[' '] after:absolute after:w-20 
                    after:h-2 after:bg-[#277C78] after:top-[-20px] after:left-0 ">Who we are ?</h4>
                    <p className="text-justify">
                        Feugiat dolor est facer duo adipiscing sanctus blandit. Amet lorem et.
                         Aliquip et ipsum amet stet. Aliquam labore ipsum amet aliquyam et. 
                         Sea ut takimata dolor tempor nulla justo. Eirmod est aliquyam sed possim. Aliquam in sed molestie ea voluptua. 
                         Elitr duis aliquyam accusam sed qui elit dolores. Clita tincidunt stet dolor lorem vulputate ea suscipit. 
                         Sit erat diam laoreet et sit. 
                         Accusam et sea vel erat no sanctus. Lorem eos dolor. Eos vero lorem justo nibh te sed. Ad dolor sanctus dolor 
                         sit dignissim. Sadipscing dolores ea sed labore sed voluptua. Iriure ea magna ipsum amet vero. Vero esse sit 
                         takimata eirmod consequat. Rebum aliquam et. Gubergren aliquip et lorem illum. At accusam ea magna ut. Magna sed ipsum kasd.
                          Te sea in est sea magna et. Kasd erat elitr labore et exerci voluptua. 
                         Magna kasd sanctus. In aliquyam ut voluptua eos accusam et. 
                    </p>

                    <h4 className="text-2xl text-black font-bold relative after:content-[' '] after:absolute after:w-20 
                    after:h-2 after:bg-[#277C78] after:top-[-20px] after:left-0  mt-12">We reward Ambition</h4>
                    <p  className="text-justify">
                        Feugiat dolor est facer duo adipiscing sanctus blandit. Amet lorem et.
                         Aliquip et ipsum amet stet. Aliquam labore ipsum amet aliquyam et. 
                         Sea ut takimata dolor tempor nulla justo. Eirmod est aliquyam sed possim. Aliquam in sed molestie ea voluptua. 
                         Elitr duis aliquyam accusam sed qui elit dolores. Clita tincidunt stet dolor lorem vulputate ea suscipit. 
                         Sit erat diam laoreet et sit. 
                         Accusam et sea vel erat no sanctus. Lorem eos dolor. Eos vero lorem justo nibh te sed. Ad dolor sanctus dolor 
                         sit dignissim. Sadipscing dolores ea sed labore sed voluptua. Iriure ea magna ipsum amet vero. Vero esse sit 
                         takimata eirmod consequat. Rebum aliquam et. 
                    </p>

                </section>
                <section className="flex flex-col justify-center items-center py-16" id="staff">
                    <h3 className="text-center text-3xl text-brand-brand_black font-bold mb-8">Our <span className="text-[#277C78]">staff</span></h3>
                    <div className="flex justify-center items-center gap-x-4 md:flex-row flex-col gap-y-4">
                        <div className="relative md:w-[25%] w-[80%] overflow-hidden">
                            <Image src ={femalestaff1} alt="wonuola picture" width={3400} height={4501} 
                            className="h-full w-full transition-all duration-700 transfrom delay-200 hover:scale-110"/>
                            <div className="absolute bottom-8 left-0 right-0 bg-white w-[80%] py-3 px-5 z-5 shadow-md">
                                <h4 className="text-[1rem] text-brand-brand_black font-bold">Alonge Wonuola</h4>
                                <p className="text-[12px] text-brand-text_gray">Lead Developer</p>
                            </div>
                        </div>
                        <div className="relative  md:w-[25%] w-[80%] overflow-hidden">
                            <Image src ={malestaff1} alt="wonuola picture" width={3400} height={4501} 
                            className="h-full w-full transition-all duration-700 transfrom delay-200 hover:scale-110"/>
                            <div className="absolute bottom-8 left-0 right-0 bg-white w-[80%] py-3 px-5 z-5 shadow-md">
                                <h4 className="text-[1rem] text-brand-brand_black font-bold">Ude Daniel</h4>
                                <p className="text-[12px] text-brand-text_gray">Senior Front-end Developer</p>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
            <LandingFooter />

        </div>
    );
}