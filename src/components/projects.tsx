"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);
return(
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <h1 className="spec hover:animate-pulse py-8 lg:text-[72px]  text-center">PROJECTS</h1>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
)
}