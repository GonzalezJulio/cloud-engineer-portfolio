export function AboutStats() {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-3">
      <div className="rounded-xl bg-white p-6 text-center shadow-sm">
        <h3 className="text-3xl font-bold text-sky-600">3+</h3>
        <p className="mt-2 text-slate-600">
          Años desarrollando software
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 text-center shadow-sm">
        <h3 className="text-3xl font-bold text-sky-600">10+</h3>
        <p className="mt-2 text-slate-600">
          Proyectos
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 text-center shadow-sm">
        <h3 className="text-3xl font-bold text-sky-600">AWS</h3>
        <p className="mt-2 text-slate-600">
          En formación continua
        </p>
      </div>
    </div>
  );
}