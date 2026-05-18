import { Mail, MapPin } from "lucide-react";
import { About as aboutData } from "../data/about";

export function About() {
  return (
    <section
      id="about"
      className="bg-bg text-text w-full min-h-screen scroll-mt-14 "
    >
      <div className="max-w-6xl mx-auto">
        <span className="inline-flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold ml-4 mt-18">
            About Me
          </h1>
          <span className="ml-4 w-12 h-1 bg-primary"></span>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-10">
          <div className="bg-surface rounded-3xl h-fit relative text-sm md:text-base">
            <div className="absolute top-0 w-full h-35 rounded-t-3xl bg-linear-to-br from-primary/30 to-primary" />
            <img
              src="/assets/images/profile.png"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto object-cover relative z-10 border-4 border-surface mt-20"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl md:text-2xl font-extrabold mb-4">{aboutData.name}</h3>

              <span className="text-primary bg-primary/10 rounded-3xl py-2 px-4 border border-primary/20 text-sm font-bold">
                {aboutData.title}
              </span>
            </div>

            <div className="space-y-5 rounded-2xl m-6 bg-surface-hover p-6">
              <div className="flex items-start gap-4">
                <div className="bg-bg/60 p-3 rounded-xl">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-text-muted text-xs">Location</p>
                  <p className="mt-1 font-medium text-sm">{aboutData.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-bg/60 p-3 rounded-xl">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-text-muted text-xs">Email</p>
                  <p className="mt-1 font-medium text-sm">{aboutData.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-justify leading-relaxed">{aboutData.summary}</p>
            <h3 className="text-xl font-semibold mt-10">Skills & Tools</h3>
            <div className="flex flex-wrap gap-4 mt-8">
              {aboutData.featuredSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-center gap-2 p-4 bg-surface-hover border rounded-xl border-border hover:scale-105 hover:border-primary/40 hover:bg-surface transition"
                  >
                    <Icon
                      size={18}
                      className="text-text-muted group-hover:text-primary transition-colors"
                    />
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
