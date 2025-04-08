import { FaDribbble, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-950">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="text-white font-bold text-3xl">LOGO</div>
          <p className="mt-5 font-semibold text-gray-300 text-sm">
            I love cheese, especially everyone loves cheese triangles. Cheesy
            feet pepper jack cheese and wine cheeseburger hard cheese cheese and
            wine cheeseburger roquefort.
          </p>

          <div className="flex items-center text-white space-x-4 mt-6">
            <div className="w-8 h-8 bg-blue-700 flex items-center justify-center flex-col rounded-full">
              <FaFacebook />
            </div>
            <div className="w-8 h-8 bg-sky-500 flex items-center justify-center flex-col rounded-full">
              <FaXTwitter />
            </div>
            <div className="w-8 h-8 bg-red-500 flex items-center justify-center flex-col rounded-full">
              <FaYoutube />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-lg text-white font-bold">Company</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            About Us
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Services
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Our Costumers
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Blog
          </p>
        </div>

        <div className="space-y-5">
          <h1 className="text-lg text-white font-bold">Support</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Legal Information
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Terms & Conditions
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Privacy Police
          </p>
        </div>

        <div>
          <h1 className="text-lg text-white font-bold">Get In Touch</h1>
          <div className="mt-6">
            <h1 className="text-sm text-white">Phone Number:</h1>
            <h1 className="text-base font-semibold text-white">+1234567890</h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-white">Address:</h1>
            <h1 className="text-base font-semibold text-white">
              123 Anywhere St.
            </h1>
            <h1 className="text-base font-semibold text-white">Any City</h1>
            <h1 className="text-base font-semibold text-white">ST 12345</h1>
          </div>
        </div>
      </div>

      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col items-center text-gray-600 text-sm text-center gap-2">
        <p>
          &copy; {new Date().getFullYear()} Gabriella Andrade. All rights
          reserved.
        </p>
        <p>Built with ❤️ using React & Tailwind CSS</p>
      </div>
    </div>
  );
};
