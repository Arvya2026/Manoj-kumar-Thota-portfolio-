import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopNav } from "@/sections/Navbar/components/DesktopNav";
import { MobileMenuButton } from "@/sections/Navbar/components/MobileMenuButton";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const mobileLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Work", to: "/work" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
          scrolled ? "py-3 bg-black/80 backdrop-blur-xl" : "py-6 bg-transparent"
        }`}
      >
        <div className="w-full px-6 md:px-14 flex items-center justify-between">
          <NavbarLogo />
          <DesktopNav />
          <MobileMenuButton isOpen={mobileOpen} onToggle={() => setMobileOpen(!mobileOpen)} />
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[998] bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {mobileLinks.map((item, i) => (
          <Link
            key={item.label}
            to={item.to}
            className="text-white text-3xl font-light tracking-wide hover:opacity-60 transition-opacity"
            style={{ transitionDelay: `${i * 60}ms` }}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};
