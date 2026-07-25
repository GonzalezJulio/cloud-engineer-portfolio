import { cta } from "@/constants/cta";
import { FaDownload, FaLinkedin } from "react-icons/fa";

export function CTAButtons() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      <a
        href="/Julio_Gonzalez_Cloud_Engineer.pdf"
        download
        className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-lg"
      >
        <FaDownload size={16} />
        <span>Download Resume</span>
      </a>

      <a
        href={cta.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-6 py-3 font-medium text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-50 hover:text-sky-600 hover:shadow-lg"
      >
        <FaLinkedin size={16} />
        <span>Connect on LinkedIn</span>
      </a>
    </div>
  );
}