import { useReveal } from "@/hooks/useScrollAnimation";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  const descRef = useReveal(100) as React.RefObject<HTMLDivElement>;

  return (
    <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16">
      {/* Nav columns */}
      <div className="flex flex-wrap gap-12 md:gap-16">
        <FooterColumn
          title="Manoj"
          links={[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/work", label: "Work" },
            { href: "/blog", label: "Blog" },
            { href: "/contact", label: "Contact" },
          ]}
        />
        <FooterColumn
          title="Ventures"
          links={[
            { href: "https://venraag.com/", label: "VenRAAG (Enclaraa)" },
            { href: "https://arvya.in/", label: "Arvya Tech" },
          ]}
        />
        <FooterColumn
          title="Connect"
          links={[
            { href: "https://www.linkedin.com/in/manoj-kumar-thota-22123715b/", label: "LinkedIn" },
            { href: "mailto:info@venraag.com", label: "info@venraag.com" },
            { href: "mailto:info@arvya.in", label: "info@arvya.in" },
          ]}
        />
      </div>

      {/* Description */}
      <div ref={descRef} className="reveal max-w-[360px]">
        <p className="text-black text-xl md:text-2xl font-light leading-snug font-neutralsans_medium">
          AI tools for lawyers, finance teams and operations built from London &amp; Vijayawada. Made to be used, not just shown.
        </p>
      </div>
    </div>
  );
};
