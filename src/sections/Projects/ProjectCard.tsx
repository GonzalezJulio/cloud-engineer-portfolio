import { projects } from "@/constants/projects";

export function ProjectCard() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.id}
          className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/10"
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={project.image}
              alt={project.title}
              className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <h3 className="mt-5 text-xl font-semibold">
            {project.title}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            {/* Botones */}
          </div>
        </article>
      ))}
    </div>
  );
}