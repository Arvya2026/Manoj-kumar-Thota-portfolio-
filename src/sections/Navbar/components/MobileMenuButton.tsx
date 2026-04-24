type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

export const MobileMenuButton = ({ isOpen, onToggle }: Props) => {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle menu"
      className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] group"
    >
      <span
        className={`block h-[1.5px] bg-white transition-all duration-300 ${
          isOpen ? "w-6 rotate-45 translate-y-[6.5px]" : "w-6"
        }`}
      />
      <span
        className={`block h-[1.5px] bg-white transition-all duration-300 ${
          isOpen ? "opacity-0 w-0" : "w-4"
        }`}
      />
      <span
        className={`block h-[1.5px] bg-white transition-all duration-300 ${
          isOpen ? "w-6 -rotate-45 -translate-y-[6.5px]" : "w-6"
        }`}
      />
    </button>
  );
};
