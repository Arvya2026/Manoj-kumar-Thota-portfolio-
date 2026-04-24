import { useReveal } from "@/hooks/useScrollAnimation";

export const StatementSection = () => {
  const line1 = useReveal(0) as React.RefObject<HTMLDivElement>;
  const line2 = useReveal(160) as React.RefObject<HTMLDivElement>;
  const sub = useReveal(320) as React.RefObject<HTMLDivElement>;

  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-14">
        <div ref={line1} className="reveal-left">
          <p
            className="text-black/25 font-neutralsans font-normal leading-none"
            style={{ fontSize: "clamp(22px, 5.5vw, 80px)" }}
          >
            AI should help you do more
          </p>
        </div>
        <div ref={line2} className="reveal-right mt-1 md:mt-2">
          <p
            className="text-black font-neutralsans font-normal leading-none"
            style={{ fontSize: "clamp(24px, 6vw, 88px)" }}
          >
            not leave you guessing what it just did.
          </p>
        </div>

        <div ref={sub} className="reveal mt-10 md:mt-16">
          <p className="text-black/40 text-xs md:text-sm tracking-[0.22em] uppercase font-light text-center">
            Built to be used, not just shown.
          </p>
        </div>
      </div>
    </section>
  );
};
