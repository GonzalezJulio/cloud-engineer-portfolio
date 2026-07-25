import { EducationCard } from "@/sections/Education/EducationCard.tsx";


export function EducationSection() {
  return (
         <section id="education" className="min-h-screen flex flex-col items-center justify-center py-12">
                  <h2 className="mb-8 text-3xl font-bold text-slate-800">Education</h2>
                  <EducationCard />
         </section>
  );
}