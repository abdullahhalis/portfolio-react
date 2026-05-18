import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, X } from "lucide-react";

export function ProjectDialog({ project, onClose }) {
  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent
        className="
          w-[80vw]
          max-w-none!
          max-h-[80vh]
          overflow-hidden
          bg-bg
          border-border
          p-0

          [&>button]:hidden
        "
      >
        {project && (
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] max-h-[80vh]">
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  rounded-2xl
                  object-contain
                  aspect-video                  
                  md:h-full
                "
              />
            </div>

            <div className="min-w-0 overflow-y-auto p-6 border-t md:border-t-0 md:border-l border-border bg-surface text-text">
              <DialogHeader>
                <DialogTitle className="text-2xl font-extrabold flex items-center justify-between">
                  {project.title}
                </DialogTitle>
              </DialogHeader>

              <button
                onClick={onClose}
                className="
                      absolute top-4 right-6
                      p-2 rounded-full
                      bg-surface border border-border
                      hover:bg-surface-hover"
              >
                <X size={18} />
              </button>

              <div className="flex items-center justify-between gap-4 mt-2">
                <span
                  className="                    
                      px-3 py-1
                      rounded-md
                      text-xs font-extrabold
                      bg-primary/10
                      border border-primary/20
                      text-primary
                    "
                >
                  {project.type}
                </span>

                <div
                  className="
                      inline-flex items-center 
                      text-xs
                      gap-2 font-bold
                      group-hover:translate-x-1"
                >
                  <Calendar size={18} />
                  <span>{project.period}</span>
                </div>
              </div>

              <h3 className="mt-4 font-semibold text-sm">Overview</h3>
              <p className="mt-2 text-text-muted text-xs leading-relaxed text-justify">
                {project.overview}
              </p>

              <h3 className="mt-4 font-semibold text-sm">Key Features</h3>
              <ul className="mt-2 list-disc ml-5 space-y-1 text-text-muted">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h3 className="mt-4 font-semibold text-sm">Role</h3>
              <p className="mt-2 text-text-muted text-justify">{project.role}</p>

              <h3 className="mt-4 font-semibold text-sm">Challenges</h3>
              <ul className="mt-2 list-disc ml-5 space-y-1 text-text-muted">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>

              <h3 className="mt-4 font-semibold text-sm">Technologies</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="
                      px-2 py-1
                      rounded-md
                      bg-surface-hover
                      border border-border
                      text-xs
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="mt-4 font-semibold text-sm">Links</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.links.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 p-2 bg-text border rounded-md border-border hover:scale-105 hover:border-primary/40 hover:bg-surface transition"
                    >
                      <Icon
                        size={16}
                        className="text-bg group-hover:text-primary transition-colors"
                      />
                      <span className="text-xs font-medium text-bg group-hover:text-primary transition-colors:">
                        {link.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
