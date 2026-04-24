import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useScrollAnimation";

export type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  ctaHref: string;
  ctaText: string;
  features: string[];
  featured?: boolean;
  checkIconUrl: string;
  delay?: number;
};

export const PricingCard = ({
  title,
  price,
  description,
  ctaHref,
  ctaText,
  features,
  featured = false,
  checkIconUrl,
  delay = 0,
}: PricingCardProps) => {
  const ref = useReveal(delay) as React.RefObject<HTMLDivElement>;

  return (
    <div
      ref={ref}
      className={`reveal-card relative flex flex-col gap-7 p-7 md:p-8 rounded-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-1 ${
        featured
          ? "bg-white/[0.06] border border-white/20"
          : "bg-white/[0.025] border border-white/[0.07]"
      }`}
    >
      {featured && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      )}

      {/* Header */}
      <p className="text-white/45 text-[11px] tracking-[0.25em] uppercase font-light">{title}</p>

      {/* Price */}
      <div>
        <p
          className="text-white font-neutralsans font-normal tracking-tight leading-none"
          style={{ fontSize: "clamp(38px, 3.8vw, 54px)" }}
        >
          {price}
        </p>
        <p className="text-white/40 text-[13px] mt-3 leading-relaxed font-light">{description}</p>
      </div>

      {/* CTA */}
      {ctaHref.startsWith("http") || ctaHref.startsWith("mailto:") ? (
        <a
          href={ctaHref}
          className={`block text-center text-[13px] font-light tracking-wider py-3 rounded-xl border transition-all duration-500 ${
            featured
              ? "border-white/30 text-white bg-white/[0.07] hover:bg-white/[0.14]"
              : "border-white/10 text-white/70 bg-transparent hover:bg-white/[0.06] hover:text-white"
          }`}
        >
          {ctaText}
        </a>
      ) : (
        <Link
          to={ctaHref}
          className={`block text-center text-[13px] font-light tracking-wider py-3 rounded-xl border transition-all duration-500 ${
            featured
              ? "border-white/30 text-white bg-white/[0.07] hover:bg-white/[0.14]"
              : "border-white/10 text-white/70 bg-transparent hover:bg-white/[0.06] hover:text-white"
          }`}
        >
          {ctaText}
        </Link>
      )}

      {/* Divider */}
      <div className="border-t border-white/8" />

      {/* Features */}
      <div className="flex flex-col gap-3">
        <p className="text-white/25 text-[10px] tracking-[0.28em] uppercase font-light mb-1">What's Included</p>
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <img src={checkIconUrl} alt="" className="w-3 h-3 object-contain flex-shrink-0 opacity-80" />
            <span className="text-white/55 text-[13px] font-light">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
