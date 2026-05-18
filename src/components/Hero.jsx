import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-bg/95 text-text w-full min-h-[calc(100vh-4rem)] flex justify-center items-center scroll-mt-0"
    >
      <div className="w-full max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Abdullah Hali Saputra
        </h1>
        <h2 className="text-xl md:text-2xl font-bold">Software Developer</h2>

        <p className="mt-4">
          Informatics engineering graduate passionate in{" "}
          <span className="font-semibold underline underline-offset-4">
            <Typewriter
              words={["mobile", "web", "front-end", "back-end", "full-stack"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
          development
        </p>

        <div className="mt-16 gap-12 flex justify-center flex-wrap">
          <Button
            variant="outline"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView()
            }
            icon={<Mail size={18} />}
          >
            Contact
          </Button>

          <Button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView()
            }
            icon={<ArrowDown size={18} />}
          >
            <span className="font-bold">View Projects</span>
          </Button>

          <Button
            variant="outline"
            href="/assets/pdf/resume.pdf"
            external
            icon={<ExternalLink size={16} />}
          >
            Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
