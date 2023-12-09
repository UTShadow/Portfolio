"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import ExperienceShard from "./ExperienceShard";
import { ExperienceData } from "@/lib/data";

export default function Experience() {
    const { ref } = useSectionInView("Experience");
return(
    <section
        id="experience"
        ref={ref}
        className="  scroll-mt-28 mb-28"
    >
        
        <h1 className="spec lg:text-[72px] hover:animate-pulse py-8  text-center">EXPERIENCE</h1>
        <div>
            {ExperienceData.map((experience, index) => (
                <React.Fragment key={index}>
                    <ExperienceShard {...experience}/>
                </React.Fragment>
            ))}
            
            
           
        </div>
        
    </section>
)
}