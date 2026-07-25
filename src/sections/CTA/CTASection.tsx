import { CTAContent } from "./CTAContent";

export function CTASection() {
  return (
    <section
      id="cta"
      className="bg-gradient-to-b from-zinc-900 via-zinc-950 to-black py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <CTAContent />
      </div>
    </section>
  );
}