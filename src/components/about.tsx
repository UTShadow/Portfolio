"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
    const { ref } = useSectionInView("About");
    return(
        <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
        
        >
        
            <div className="pb-8 ">
                <h1 className="spec hover:animate-pulse py-8 lg:text-[72px] text-center">
                ABOUT
                </h1>
                <div  className="  rounded-[40px] max-w-[64rem] text-center px-[40px] py-6 bg-indigo-600">
                    <p className=" text-center  sm:text-[24px] text-white px-5 py-3  ">
                        I've got the honours Master degree of Engineering in Mechatronics with specialisation in mobile systems.
                        During the course of my studies, I participated in an internship program that was financed by EU funds, 
                        which enabled me to secure an internship at a building automation company. I continued cooperation with the company until 
                        the pandemic began. After graduating, I started cooperation with one of the largest research networks 
                        in Europe, which I continue to this day.
                        
                    </p>
                    
                </div>
            </div>
        
        </motion.section>
    )
}