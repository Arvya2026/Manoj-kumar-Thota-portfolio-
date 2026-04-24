import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";

export const Layout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <div
      className="bg-[#0a0a0a] text-white overflow-x-hidden min-h-screen"
      style={{ fontFamily: "Neutralsans, ui-sans-serif, system-ui, sans-serif" }}
    >
      {!isHome && <ScrollProgressBar />}
      <Navbar />
      <main key={pathname} className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
