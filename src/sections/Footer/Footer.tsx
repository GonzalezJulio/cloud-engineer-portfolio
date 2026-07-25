import { footer } from "@/constants/footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 text-center md:flex-row">
        
        {/* Left */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            {footer.name}
          </h3>

          <p className="mt-1 text-sm text-zinc-400">
            {footer.role}
          </p>
        </div>

        {/* Center */}
        <div>
          <p className="text-sm text-zinc-500">
            Built with{" "}
            <span className="text-zinc-300">
              {footer.builtWith.join(" • ")}
            </span>
          </p>

          <p className="mt-2 text-xs text-zinc-600">
            {footer.copyright}
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <a
            href={footer.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-zinc-400 transition hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href={footer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-zinc-400 transition hover:text-sky-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}