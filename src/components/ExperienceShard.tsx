"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { ExperienceData } from '@/lib/data';
import Image from 'next/image';

type ExperienceShard = (typeof ExperienceData)[number];

export default function ExperienceShard({
    job,
    company,
    period,
    description,
    picture,

}:ExperienceShard) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
      });
      const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
      const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    
  return (
    <motion.div
        ref={ref}
        style={{
            scale: scaleProgess,
            opacity: opacityProgess,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
    >
       <section className="bg-indigo-400 border-[2px] border-fuchsia-500  hover:gradAnimated  max-w-[55rem] 
                            rounded-lg overflow-hidden sm:pr-8 relative sm:h-[25rem]  sm:group-even:pl-8">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col
                           h-full sm:group-even:ml-[18rem]">
                <h3 className="mid text-purple-700 text-3xl font-semibold">{job}</h3>
                <h3 className='font-bold text-gray-900'>{period}</h3>
                <h3 className='text-white'>{company}</h3>
                <p>{description}</p>
                
            </div>
            <Image    
                src={picture}
                alt="logo of the company"
                className="absolute hidden sm:block top-8 -right-0 w-[20rem] rounded-[40px] shadow-2xl
                            transition 
                            group-hover:scale-[1.04]
                            group-hover:-translate-x-3
                            group-hover:translate-y-3
                            group-hover:-rotate-2

                            group-even:group-hover:translate-x-3
                            group-even:group-hover:translate-y-3
                            group-even:group-hover:rotate-2

                            group-even:right-[initial] group-even:-left-0"
       
            />  
       
       </section>

    </motion.div>
  )
}
