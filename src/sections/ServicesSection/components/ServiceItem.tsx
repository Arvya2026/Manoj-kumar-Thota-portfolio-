import { useReveal } from "@/hooks/useScrollAnimation";

export type ServiceItemProps = {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  flip?: boolean;
  delay?: number;
};

export const ServiceItem = ({
  number,
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "center 5%",
  flip = false,
  delay = 0,
}: ServiceItemProps) => {
  const ref = useReveal(delay) as React.RefObject<HTMLDivElement>;

  return (
    <div
      ref={ref}
      className={`reveal flex flex-col ${
        flip ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-6 md:gap-12 py-10 md:py-14 border-b border-white/8 group bg-[#0a0a0a]`}
    >
      {/* Image Container with Padding & Executive Card Frame */}
      <div className="w-full md:w-[48%] flex-shrink-0 p-2 sm:p-4 md:p-6">
        <div className="relative w-full aspect-[4/3] md:aspect-[14/10] overflow-hidden rounded-2xl md:rounded-3xl border border-white/12 bg-[#121212] shadow-2xl transition-all duration-500 group-hover:border-white/25 group-hover:shadow-white/5">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            style={{
              objectPosition: imagePosition,
              willChange: "transform",
            }}
          />
          {/* Subtle elegant image overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl md:rounded-3xl pointer-events-none" />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 py-4 md:py-0">
        <span className="text-white/30 text-xs tracking-[0.3em] uppercase mb-5 font-light">
          {number}
        </span>
        <h3
          className="text-white font-neutralsans font-normal leading-[1.08] tracking-tight mb-5"
          style={{ fontSize: "clamp(26px, 3.5vw, 48px)" }}
        >
          {title}
        </h3>
        <p className="text-white/55 text-sm md:text-[15px] leading-relaxed font-light max-w-lg">
          {description}
        </p>
      </div>
    </div>
  );
};
