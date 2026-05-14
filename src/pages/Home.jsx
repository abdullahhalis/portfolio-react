import { Projects } from "@/components/Projects";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero/>
      <About/>
      <Experience />
      <Projects />
      <section id="education" className="min-h-screen scroll-mt-20">Education</section>
      <section id="contact" className="min-h-screen scroll-mt-20">Contact</section>
    </div>
  );
}