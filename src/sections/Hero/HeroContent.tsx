import { personal } from "@/constants/personal.ts";

export function HeroContent() {
  return (
         <div className="text-center">
                  <p className="text-lg text-sky-600 mb-4">{personal.greeting}</p>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">{personal.name}</h1>
                  <h2 className="mt-2 text-2xl font-semibold text-sky-600">{personal.role}</h2>
                  <p className="mt-6 leading-8 text-zinc-600">{personal.tagline}</p>
      </div>
  );
}

