import { projectData } from "@/data/projects";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectDialog } from "./ProjectDialog";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section
      id="projects"
      className="bg-bg text-text w-full h-fit scroll-mt-14 pb-12"
    >
      <hr className="text-text-muted/30" />
      <span className="inline-flex flex-col">
        <h1 className="text-2xl md:text-3xl font-bold ml-4 mt-18">
          Featured Projects
        </h1>
        <span className="ml-4 w-18 h-1 bg-primary" />
      </span>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8 mt-10 px-8">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            type={project.type}
            description={project.description}
            period={project.period}
            technologies={project.technologies.slice(0, 4)}
            onClick={() => setSelectedProject(project)}
          />
        ))}

        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
