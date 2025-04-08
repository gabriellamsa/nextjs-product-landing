import { FaPaperPlane } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold">
        Get In Touch
      </h1>
      <span className="block w-16 h-1 bg-pink-600 mx-auto mt-3"></span>
      <p className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-4">
        I love cheese, especially goat pepper jack. Macaroni cheese say cheese
        paneer.
      </p>
      <p className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200 mb-8">
        Cream cheese pecorino red leicester the big cheese cheddar.
      </p>

      <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full text-black bg-gray-200 dark:bg-gray-300 shadow-md outline-none px-6 py-3.5 rounded-md"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full text-black bg-gray-200 dark:bg-gray-300 shadow-md outline-none px-6 py-3.5 rounded-md"
          />
        </div>

        <div>
          <textarea
            placeholder="Your message here..."
            className="w-full h-40 text-black bg-gray-200 dark:bg-gray-300 shadow-md outline-none px-6 py-3.5 rounded-md"
          ></textarea>
        </div>
      </div>

      <button className="mt-8 flex items-center gap-2 bg-pink-400 text-white px-6 py-3 rounded-md shadow-md hover:bg-pink-800 transition mx-auto cursor-pointer">
        <FaPaperPlane size={18} />
        Send Message
      </button>
    </div>
  );
};
