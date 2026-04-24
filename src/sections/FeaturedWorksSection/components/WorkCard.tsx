import { useReveal } from "@/hooks/useScrollAnimation";

export type WorkCardProps = {
  href: string;
  imageAlt: string;
  imageSrc: string;
  date: string;
  title: string;
  category: string;
  index: number;
  delay?: number;
};

export const WorkCard = ({
  href,
  imageAlt,
  imageSrc,
  date,
  title,
  category,
  index,
  delay = 0,
}: WorkCardProps) => {
  const ref = useReveal(delay) as React.RefObject<HTMLDivElement>;
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="reveal-card">
      <a
        href={href}
        className={`group flex flex-col ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } items-end gap-6 md:gap-12 cursor-pointer`}
      >
        {/* Image */}
        <div className="relative w-full md:w-[62%] overflow-hidden rounded-2xl bg-neutral-900">
          <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-all duration-700" />
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
            style={{ aspectRatio: "16/10", willChange: "transform" }}
          />
        </div>

        {/* Meta */}
        <div className="flex-1 flex flex-col gap-3 pb-4">
          <p className="text-white/40 text-xs tracking-[0.22em] uppercase font-light">{category}</p>
          <h3
            className="text-white font-neutralsans font-normal leading-none tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}
          >
            {title}
          </h3>
          <p className="text-white/35 text-sm font-light">{date}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-white/50 text-sm group-hover:text-white transition-colors duration-500">
            <span className="font-light tracking-wide">View Project</span>
            <span className="text-lg transition-transform duration-500 group-hover:translate-x-1">â†’</span>
          </div>
        </div>
      </a>
    </div>
  );
};
