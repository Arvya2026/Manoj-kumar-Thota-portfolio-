import { Link } from "react-router-dom";

export const CtaButton = () => {
  return (
    <Link
      to="/contact"
      className="group inline-flex items-center gap-4 bg-transparent border border-black/20 hover:border-black px-6 py-3 rounded-full transition-all"
    >
      <span className="text-black text-base font-light tracking-wide">Start a Conversation</span>
      <div className="relative flex items-center justify-center w-9 h-9 flex-shrink-0">
        <img
          src="https://c.animaapp.com/mobc47shBXEgtQ/assets/6904fa4a91e0229b9e9da94d_Main_Blue_Shape.svg"
          alt=""
          className="w-full h-full object-contain transition-transform duration-700 group-hover:rotate-[20deg]"
        />
        <img
          src="https://c.animaapp.com/mobc47shBXEgtQ/assets/6904fa4a91e0229b9e9da94e_Arrow_1_Gaige.svg"
          alt="Arrow"
          className="absolute w-4 h-4 object-contain"
        />
      </div>
    </Link>
  );
};
