import { AboutContent } from "./AboutContent";
import { AboutStats } from "./AboutStats";
import { AboutTech } from "./AboutTech";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <AboutContent />

        <AboutTech />

        <AboutStats />
      </div>
    </section>
  );
}