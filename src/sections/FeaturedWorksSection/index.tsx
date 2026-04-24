import { SectionHeader } from "@/components/SectionHeader";
import { WorkGrid } from "@/sections/FeaturedWorksSection/components/WorkGrid";

export const FeaturedWorksSection = () => {
  return (
    <section id="works" className="bg-[#0a0a0a] py-24 md:py-36">
      <div className="max-w-[1216px] mx-auto px-6 md:px-14">
        <SectionHeader title="Selected Work" light />
        <WorkGrid />
      </div>
    </section>
  );
};
