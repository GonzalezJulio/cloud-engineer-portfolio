import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "@/constants/personal";

export function HeroSocialLinks() {
  return (
    <div className="mt-8 flex justify-center gap-4">
      <a
        href={personal.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md hover:text-sky-600"
      >
        <FaGithub 
          size={22}
          className="transition-transform duration-200 group-hover:scale-110"
        />
        <span className="font-medium">GitHub</span>
      </a>

      <a
        href={personal.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md hover:text-sky-600"
      >
        <FaLinkedin
          size={22}
          className="transition-transform duration-200 group-hover:scale-110"
        />
        <span className="font-medium">LinkedIn</span>
      </a>
    </div>
  );
}