import { navLinks } from "@/app/constant/constant";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

export const Navbar = ({ openNav }: Props) => {
  return (
    <div className="transition-all duration-200 h-[12vh] z-[100] fixed w-full bg-pink-400">
      <div className="flex items-center h-full sm:w-[80%] w-[90%] mx-auto relative">
        {/* LOGO */}
        <div className="absolute left-0 text-white font-bold text-2xl">
          LOGO
        </div>

        <div className="hidden lg:flex items-center justify-center w-full">
          <div className="flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                href={link.url}
                key={link.id}
                className="text-white hover:text-gray-600 font-semibold transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute right-0 flex items-center space-x-4">
          <a
            href="#_"
            className="inline-flex items-center justify-center px-5 py-2.5 text-base font-medium text-center text-white border border-emerald-500 rounded-lg shadow-sm cursor-pointer hover:text-gray-600 bg-gradient-to-br from-lime-500 via-emerald-500 to-emerald-500 whitespace-nowrap"
          >
            <FaShoppingBag className="mr-3 w-5 h-5" />
            <span className="relative">Buy Now</span>
          </a>

          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};
