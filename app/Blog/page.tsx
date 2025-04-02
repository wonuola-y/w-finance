"use client";

import React from "react";
import LandingHeader from "../components/landingHeader";
import MobileLandingHeader from "../components/mobileLandingHeader";
import BlogArticle from "../components/BlogArticle";
import BlogData from "../data/blogData";
import rubiesInterior from "../assets/Icons/minimalist black sofa.jpg"
import LandingFooter from "../components/LandingFooter";



export default function Blog() {

    return(
        <div className="max-w-[100%] box-border bg-brand-bg_white_clr">
            <LandingHeader />
            <MobileLandingHeader/>  
            <div className="px-2">
                <div className="lg:px-36 px-4 mt-8 mb-20 lg:mt-0 lg:pt-20">
                    <BlogArticle category = {BlogData[0].category} title = {BlogData[0].title} author = {BlogData[0].author} 
                    story= {BlogData[0].story} image = {rubiesInterior} />
                    
                </div>
                <LandingFooter />
            </div>
        </div>
    );
}