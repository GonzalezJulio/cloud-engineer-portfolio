import { Button } from "@/components/ui/Button";
const nombre = "Julio";

function                                        App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <h1 className="text-5xl font-bold text-blue-600">Tailwind CSS v4 funcionando 🚀</h1>
      <Button />
      console.log("Hola, " + nombre + "!");
    </main>
  );
}

export default App;
