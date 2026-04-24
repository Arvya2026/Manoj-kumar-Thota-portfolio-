import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the `visible` class is added.
 * The CSS in tailwind.css handles the actual transition via .reveal, .reveal-left, etc.
 */
export function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}

/** Parallax on any element based on scroll position */
export function useParallax(speed = 0.25) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handle = () => {
      const rect = el.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${centerY * speed}px) scale(1.12)`;
    };

    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, [speed]);

  return ref;
}

/**
 * Staggers reveal of descendants that carry `data-stagger`.
 * When the container enters the viewport, each tagged descendant gets the
 * `visible` class in sequence, giving a cascading reveal.
 */
export function useRevealStagger<T extends HTMLElement = HTMLDivElement>(
  step = 50,
  initialDelay = 0
) {
  const ref = useRef<T>(null);
  const stepRef = useRef(step);
  const delayRef = useRef(initialDelay);
  stepRef.current = step;
  delayRef.current = initialDelay;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = Array.from(
            el.querySelectorAll<HTMLElement>("[data-stagger]")
          );
          children.forEach((child, i) => {
            window.setTimeout(
              () => child.classList.add("visible"),
              delayRef.current + i * stepRef.current
            );
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Scroll-linked progress (0..1) for a single element's path through the viewport.
 * Call the callback with the latest progress on every rAF frame while scrolling.
 */
export function useScrollLinked<T extends HTMLElement = HTMLDivElement>(
  onUpdate: (progress: number) => void
) {
  const ref = useRef<T>(null);
  const cbRef = useRef(onUpdate);
  cbRef.current = onUpdate;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const scrolled = vh - rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      cbRef.current(p);
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return ref;
}

/** Global page scroll progress (0..1). */
export function usePageScrollProgress(onUpdate: (p: number) => void) {
  const cbRef = useRef(onUpdate);
  cbRef.current = onUpdate;

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const p =
        scrollable > 0 ? Math.max(0, Math.min(1, window.scrollY / scrollable)) : 0;
      cbRef.current(p);
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
