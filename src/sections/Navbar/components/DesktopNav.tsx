import { NavLink } from "react-router-dom";

export const DesktopNav = () => {
  const links = [
    { label: "About", to: "/about" },
    { label: "Work", to: "/work" },
    { label: "Blog", to: "/blog" },
  ];

  return (
    <div className="hidden md:flex items-center gap-7 lg:gap-10 ml-auto pr-1 lg:pr-2">
      {links.map((item) => (
        <NavLink
          key={item.label}
          to={item.to}
          end
          className={({ isActive }) =>
            `text-sm font-light tracking-wider transition-colors duration-500 whitespace-nowrap ${
              isActive ? "text-white" : "text-white/70 hover:text-white"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
      <NavLink
        to="/contact"
        className="text-white text-sm font-light tracking-wider border border-white/25 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500 whitespace-nowrap"
      >
        Contact
      </NavLink>
    </div>
  );
};
