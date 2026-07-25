import { cta } from "@/constants/cta";
import { CTAButtons } from "@/sections/CTA/CTAButtons";

export function CTAContent() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-white">
        {cta.title}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
        {cta.description}
      </p>

      <CTAButtons />
    </div>
  );
}