import { useReveal } from "@/hooks/useScrollAnimation";

export type FeatureCardProps = {
  title: string;
  description: string;
  images?: { src: string; alt: string }[];
  delay?: number;
};

export const FeatureCard = ({ title, description, images, delay = 0 }: FeatureCardProps) => {
  const ref = useReveal(delay) as React.RefObject<HTMLDivElement>;

  return (
    <div
      ref={ref}
      className="reveal-card flex flex-col gap-4 py-9 border-t border-black/10 h-full"
    >
      <h3 className="text-black text-xl md:text-2xl font-normal leading-snug font-neutralsans tracking-tight">
        {title}
      </h3>
      <p className="text-black/50 text-sm md:text-[15px] leading-relaxed font-light mb-4 flex-grow">
        {description}
      </p>
      
      {images && images.length > 0 && (
        <div className="flex flex-col gap-4 mt-auto">
          {images.map((img, i) => (
            <div key={i} className="w-full rounded-md overflow-hidden bg-black/5">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="block w-full h-auto"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
