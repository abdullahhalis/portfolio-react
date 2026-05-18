import { contactData } from "@/data/contacts";
import { ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-bg text-text w-full h-fit scroll-mt-14 py-16"
    >
      <div
        className="        
          max-w-6xl
          bg-surface
          w-[85vw] h-fit mx-auto py-12 px-8 md:px-12
          flex flex-col justify-center items-center
          border border-primary/30 rounded-2xl hover:border-primary transition
          "
      >
        <h1 className="text-2xl md:text-4xl font-extrabold">Get In Touch</h1>
        <h2 className="mt-6 text-sm md:text-lg font-bold px-auto text-text-muted text-center">
          Let's build something useful together. Feel free to reach out if you'd
          like to collaborate or discuss a project.
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
          {contactData.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 p-4 bg-surface-hover border rounded-xl border-border hover:scale-105 hover:border-primary/40 hover:bg-surface transition"
              >
                <Icon size={18} className="text-text-muted" />
                <span className="text-xs md:text-sm font-medium">{item.value}</span>
                <ExternalLink
                  size={14}
                  className="
                    w-0 opacity-0 -translate-x-1
                    group-hover:w-4
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all duration-300
                    overflow-hidden
                  "
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
