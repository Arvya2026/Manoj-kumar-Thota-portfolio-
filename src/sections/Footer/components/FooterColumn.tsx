import { Link } from "react-router-dom";

export type FooterColumnProps = {
  title: string;
  links: { href: string; label: string }[];
  className?: string;
};

const isExternal = (href: string) =>
  href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

export const FooterColumn = ({ title, links, className = "" }: FooterColumnProps) => {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <p className="text-black text-base font-normal font-neutralsans tracking-wide">{title}</p>
      <div className="flex flex-col gap-2">
        {links.map((link, i) =>
          isExternal(link.href) ? (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-black/50 text-[15px] font-light hover:text-black transition-colors duration-200 leading-relaxed"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={i}
              to={link.href}
              className="text-black/50 text-[15px] font-light hover:text-black transition-colors duration-200 leading-relaxed"
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
};
