"use client";


import { solidSkills,minorSkills,FutureSkills,otherSkills } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";


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

export default function Skills() {
    const { ref } = useSectionInView("Skills");
  return(
    <section
        id="skills"
        ref={ref}
        className="w-[80%] mb-28 sm:mb-30  scroll-mt-28 px-0 "
    >
        <h1 className="spec hover:animate-pulse  lg:text-[72px] text-center">
            SKILLS
        </h1>
        <div className="w-100% p-4 lg:flex">
            <div className="  basis-1/3 text-center">
                <h2 className="mid  text-[50px] lg:text-[60px] bg-gradient-to-r from-pink-600 to-purple-600 inline-block text-transparent bg-clip-text">
                    SOLID
                </h2>
                <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 ">
                    {solidSkills.map((skill, index) => (
                        <motion.li
                            className="bg-green-500 text-white rounded-xl px-5 py-3 hover:motion-safe:animate-bounce"
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul> 
            </div>
            
            <div className="basis-1/3 text-center">
                <h2 className="mid text-[50px] lg:text-[60px] bg-gradient-to-r from-pink-600 to-purple-600 inline-block text-transparent bg-clip-text">
                    MINOR
                </h2>
                <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                    {minorSkills.map((skill, index) => (
                        <motion.li
                            className="bg-orange-400 text-white rounded-xl px-5 py-3 hover:motion-safe:animate-bounce"
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>

            </div>
            <div className="basis-1/3 text-center">
            <h2 className="mid text-[50px] lg:text-[60px] bg-gradient-to-r from-pink-600 to-purple-600 inline-block text-transparent bg-clip-text">
                    FUTURE
                </h2>
                <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                    {FutureSkills.map((skill, index) => (
                        <motion.li
                            className="bg-blue-500 text-white rounded-xl px-5 py-3 hover:motion-safe:animate-bounce"
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
        <div className=" text-center">
            <h2 className="mid text-[50px] lg:text-[60px] bg-gradient-to-r from-pink-600 to-purple-600 inline-block text-transparent bg-clip-text">
                    OTHER
                </h2>
                <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                    {otherSkills.map((skill, index) => (
                        <motion.li
                            className="bg-gray-500 text-white rounded-xl px-5 py-3 hover:motion-safe:animate-bounce"
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </div>   
    </section>
  )
}