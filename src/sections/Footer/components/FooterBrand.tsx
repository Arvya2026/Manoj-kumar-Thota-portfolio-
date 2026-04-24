import { useReveal } from "@/hooks/useScrollAnimation";

export const FooterBrand = () => {
  const ref = useReveal(0) as React.RefObject<HTMLDivElement>;

  return (
    <div className="overflow-hidden px-6 md:px-14 pt-10 pb-0 flex justify-center w-full">
      <div ref={ref} className="reveal w-full flex flex-col items-center justify-center">
        <p
          className="text-black font-ztnature font-bold leading-none tracking-tight select-none text-center"
          style={{
            fontSize: "clamp(40px, 9vw, 150px)",
            lineHeight: "0.95",
            letterSpacing: "-0.02em",
          }}
        >
          Manoj Kumar<br />Thota
        </p>
      </div>
    </div>
  );
};
