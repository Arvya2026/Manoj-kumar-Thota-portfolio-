import { HeroBackground } from "@/sections/HeroSection/components/HeroBackground";
import { HeroMeta } from "@/sections/HeroSection/components/HeroMeta";
import { HeroIntro } from "@/sections/HeroSection/components/HeroIntro";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-white">
      <HeroBackground />
      <div className="absolute inset-0 z-10 flex flex-col justify-between px-6 md:px-14 py-8 pt-28">
        <HeroMeta />
        <HeroIntro />
      </div>
    </section>
  );
};
