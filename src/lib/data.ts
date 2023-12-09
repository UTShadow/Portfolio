
import furnaceImg from "@/pics/furnace.png"
import portfoImg from "./src/pics/portfo.png"
import githubImg from "@/pics/github.svg"
import urlImg from "@/pics/url.png"
import domatiqImg from "@/pics/domatiq.png"
import portImg from "@/pics/logo-port.png"

export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;

  export const projectsData = [
    {
    title: "Furnace",
    description:
      "\xa0 My first full stack project. Forum with google authentication, which allows you to create and share threads, posts, comments and much more...",
    tags:["Next.js", "React", "typescript", "Prisma", "Tailwind", "NextAuth", "Shadcn", "zod", "Axios"],
    imageUrl: furnaceImg,
    github: "https://github.com/UTShadow/furnace",
    url: "https://furnace-xi.vercel.app/",
    githubIcon: githubImg,
    urlIcon: urlImg,
  },
  {
    title: "Portfolio",
    description:
      "\xa0 My portfolio, which let you know me a little bit better.",
    tags:["Next.js", "React", "typescipt", "tailwind", "Motion"],
    imageUrl: portfoImg,
    github:"https://github.com/UTShadow/Portfolio",
    url:"https://github.com/UTShadow/Portfolio",
    githubIcon: githubImg,
    urlIcon: urlImg,
  },
] as const;
export const ExperienceData = [
  {
    job:"infrastructure specialist",
    company:"Łukasiewicz Research Network - PORT",
    period:"07.2023 - present",
    description:[" - Assessing, configuring, and maintaining technological infrastructure systems",
      "- Assisting specialists in everyday tasks during working hours",
      "- Making independent decisions in the event of a critical situation",
    ],
    picture:portImg,
  },
  {
    job:"Jr. infrastructure specialist",
    company:"Łukasiewicz Research Network - PORT",
    period:"10.2020-07.2023",
    description:[
      "- Assessing, configuring, and maintaining technological infrastructure systems",
      "- Assisting specialists in everyday tasks during working hours",
      "- Solving current problems in line with the guidelines and documentation",
      

    ],
    picture:portImg,
  },
  {
    job:"Fitter",
    company:"SIM Ltd.",
    period:"10.2019-03.2020",
    description:[
      "- Prepering SCADA system for hotel",
      "- Preparation, Configuration and installation of home automation systems",
      "- Maintaining contacts with customers"],
    picture:domatiqImg,
  },
  {
    job:"intern",
    company:"SIM Ltd.",
    period:"07.2019-10.2019",
    description:[
      "- Preparation, Configuration and installation of home automation systems",
      "- Adapting mobile app for ios using Kotlin",
      "- Creating a visualization and valuation of the projects",    
    ],
    picture:domatiqImg,

  },
  
]  as const;
export const solidSkills = [
  "React",
  "Javascript",
  "Typescript",
  "HTML",
  "CSS",
  "Tailwind",
  "NextJS"

] as const;
export const minorSkills = [
  "Prisma",
  "NextAuth",
  "ZOD",
  "Axios",
  "ESLint",
  "Sass",
  "NodeJs",
  "GraphQL",
  "Redux",
  "Jest",
  "Bootstrap"

  

] as const;
export const FutureSkills = [
  "Less",
  "SQL",
  "PHP",
  "Angular",
  "Go",
  "Rust",
  "HTMX",
] as const;

export const otherSkills = [
  "asix",
  "asembly",
  "C",
  "SolidEdge",
  "NX",
  "SCADA/HMI",
  "SIMATIC STEP7",
  "SEP E G1/G2/G3",
  "Driving License",
  

] as const;
