import { Link } from "react-router-dom";

export const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="text-white font-neutralsans font-bold text-base md:text-lg lg:text-xl tracking-wide hover:opacity-75 transition-opacity duration-500 whitespace-nowrap"
    >
      Manoj Kumar Thota
    </Link>
  );
};
