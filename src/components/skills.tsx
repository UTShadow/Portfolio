"use client";


import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function Skills() {
    const { ref } = useSectionInView("Skills");
return(
    <section
        id="skills"
        ref={ref}
        className="w-[80%] object-center px-0"
        
    >
        <div>
            <h1 className="spec hover:animate-pulse py-5 lg:text-[72px] text-center">SKILLS</h1>
            
        </div>
        <div className=" justify-items-center grid gap-x-6 grid-cols-6 py-3">
            <div className=" col-span-2 ">
                <h2 className="mid text-[6vw] lg:text-[60px] bg-gradient-to-r from-pink-600 to-purple-600 inline-block text-transparent bg-clip-text">
                    solid
                </h2>
            </div>
            <div className="col-span-2  ">
                <h2 className="mid text-[6vw] lg:text-[60px] bg-gradient-to-r from-pink-600 to-purple-600 inline-block text-transparent bg-clip-text">
                    minor
                </h2>
            </div>
            <div className="col-span-2  ">
                <h2 className="mid text-[6vw] lg:text-[60px] bg-gradient-to-r from-pink-600 to-purple-600 inline-block text-transparent bg-clip-text">
                    future
                </h2>
            </div>
            <div className="col-span-2  gap-y-6  ">
                <div className="grid py-3 grow justify-items-center grid-cols-1 md:grid-cols-2 md:gap-x-5 gap-y-4 lg:grid-cols-3"> 


               
                    <div className="flex items-center justify-center w-[full] h-[full]   ">
                        <div className=" absolute flex  flex-col  z-[-2] rounded-full  blur-[3px] md:blur-[6px]  bg-gradient-to-r from-lime-600 to-emerald-600 w-[14vw] h-[2.3vh] sm:w-[12vw] sm:h-[3.5vh] md:w-[10vw] lg:w-[8.5vw] lg:h-[4.5vh]  ">  
                        </div>
                        <div className="  rounded-full flex flex-col items-center justify-center bg-[#190b27]  z-[-1] w-[14vw] h-[2vh] sm:w-[11vw] sm:h-[3vh] md:w-[9vw] md:h-[2.5vh] lg:w-[8vw] lg:h-[4vh] ">
                            <h3 className="text-indigo-500 flex text-[2.7vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.5vw]  w-full text-center flex-col">
                                REACT
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[full] h-[full]   ">
                        <div className=" absolute flex  flex-col  z-[-2] rounded-full  blur-[3px] md:blur-[6px]  bg-gradient-to-r from-lime-600 to-emerald-600 w-[14vw] h-[2.3vh] sm:w-[12vw] sm:h-[3.5vh] md:w-[10vw] lg:w-[8.5vw] lg:h-[4.5vh]  ">  
                        </div>
                        <div className="  rounded-full flex flex-col items-center justify-center bg-[#190b27]  z-[-1] w-[14vw] h-[2vh] sm:w-[11vw] sm:h-[3vh] md:w-[9vw] md:h-[2.5vh] lg:w-[8vw] lg:h-[4vh] ">
                            <h3 className="text-indigo-500 flex text-[2.7vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.5vw]  w-full text-center flex-col">
                                TS
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[full] h-[full]   ">
                        <div className=" absolute flex  flex-col  z-[-2] rounded-full  blur-[3px] md:blur-[6px]  bg-gradient-to-r from-lime-600 to-emerald-600 w-[14vw] h-[2.3vh] sm:w-[12vw] sm:h-[3.5vh] md:w-[10vw] lg:w-[8.5vw] lg:h-[4.5vh]  ">  
                        </div>
                        <div className="  rounded-full flex flex-col items-center justify-center bg-[#190b27]  z-[-1] w-[14vw] h-[2vh] sm:w-[11vw] sm:h-[3vh] md:w-[9vw] md:h-[2.5vh] lg:w-[8vw] lg:h-[4vh] ">
                            <h3 className="text-indigo-500 flex text-[2.7vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.5vw]  w-full text-center flex-col">
                                JS
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[full] h-[full]   ">
                        <div className=" absolute flex  flex-col  z-[-2] rounded-full  blur-[3px] md:blur-[6px]  bg-gradient-to-r from-lime-600 to-emerald-600 w-[14vw] h-[2.3vh] sm:w-[12vw] sm:h-[3.5vh] md:w-[10vw] lg:w-[8.5vw] lg:h-[4.5vh]  ">  
                        </div>
                        <div className="  rounded-full flex flex-col items-center justify-center bg-[#190b27]  z-[-1] w-[14vw] h-[2vh] sm:w-[11vw] sm:h-[3vh] md:w-[9vw] md:h-[2.5vh] lg:w-[8vw] lg:h-[4vh] ">
                            <h3 className="text-indigo-500 flex text-[2.3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.3vw]  w-full text-center flex-col">
                                TAILWIND
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[full] h-[full]   ">
                        <div className=" absolute flex  flex-col  z-[-2] rounded-full  blur-[3px] md:blur-[6px]  bg-gradient-to-r from-lime-600 to-emerald-600 w-[14vw] h-[2.3vh] sm:w-[12vw] sm:h-[3.5vh] md:w-[10vw] lg:w-[8.5vw] lg:h-[4.5vh]  ">  
                        </div>
                        <div className="  rounded-full flex flex-col items-center justify-center bg-[#190b27]  z-[-1] w-[14vw] h-[2vh] sm:w-[11vw] sm:h-[3vh] md:w-[9vw] md:h-[2.5vh] lg:w-[8vw] lg:h-[4vh] ">
                            <h3 className="text-indigo-500 flex text-[2.7vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.5vw]  w-full text-center flex-col">
                                CSS
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[full] h-[full]   ">
                        <div className=" absolute flex  flex-col  z-[-2] rounded-full  blur-[3px] md:blur-[6px]  bg-gradient-to-r from-lime-600 to-emerald-600 w-[14vw] h-[2.3vh] sm:w-[12vw] sm:h-[3.5vh] md:w-[10vw] lg:w-[8.5vw] lg:h-[4.5vh]  ">  
                        </div>
                        <div className="  rounded-full flex flex-col items-center justify-center bg-[#190b27]  z-[-1] w-[14vw] h-[2vh] sm:w-[11vw] sm:h-[3vh] md:w-[9vw] md:h-[2.5vh] lg:w-[8vw] lg:h-[4vh] ">
                            <h3 className="text-indigo-500 flex text-[2.7vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.5vw]  w-full text-center flex-col">
                                HTML
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[full] h-[full]   ">
                        <div className=" absolute flex  flex-col  z-[-2] rounded-full  blur-[3px] md:blur-[6px]  bg-gradient-to-r from-lime-600 to-emerald-600 w-[14vw] h-[2.3vh] sm:w-[12vw] sm:h-[3.5vh] md:w-[10vw] lg:w-[8.5vw] lg:h-[4.5vh]  ">  
                        </div>
                        <div className="  rounded-full flex flex-col items-center justify-center bg-[#190b27]  z-[-1] w-[14vw] h-[2vh] sm:w-[11vw] sm:h-[3vh] md:w-[9vw] md:h-[2.5vh] lg:w-[8vw] lg:h-[4vh] ">
                            <h3 className="text-indigo-500 flex text-[2.7vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.5vw]  w-full text-center flex-col">
                                NEXTJS
                            </h3>
                        </div>
                    </div>
                    
                   
                </div>
            </div>


            <div className="col-span-2  gap-y-6  ">
                <div className="grid py-3 grow place-items-center grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 lg:grid-cols-3"> 

                <div className="flex items-center justify-center w-[full] h-[full]   ">
                        <div className=" absolute flex  flex-col  z-[-2] rounded-full  blur-[3px] md:blur-[6px]  bg-gradient-to-r from-yellow-300 to-amber-400 w-[14vw] h-[2.3vh] sm:w-[12vw] sm:h-[3.5vh] md:w-[10vw] lg:w-[8.5vw] lg:h-[4.5vh]  ">  
                        </div>
                        <div className="  rounded-full flex flex-col items-center justify-center bg-[#190b27]  z-[-1] w-[14vw] h-[2vh] sm:w-[11vw] sm:h-[3vh] md:w-[9vw] md:h-[2.5vh] lg:w-[8vw] lg:h-[4vh] ">
                            <h3 className="text-indigo-500 flex text-[2.7vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.5vw]  w-full text-center flex-col">
                                AXIOS
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[full] h-[full]   ">
                        <div className=" absolute flex  flex-col  z-[-2] rounded-full  blur-[3px] md:blur-[6px]  bg-gradient-to-r from-yellow-300 to-amber-400 w-[14vw] h-[2.3vh] sm:w-[12vw] sm:h-[3.5vh] md:w-[10vw] lg:w-[8.5vw] lg:h-[4.5vh]  ">  
                        </div>
                        <div className="  rounded-full flex flex-col items-center justify-center bg-[#190b27]  z-[-1] w-[14vw] h-[2vh] sm:w-[11vw] sm:h-[3vh] md:w-[9vw] md:h-[2.5vh] lg:w-[8vw] lg:h-[4vh] ">
                            <h3 className="text-indigo-500 flex text-[2.3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.3vw]  w-full text-center flex-col">
                                NEXTAUTH
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[full] h-[full]   ">
                        <div className=" absolute flex  flex-col  z-[-2] rounded-full  blur-[3px] md:blur-[6px]  bg-gradient-to-r from-yellow-300 to-amber-400 w-[14vw] h-[2.3vh] sm:w-[12vw] sm:h-[3.5vh] md:w-[10vw] lg:w-[8.5vw] lg:h-[4.5vh]  ">  
                        </div>
                        <div className="  rounded-full flex flex-col items-center justify-center bg-[#190b27]  z-[-1] w-[14vw] h-[2vh] sm:w-[11vw] sm:h-[3vh] md:w-[9vw] md:h-[2.5vh] lg:w-[8vw] lg:h-[4vh] ">
                            <h3 className="text-indigo-500 flex text-[2.7vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.5vw]  w-full text-center flex-col">
                                ZOD
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[full] h-[full]   ">
                        <div className=" absolute flex  flex-col  z-[-2] rounded-full  blur-[3px] md:blur-[6px]  bg-gradient-to-r from-yellow-300 to-amber-400 w-[14vw] h-[2.3vh] sm:w-[12vw] sm:h-[3.5vh] md:w-[10vw] lg:w-[8.5vw] lg:h-[4.5vh]  ">  
                        </div>
                        <div className="  rounded-full flex flex-col items-center justify-center bg-[#190b27]  z-[-1] w-[14vw] h-[2vh] sm:w-[11vw] sm:h-[3vh] md:w-[9vw] md:h-[2.5vh] lg:w-[8vw] lg:h-[4vh] ">
                            <h3 className="text-indigo-500 flex text-[2.7vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.5vw]  w-full text-center flex-col">
                                PRISMA
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[full] h-[full]   ">
                        <div className=" absolute flex  flex-col  z-[-2] rounded-full  blur-[3px] md:blur-[6px]  bg-gradient-to-r from-yellow-300 to-amber-400 w-[14vw] h-[2.3vh] sm:w-[12vw] sm:h-[3.5vh] md:w-[10vw] lg:w-[8.5vw] lg:h-[4.5vh]  ">  
                        </div>
                        <div className="  rounded-full flex flex-col items-center justify-center bg-[#190b27]  z-[-1] w-[14vw] h-[2vh] sm:w-[11vw] sm:h-[3vh] md:w-[9vw] md:h-[2.5vh] lg:w-[8vw] lg:h-[4vh] ">
                            <h3 className="text-indigo-500 flex text-[2.7vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.5vw]  w-full text-center flex-col">
                                ESLINT
                            </h3>
                        </div>
                    </div>


                </div>
                </div>
                <div className="col-span-2  gap-y-6  ">
                <div className="grid py-3 grow place-items-center grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 lg:grid-cols-3"> 

                <div className="flex items-center justify-center w-[full] h-[full]   ">
                        <div className=" absolute flex  flex-col  z-[-2] rounded-full  blur-[3px] md:blur-[6px]  bg-gradient-to-r from-cyan-400 to-blue-600 w-[14vw] h-[2.3vh] sm:w-[12vw] sm:h-[3.5vh] md:w-[10vw] lg:w-[8.5vw] lg:h-[4.5vh]  ">  
                        </div>
                        <div className="  rounded-full flex flex-col items-center justify-center bg-[#190b27]  z-[-1] w-[14vw] h-[2vh] sm:w-[11vw] sm:h-[3vh] md:w-[9vw] md:h-[2.5vh] lg:w-[8vw] lg:h-[4vh] ">
                            <h3 className="text-indigo-500 flex text-[2.7vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.5vw]  w-full text-center flex-col">
                                REACT
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[full] h-[full]   ">
                        <div className=" absolute flex  flex-col  z-[-2] rounded-full  blur-[3px] md:blur-[6px]  bg-gradient-to-r from-cyan-400 to-blue-600 w-[14vw] h-[2.3vh] sm:w-[12vw] sm:h-[3.5vh] md:w-[10vw] lg:w-[8.5vw] lg:h-[4.5vh]  ">  
                        </div>
                        <div className="  rounded-full flex flex-col items-center justify-center bg-[#190b27]  z-[-1] w-[14vw] h-[2vh] sm:w-[11vw] sm:h-[3vh] md:w-[9vw] md:h-[2.5vh] lg:w-[8vw] lg:h-[4vh] ">
                            <h3 className="text-indigo-500 flex text-[2.7vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.5vw]  w-full text-center flex-col">
                                REACT
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[full] h-[full]   ">
                        <div className=" absolute flex  flex-col  z-[-2] rounded-full  blur-[3px] md:blur-[6px]  bg-gradient-to-r from-cyan-400 to-blue-600 w-[14vw] h-[2.3vh] sm:w-[12vw] sm:h-[3.5vh] md:w-[10vw] lg:w-[8.5vw] lg:h-[4.5vh]  ">  
                        </div>
                        <div className="  rounded-full flex flex-col items-center justify-center bg-[#190b27]  z-[-1] w-[14vw] h-[2vh] sm:w-[11vw] sm:h-[3vh] md:w-[9vw] md:h-[2.5vh] lg:w-[8vw] lg:h-[4vh] ">
                            <h3 className="text-indigo-500 flex text-[2.7vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.5vw]  w-full text-center flex-col">
                                REACT
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[full] h-[full]   ">
                        <div className=" absolute flex  flex-col  z-[-2] rounded-full  blur-[3px] md:blur-[6px]  bg-gradient-to-r from-cyan-400 to-blue-600 w-[14vw] h-[2.3vh] sm:w-[12vw] sm:h-[3.5vh] md:w-[10vw] lg:w-[8.5vw] lg:h-[4.5vh]  ">  
                        </div>
                        <div className="  rounded-full flex flex-col items-center justify-center bg-[#190b27]  z-[-1] w-[14vw] h-[2vh] sm:w-[11vw] sm:h-[3vh] md:w-[9vw] md:h-[2.5vh] lg:w-[8vw] lg:h-[4vh] ">
                            <h3 className="text-indigo-500 flex text-[2.7vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.5vw]  w-full text-center flex-col">
                                REACT
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[full] h-[full]   ">
                        <div className=" absolute flex  flex-col  z-[-2] rounded-full  blur-[3px] md:blur-[6px]  bg-gradient-to-r from-cyan-400 to-blue-600 w-[14vw] h-[2.3vh] sm:w-[12vw] sm:h-[3.5vh] md:w-[10vw] lg:w-[8.5vw] lg:h-[4.5vh]  ">  
                        </div>
                        <div className="  rounded-full flex flex-col items-center justify-center bg-[#190b27]  z-[-1] w-[14vw] h-[2vh] sm:w-[11vw] sm:h-[3vh] md:w-[9vw] md:h-[2.5vh] lg:w-[8vw] lg:h-[4vh] ">
                            <h3 className="text-indigo-500 flex text-[2.7vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.5vw]  w-full text-center flex-col">
                                REACT
                            </h3>
                        </div>
                    </div>


                </div>
                </div>
            
           
                   
               
           


                    

            
        </div>

        <div className="w-[100%] px-0 justify-items-stretch  gap-6 grid md:grid-cols-5 lg:grid-cols-6  grid-cols-3 pb-14">
                <div className=" hover:animate-pulse">
                    <Link href="https://nextjs.org/docs" target="_blank">
                        <img src="/nextjs.svg" className="invert"></img>
                    </Link>
                </div>
                <div className="hover:animate-pulse">
                    <Link href="https://react.dev/learn" target="_blank">
                        <img src="/react.svg" ></img>
                    </Link>
                </div>
                <div className=" hover:animate-pulse">
                    <Link href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" target="_blank">
                        <img src="/typescript.svg" ></img>
                    </Link>
                </div>
                <div className=" hover:animate-pulse">
                    <Link href="https://www.w3schools.com/js/" target="_blank">
                        <img src="/javascript.svg" ></img>
                    </Link>
                </div>
                <div className=" self-center hover:animate-pulse">
                    <Link href="https://tailwindcss.com/" target="_blank">
                        <img src="/tailwind.svg" ></img>
                    </Link>
                </div>
                <div className=" hover:animate-pulse">
                    <Link href="https://www.w3schools.com/css/default.asp" target="_blank">
                        <img src="/css.svg" ></img>
                    </Link>
                </div>
                <div className=" hover:animate-pulse">
                    <Link href="https://www.w3schools.com/html/default.asp" target="_blank">
                        <img src="/html.svg" ></img>
                    </Link>
                </div>
                <div className="hover:animate-pulse">
                    <Link href="https://ui.shadcn.com/docs" target="_blank">
                        <img src="/shadcn.jpg" ></img>
                    </Link>
                </div>
              
                <div className=" hover:animate-pulse">
                    <Link href="https://planetscale.com/docs/concepts/what-is-planetscale" target="_blank">
                        <img src="/planetscale.svg" className="h-[100%] w-[100%] invert" ></img>
                    </Link>
                </div>

                <div className=" hover:animate-pulse">
                    <Link href="https://vercel.com/docs/getting-started-with-vercel" target="_blank">
                        <img src="/brand-vercel.svg" className="invert" ></img>
                    </Link>
                    </div>
                <div className="self-center hover:animate-pulse">
                    <Link href="https://github.com/colinhacks/zod#readme" target="_blank">
                        <img src="/zod.png"  ></img>
                    </Link>
                </div>
               
                <div className=" hover:animate-pulse">
                    <Link href="https://www.prisma.io/docs/concepts/overview/what-is-prisma" target="_blank">
                        <img src="/prisma.svg"  ></img>
                    </Link>
                </div>
                <div className="hover:animate-pulse">
                    <Link href="https://axios-http.com/docs/intro" target="_blank">
                        <img src="/axios.png" ></img>
                    </Link>
                </div>
                <div className=" hover:animate-pulse">
                    <Link href="https://next-auth.js.org/getting-started/introduction" target="_blank">
                                <img src="/nextauth.png" />
                    </Link>
                </div>
                <div className=" hover:animate-pulse">
                    <Link href="https://www.framer.com/motion/introduction/" target="_blank">
                                <img src="/framer.svg" className="h-[100%] w-[100%] invert"/>
                    </Link>
                </div>

            </div>
    </section>
)
}