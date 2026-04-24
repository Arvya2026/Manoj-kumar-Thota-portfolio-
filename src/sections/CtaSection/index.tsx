import { useReveal } from "@/hooks/useScrollAnimation";
import { CtaButton } from "@/sections/CtaSection/components/CtaButton";

export const CtaSection = () => {
  const subRef = useReveal(0) as React.RefObject<HTMLDivElement>;
  const headRef = useReveal(120) as React.RefObject<HTMLDivElement>;
  const btnRef = useReveal(240) as React.RefObject<HTMLDivElement>;

  return (
    <section
      id="contact"
      className="bg-white rounded-t-[40px] md:rounded-t-[60px] py-28 md:py-44 overflow-hidden"
    >
      <div className="max-w-[1216px] mx-auto px-6 md:px-14 flex flex-col items-center gap-7 md:gap-10 text-center">
        <div ref={subRef} className="reveal">
          <p className="text-black/40 text-sm tracking-[0.22em] uppercase font-light">
            Got something you want to build?
          </p>
        </div>

        <div ref={headRef} className="reveal">
          <h2
            className="text-black font-neutralsans font-normal tracking-tight leading-[1.0]"
            style={{ fontSize: "clamp(38px, 8vw, 112px)" }}
          >
            Let&rsquo;s talk<br />about it.
          </h2>
        </div>

        <div ref={btnRef} className="reveal">
          <CtaButton />
        </div>
      </div>
    </section>
  );
};
