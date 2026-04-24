import { SectionHeader } from "@/components/SectionHeader";
import { ServiceList } from "@/sections/ServicesSection/components/ServiceList";

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-[1216px] mx-auto px-6 md:px-14">
        <SectionHeader title="Expertise" light />
      </div>
      <ServiceList />
    </section>
  );
};
