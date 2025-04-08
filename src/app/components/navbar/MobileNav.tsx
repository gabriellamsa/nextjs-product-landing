import { navLinks } from "@/app/constant/constant";
import { smoothScroll } from "@/app/components/helper/smoothScroll";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

export const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav
    ? "translate-x-0 opacity-100 pointer-events-auto"
    : "translate-x-[100%] opacity-0 pointer-events-none";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    smoothScroll(e);
    closeNav();
  };

  return (
    <div
      className={`fixed inset-0 z-[1050] transition-opacity duration-500 ${
        showNav ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 ${
          showNav ? "opacity-70" : "opacity-0"
        }`}
        onClick={closeNav}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-pink-400 transform transition-transform duration-500 ${navOpen} flex flex-col justify-center space-y-6 px-6`}
      >
        {navLinks.map((link) => (
          <a
            href={link.url}
            key={link.id}
            onClick={handleLinkClick}
            className="text-white w-fit text-xl border-b-[1.5px] border-white sm:text-[30px]"
          >
            {link.label}
          </a>
        ))}

        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer"
        />
      </div>
    </div>
  );
};
