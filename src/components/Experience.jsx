import experienceData from "../data/experiences.json";
import { cn } from "../utils/cn";

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-bg text-text w-full h-fit pb-8 scroll-mt-14"
    >
      <hr className="text-text-muted/30" />
      <span className="inline-flex flex-col">
        <h1 className="text-2xl md:text-3xl font-bold ml-4 mt-18">
          Experience
        </h1>
        <span className="ml-4 w-16 h-1 bg-primary" />
      </span>

      {experienceData.map((experience, index) => (
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-4 md:py-10">
          <div className="md:text-right pr-12 mt-6">
            <span
              className={cn(`inline-flex px-3 py-2
            rounded-md
            bg-surface
            border border-primary/20
            text-text
            text-sm font-bold`, experience.isCurrent && "bg-primary")}
            >
              {experience.period}
            </span>

            <p className="mt-3 text-xs text-text-muted">{experience.type}</p>
          </div>

          <div className="absolute top-18 left-2 md:left-1/2 md:-translate-x-1/2 h-full">
            <div className={cn("w-4 h-4 rounded-full bg-border border-4 border-bg mx-auto", experience.isCurrent && "bg-primary")} />
            {index < experienceData.length - 1 && (
              <div className={cn("w-px absolute top-4 bottom-4 left-1/2 -translate-x-1/2 bg-border mx-auto", experience.isCurrent && "bg-primary/50")} />
            )}
          </div>

          <div
            className="
          bg-surface
          border border-border
          rounded-3xl p-6 md:ml-12"
          >
            <h3 className={cn("text-xl font-extrabold", experience.isCurrent && "text-primary")}>{experience.role}</h3>

            <p className="mt-1 text-text font-medium">
              {experience.companyName}
            </p>

            <ul className="mt-4 ml-4 list-disc space-y-2 text-text-muted leading-relaxed">
              {experience.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>

            <hr className="mt-4 text-text-muted/30" />

            <div className="flex flex-wrap gap-2 mt-6">
              {experience.skills.map((skill, index) => (
                <div
                  key={index}
                  className="group flex items-center 
                p-2 
                bg-surface-hover 
                border rounded-md 
                border-border 
                hover:scale-105 hover:bg-surface transition"
                >
                  <span className="text-sm font-medium transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
