"use client";
import { useSectionInView } from "@/lib/hooks";
export default function Experience() {
    const { ref } = useSectionInView("Experience");
return(
    <section
        id="experience"
        ref={ref}
    >
        <div>
            <h1 className="spec lg:text-[72px] hover:animate-pulse py-8  text-center">EXPERIENCE</h1>
        </div>
    </section>
)
}