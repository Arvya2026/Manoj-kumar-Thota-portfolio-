import { useEffect, useRef } from "react";

export const HeroIntro = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "opacity 1.2s ease, transform 1.3s cubic-bezier(0.16,1,0.3,1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 700);
  }, []);

  return (
    <div ref={ref} className="w-full flex justify-start pb-2">
      <p className="text-white/70 text-sm md:text-base max-w-[400px] leading-relaxed font-light tracking-wide">
        I build AI tools that help lawyers and businesses do their everyday work faster without their data ever leaving the building.
      </p>
    </div>
  );
};
