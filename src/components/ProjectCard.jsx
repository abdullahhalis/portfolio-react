import { ArrowRight } from "lucide-react";

export function ProjectCard({
  image,
  title,
  type,
  description,
  period,
  technologies,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="
        group
        flex flex-col
        h-full
        cursor-pointer
        bg-surface
        border border-border rounded-3xl
        hover:-translate-y-1 hover:border-primary/30
        transition-all duration-300
        relative text-sm md:text-base"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full
            object-cover
            rounded-t-3xl
            group-hover:scale-105
            transition duration-500"
        />

        <span
          className="
              absolute top-4 right-4
              px-3 py-1
              rounded-md
              text-xs font-extrabold
              bg-bg/80 backdrop-blur-sm
              border border-primary/20
              text-text
            "
        >
          {type}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-bold group-hover:text-primary transition-transform duration-300">{title}</h3>

        <p
          className="
           mt-2 text-xs
           text-text-muted
           leading-relaxed
           line-clamp-3"
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-4 mt-auto">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="
                px-3 py-1
                rounded-sm
                text-xs font-medium
                bg-surface-hover
                border border-border
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <hr className="text-text-muted/30 mt-4" />

        <div className="flex items-center justify-between gap-4 pt-4">
          <p className="mt-1 text-sm text-text-muted">{period}</p>
          <div
            className="inline-flex items-center 
              text-sm text-primary
              gap-2 font-bold
              group-hover:translate-x-1
              transition-transform duration-300"
          >
            <span>Details</span>
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
