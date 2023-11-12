"use client";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);
return(
    <section ref={ref} id="projects">
        <div>
            <h1 className="spec hover:animate-pulse py-8 lg:text-[72px]  text-center">PROJECTS</h1>
        </div>
    </section>
)
}