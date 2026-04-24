import { useEffect, useRef } from "react";

export const HeroBackground = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Parallax
      if (imgRef.current) {
        const y = scrollY * 0.35;
        imgRef.current.style.transform = `translateY(${y}px) scale(1.12)`;
      }

      // Scroll progress: 0 at top, 1 when fully scrolled past hero
      const progress = Math.min(scrollY / (heroHeight * 0.85), 1);

      // Darken overlay: goes from 0 -> 0.82 opacity (near black)
      if (overlayRef.current) {
        const darkness = progress * 0.82;
        overlayRef.current.style.opacity = String(darkness);
      }

      // Blur on the img: 0px -> 10px
      if (imgRef.current) {
        const blur = progress * 10;
        imgRef.current.style.filter = `blur(${blur}px)`;
      }
    };

    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <img
        ref={imgRef}
        src="/images/CEO - 1.jpg"
        alt="Hero"
        className="w-full h-full object-contain object-bottom"
        style={{
          transformOrigin: "center bottom",
          willChange: "transform, filter",
        }}
      />
      {/* Static gradient overlay (always present) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />
      {/* Scroll-driven black overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black"
        style={{ opacity: 0, willChange: "opacity" }}
      />
    </div>
  );
};
