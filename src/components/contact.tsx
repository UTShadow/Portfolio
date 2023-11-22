"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/SendEmail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";


export default function Contact() {
    const { ref } = useSectionInView("Contact");
    return (
      
        <motion.section
          id="contact"
          ref={ref}
          className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <h1 className="spec lg:text-[72px] hover:animate-pulse py-8  text-center">CONTACT</h1>
    
          <p className="text-white -mt-6 ">
            Please contact me directly at &nbsp;
            <a className="underline" href="mailto:mkprojects78@gmail.com">
                mkprojects78@gmail.com
            </a>
            &nbsp; or through this form.
          </p>
    
          <form
            className="mt-10 flex flex-col "
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);
    
              if (error) {
                toast.error(error);
                return;
              }
    
              toast.success("Email sent successfully!");
            }}
          >
            <input
              className="h-14 px-4 rounded-lg borderBlack  transition-all "
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
            />
            <textarea
              className="h-52 my-3 rounded-lg borderBlack p-4   transition-all "
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
            />
            <SubmitBtn />
          </form>
        </motion.section>);
}