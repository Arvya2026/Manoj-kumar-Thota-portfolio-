import { useReveal } from "@/hooks/useScrollAnimation";

export type TestimonialCardProps = {
  imageSrc: string;
  imageAlt: string;
  testimonialText: string;
  authorName: string;
  authorCompany: string;
  delay?: number;
};

export const TestimonialCard = ({
  imageSrc,
  imageAlt,
  testimonialText,
  authorName,
  authorCompany,
  delay = 0,
}: TestimonialCardProps) => {
  const ref = useReveal(delay) as React.RefObject<HTMLDivElement>;

  return (
    <div ref={ref} className="reveal-card flex-1">
      <div className="relative border border-white/10 rounded-2xl p-7 md:p-9 flex flex-col items-start gap-6 h-full bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
        {/* Quote mark */}
        <span className="text-white/15 text-5xl font-serif leading-none select-none">&ldquo;</span>

        <p className="text-white/70 text-sm md:text-[15px] leading-relaxed font-light flex-1 -mt-4">
          {testimonialText}
        </p>

        <div className="flex items-center gap-3 pt-2 border-t border-white/8 w-full">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-10 h-10 rounded-xl object-cover flex-shrink-0"
          />
          <div>
            <p className="text-white text-sm font-normal">{authorName}</p>
            <p className="text-white/40 text-xs font-light">{authorCompany}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
