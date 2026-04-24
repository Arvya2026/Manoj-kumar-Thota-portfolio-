import { useRevealStagger } from "@/hooks/useScrollAnimation";

type Props = {
  text: string;
  step?: number;
  delay?: number;
  className?: string;
};

/**
 * Splits a string into words and reveals each word on scroll with a
 * blurred, staggered fade-in. Render inside an <h1>/<h2>/<p> or any styled
 * parent — this component is a transparent inline span and inherits styling.
 */
export const SplitText = ({ text, step = 45, delay = 0, className }: Props) => {
  const ref = useRevealStagger<HTMLSpanElement>(step, delay);
  const words = text.split(/\s+/).filter(Boolean);
  return (
    <span ref={ref} className={className} style={{ display: "inline" }}>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          data-stagger
          className="reveal-word"
          style={{
            marginRight: i < words.length - 1 ? "0.28em" : undefined,
          }}
        >
          {w}
        </span>
      ))}
    </span>
  );
};
