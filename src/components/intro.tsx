"use client"
import { useSectionInView } from "@/lib/hooks";


export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
     
    return(
        <section
        ref={ref}
      id="home"
      className="  mb-28 pb-[30px] justify-items-center max-w-[80rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
        
        <div className=" grid   gap-y-4   lg:grid-cols-5 grid-cols-2 ">
        
            <div className=" place-self-center w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[18rlh] hover:scale-[110%] blob bg-opacity-40 shadow-inherit order-first  container col-span-2 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ">
                <img className="scale-[70%]  rounded-[80px]"src="/palceholder.jpg"/>
            </div> 
           
            <div className="relative items-center px-10 lg:col-span-3 col-span-2">
            
                <div>
                <div className="invisible lg:visible absolute z-[-2] w-[90%] h-[106px] blur-[4px]  rounded-tl-[150px] rounded-tr-[100px] rounded-bl-[100px]
                                rounded-br-[150px]  bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                    <div className=" absolute z-[-1] w-[100%] h-[100px]     bg-[#10061a]">
                    </div>
                </div>
                <h1 className="static spec lg:text-[72px] hover:animate-pulse   text-center">
                    MICHAŁ KARSAY
                </h1>
                </div>
                
                <p className="static text-white px-6 py-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint earum eaque cumque repellendus 
                        rem voluptatibus sapiente, voluptatum ducimus numquam aperiam quidem! Quaerat debitis quis dolore labore aspernatur fuga atque.
                </p> 
                
            </div>
            
        </div>
    </section>
    );
}
