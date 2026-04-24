import { useReveal } from "@/hooks/useScrollAnimation";

export type SectionHeaderProps = {
  title: string;
  containerClassName?: string;
  titleClassName?: string;
  light?: boolean;
};

export const SectionHeader = ({
  title,
  containerClassName = "",
  titleClassName = "",
  light = false,
}: SectionHeaderProps) => {
  const ref = useReveal(0) as React.RefObject<HTMLDivElement>;

  return (
    <div className={`mb-10 ${containerClassName}`}>
      <p
        ref={ref}
        className={`reveal text-[15px] font-light tracking-[0.18em] uppercase font-neutralsans ${
          light ? "text-white/50" : "text-black/50"
        } ${titleClassName}`}
      >
        {title}
      </p>
    </div>
  );
};
