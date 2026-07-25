export function HeroButtons() {
  return (
    <div className="mt-8 flex justify-center gap-4">
      <a
        href="#projects"
        className="rounded-lg bg-sky-600 px-6 py-3 font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-lg"
      >
        View Projects
      </a>

      <a
        href="/Julio_Gonzalez_Cloud_Engineer.pdf"
        download
        className="rounded-lg border border-zinc-300 bg-white px-6 py-3 font-medium text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-50 hover:text-sky-600 hover:shadow-lg"
      >
        Download Resume
      </a>
    </div>
  );
}