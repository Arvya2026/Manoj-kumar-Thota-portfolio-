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
      <p className="text-white/70 text-sm md:text-base max-w-[480px] leading-relaxed font-light tracking-wide">
        AI Industry Leader with 7+ years of experience engineering On-Prem AI, Domain-Specific LLMs, and Small Language Models across Insurance, Banking, Legal Tech, and E-commerce — including $10M+ in enterprise insurance automation.
      </p>
    </div>
  );
};
