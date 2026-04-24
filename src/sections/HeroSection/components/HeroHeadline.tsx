import { useEffect, useRef } from "react";

export const HeroHeadline = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    setTimeout(() => {
      el.style.transition = "opacity 1.4s ease, transform 1.6s cubic-bezier(0.16,1,0.3,1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  return (
    <div ref={ref} className="w-full" style={{ willChange: "transform, opacity" }}>
      <h1
        className="text-white font-neutralsans font-normal leading-none tracking-tighter select-none"
        style={{
          fontSize: "clamp(40px, 9.5vw, 160px)",
          lineHeight: "0.93",
          letterSpacing: "-0.02em",
        }}
      >
        Manoj Kumar Thota
      </h1>
    </div>
  );
};
