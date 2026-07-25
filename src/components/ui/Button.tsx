export function Button() {
  return (
    <div className="mt-8 flex justify-center gap-4">
  <button className="rounded-lg bg-sky-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-sky-700">
    Ver proyectos
  </button>

  <button className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-100">
    Descargar CV
  </button>
</div>
  );
}