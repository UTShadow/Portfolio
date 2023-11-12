"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
    const { ref } = useSectionInView("About");
    return(
        <section
        ref={ref}
        id="about"
        
        >
        
            <div className=" ">
                <h1 className="spec hover:animate-pulse py-8 lg:text-[72px] text-center">
                ABOUT
                </h1>
                <div className=" text-center pb-6">
                    <p className="regular text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Minus deserunt, error accusamus deleniti ipsa ipsum consequuntur velit maiores itaque voluptatibus tenetur libero quidem fugit sit. Natus dolor molestias sequi beatae!
                    </p>
                    <p className="regular text-white">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Odit blanditiis quo corporis fugiat repudiandae deleniti dolorum expedita libero dolore nesciunt, neque possimus eos error nostrum velit alias, magnam facilis ratione!
                    </p>
                </div>
            </div>
        
        </section>
    )
}