import { education } from "@/constants/education";

export const EducationCard = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {education.map((item) => (
        <article
          key={item.id}
          className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10"
        >
          {/* Imagen */}
          <div className="flex h-56 items-center justify-center bg-zinc-950 p-6">
            <img
              src={item.image[0]}
              alt={item.title}
              className="max-h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Contenido */}
          <div className="flex h-[320px] flex-col p-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                {item.provider}
              </p>
            </div>

            {/* Estado + Año */}
            <div className="mt-5 flex items-center justify-between">
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                {item.status}
              </span>

              <span className="text-sm text-zinc-500">
                {item.year}
              </span>
            </div>

            {/* Skills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};