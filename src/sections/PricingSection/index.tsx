import { SectionHeader } from "@/components/SectionHeader";
import { PricingGrid } from "@/sections/PricingSection/components/PricingGrid";

export const PricingSection = () => {
  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1216px] mx-auto px-6 md:px-14">
        <SectionHeader title="Work With Me" light />
        <PricingGrid />
      </div>
    </section>
  );
};
