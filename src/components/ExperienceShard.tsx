"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { ExperienceData } from '@/lib/data';
import Image from 'next/image';

type ExperienceShard = (typeof ExperienceData)[number];

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
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
       <section className="bg-indigo-400  border-fuchsia-500  hover:gradAnimated  max-w-[50rem] 
                            rounded-lg overflow-hidden md:pr-8 relative md:h-[28rem]  md:group-even:pl-8">
            <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 md:max-w-[55%] flex flex-col
                           h-full md:group-even:ml-[18rem]">
                <h3 className="mid text-purple-700 text-[32px] font-semibold">{job}</h3>
                <h3 className='font-bold text-gray-900'>{period}</h3>
                <h3 className='text-white'>{company}</h3>
                <ul className="flex flex-wrap  gap-2 text-md text-gray-800 ">
                    {description.map((description, index) => (
                        <motion.li
                            className="bg-indigo-600 text-white rounded-xl px-2 py-3 hover:bg-green-500"
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            {description}
                        </motion.li>
                    ))}
                </ul>
                
            </div>
            <Image    
                src={picture}
                alt="logo of the company"
                className="absolute hidden  md:block top-8 -right-0 w-[20rem] rounded-[40px] shadow-2xl
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
