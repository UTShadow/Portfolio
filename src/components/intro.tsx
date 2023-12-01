"use client"
import { useSectionInView } from "@/lib/hooks";


export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
     
    return(
        <section
        ref={ref}
      id="home"
      className="   pb-[40px] justify-items-center max-w-[80rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
        
        <div className=" grid   gap-y-4   lg:grid-cols-5 grid-cols-2 ">
        
            <div className=" place-self-center w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[18rlh] hover:scale-[110%] blob bg-opacity-40 shadow-inherit order-first  container col-span-2 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ">
                <img className="scale-[70%]  rounded-[80px]"src="/palceholder.jpg"/>
            </div> 
           
            <div className="relative items-center px-10 lg:col-span-3 col-span-2">
            
                <div>
                <div className="invisible lg:visible absolute z-[-2] w-[90%] h-[106px] blur-[4px]  rounded-tl-[150px] rounded-tr-[100px] rounded-bl-[100px]
                                rounded-br-[150px]  bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                    <div className=" absolute z-[-1] w-[100%] h-[100px] bg-[#10061a]">
                    </div>
                </div>
                <h1 className="static spec  lg:text-[72px] hover:animate-pulse   text-center">
                    MICHAŁ KARSAY
                </h1>
                </div>
                
                <p className="introFont italic capitalize text-[22px]  sm:text-[36px] text-center pt-[2rem] lg:pt-[5rem] bg-gradient-to-r from-pink-600 to-purple-600 inline-block text-transparent bg-clip-text px-6  ">
                    Enthusiastic engineer eager to learn new technologies and create innovative  projects   
                    
                </p>
                
                
            </div>
            
        </div>
        <div className="flex justify-center pt-4">
                    <a href="https://www.linkedin.com/in/michał-karsay-7562271b6/" target="_blank" className="px-7">
                    <img className=" w-[48px] place-self-center " src="/ln.png" />
                    </a>
                    <a href="https://github.com/UTShadow" target="_blank" className="px-7">
                    <img className=" invert " src="/github.png"/>  
                    </a>
                </div> 
    </section>
    );
}
