import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialList } from "@/sections/TestimonialsSection/components/TestimonialList";

export const TestimonialsSection = () => {
  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1216px] mx-auto px-6 md:px-14">
        <SectionHeader title="Recognition" light />
        <TestimonialList />
      </div>
    </section>
  );
};
