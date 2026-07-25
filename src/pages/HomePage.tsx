import { AboutSection } from "@/sections/About/AboutSection";
import { HeroSection } from "@/sections/Hero/HeroSection.tsx";
import { ProjectSection } from "@/sections/Projects/ProjectSection.tsx";
import { EducationSection } from "@/sections/Education/EducationSection.tsx";
import { CTASection } from "@/sections/CTA/CTASection.tsx";
import { Footer } from "@/sections/Footer/Footer.tsx";
import { Navbar } from "@/components/layout/Navbar/Navbar";




export function HomePage() {
  return (
    <section>
      <Navbar />

      <HeroSection />

      <AboutSection />

      <ProjectSection />

      <EducationSection />

      <CTASection />

      <Footer />
    </section>
  );
}
