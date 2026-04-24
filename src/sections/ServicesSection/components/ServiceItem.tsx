import { useReveal } from "@/hooks/useScrollAnimation";

export type ServiceItemProps = {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  flip?: boolean;
  delay?: number;
};

export const ServiceItem = ({
  number,
  title,
  description,
  imageSrc,
  imageAlt,
  flip = false,
  delay = 0,
}: ServiceItemProps) => {
  const ref = useReveal(delay) as React.RefObject<HTMLDivElement>;

  return (
    <div
      ref={ref}
      className={`reveal flex flex-col ${flip ? "md:flex-row-reverse" : "md:flex-row"} items-stretch gap-0 border-b border-white/8 group`}
    >
      {/* Image */}
      <div
        className="relative w-full md:w-[52%] overflow-hidden"
        style={{ aspectRatio: "16/10" }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ willChange: "transform" }}
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      {/* Text */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-12 py-10 md:py-0">
        <span className="text-white/25 text-xs tracking-[0.3em] uppercase mb-6 font-light">
          {number}
        </span>
        <h3
          className="text-white font-neutralsans font-normal leading-none tracking-tight mb-5"
          style={{ fontSize: "clamp(28px, 3.8vw, 56px)" }}
        >
          {title}
        </h3>
        <p className="text-white/45 text-sm md:text-[15px] leading-relaxed font-light max-w-sm">
          {description}
        </p>
      </div>
    </div>
  );
};
