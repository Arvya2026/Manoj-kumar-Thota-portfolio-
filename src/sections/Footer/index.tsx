import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="bg-white overflow-hidden">
      <FooterBrand />
      <div className="max-w-[1440px] mx-auto px-6 md:px-14 pb-10">
        <div className="h-px bg-black/8 my-10" />
        <FooterLinks />
        <div className="h-px bg-black/8 mt-10 mb-8" />
        <FooterBottom />
      </div>
    </footer>
  );
};
