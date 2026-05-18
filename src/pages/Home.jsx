import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <footer className="py-8 bg-bg text-center text-sm text-text-muted border-t border-border">
        © {new Date().getFullYear()} Abdullah Hali Saputra
      </footer>
    </div>
  );
}
