import { useRef } from "react";
import { usePageScrollProgress } from "@/hooks/useScrollAnimation";

export const ScrollProgressBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  usePageScrollProgress((p) => {
    if (ref.current) ref.current.style.setProperty("--progress", String(p));
  });
  return <div ref={ref} className="scroll-progress" aria-hidden="true" />;
};
