import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { StatementSection } from "@/sections/StatementSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { FeaturedWorksSection } from "@/sections/FeaturedWorksSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { CtaSection } from "@/sections/CtaSection";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatementSection />
      <ServicesSection />
      <FeaturedWorksSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};
