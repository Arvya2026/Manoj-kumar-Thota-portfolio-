import { useReveal } from "@/hooks/useScrollAnimation";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureGrid } from "@/sections/AboutSection/components/FeatureGrid";

export const AboutSection = () => {
  const headingRef = useReveal(80) as React.RefObject<HTMLDivElement>;

  return (
    <section id="about" className="bg-white py-24 md:py-36">
      <div className="max-w-[1216px] mx-auto px-6 md:px-14">
        <SectionHeader title="About" light={false} />

        {/* Big statement text */}
        <div ref={headingRef} className="reveal mb-20 md:mb-28">
          <p
            className="text-black font-neutralsans font-normal leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(28px, 4.8vw, 68px)" }}
          >
            Lawyers spend hours every day on work that&rsquo;s repetitive and
            slow. <span className="text-black/25 font-normal">Drafting.</span>{" "}
            <span className="text-black/25 font-normal">Searching.</span>{" "}
            <span className="text-black/25 font-normal">Checking.</span> I build
            AI that takes that work off their plate without changing how they
            already work.
          </p>
        </div>

        <FeatureGrid />
      </div>
    </section>
  );
};
