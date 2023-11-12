"use client";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    return(
        <section
            id="contact"
            ref={ref}
        >
        <div>
            
        </div>
        </section>
    )
}