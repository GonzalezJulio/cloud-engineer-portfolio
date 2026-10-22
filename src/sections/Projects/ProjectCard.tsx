import { projects } from "@/constants/projects";

export function ProjectCard() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.id}
          className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg"
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={project.image}
              alt={project.title}
              className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            {project.title}
          </h3>

          <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 border-t border-slate-100 pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-700"
            >
              View Repository
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}