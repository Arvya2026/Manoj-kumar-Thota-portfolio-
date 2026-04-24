import { useEffect, useRef } from "react";

export const HeroMeta = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = (el: HTMLElement | null, delay: number, x: number) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = `translateX(${x}px)`;
      setTimeout(() => {
        el.style.transition =
          "opacity 1.2s ease, transform 1.4s cubic-bezier(0.16,1,0.3,1)";
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
      }, delay);
    };
    animate(leftRef.current, 400, -40);
    animate(rightRef.current, 550, 40);
  }, []);

  return (
    <div className="flex justify-between items-start w-full pt-2">
      <div ref={leftRef}>
        <p className="text-white font-neutralsans text-lg md:text-xl font-normal tracking-wide">
          London · Vijayawada
        </p>
      </div>
      <div ref={rightRef} className="text-right flex flex-col gap-0.5">
        <p className="text-white/90 text-sm md:text-base font-light tracking-wide leading-relaxed">
          AI for Lawyers
        </p>
        <p className="text-white/90 text-sm md:text-base font-light tracking-wide leading-relaxed">
          Document AI
        </p>
        <p className="text-white/90 text-sm md:text-base font-light tracking-wide leading-relaxed">
          Founder &amp; Engineer
        </p>
      </div>
    </div>
  );
};
