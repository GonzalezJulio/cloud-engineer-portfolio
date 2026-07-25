import { HeroContent } from "@/sections/Hero/HeroContent";
import { HeroButtons } from "@/sections/Hero/HeroButtons";
import { HeroSocialLinks } from "@/sections/Hero/HeroSocialLinks";
import { HeroImage } from "@/sections/Hero/HeroImage";

import fondo from "@/assets/images/fondo.png";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center justify-center py-20"
    >
      {/* Background */}
      <img
        src={fondo}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <HeroContent />
          <HeroButtons />
          <HeroSocialLinks />
        </div>

        <HeroImage />
      </div>
    </section>
  );
}