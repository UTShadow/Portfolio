
import About from "../components/about";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import SectionDivider from "../components/SectionDivider";
import Skills from "../components/Skills";



export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
    </main>
  );
}
