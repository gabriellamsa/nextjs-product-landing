"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative w-full h-screen flex justify-center flex-col bg-pink-400 bg_clip px-6 sm:px-0">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl text-white lg:text-5xl mt-6 mb-6 font-bold leading-[2.5rem] md:leading-[3.5rem]">
            Powerful sound. <br />
            Ultralight fit.
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-300">
            The Wireless Headphones offer high-quality sound with Spatial Audio,
            up to 50 hours of battery life, and a lightweight design...
          </p>

          <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#_"
              className="relative overflow-hidden px-10 py-3 text-white border border-emerald-500 rounded-lg shadow-sm cursor-pointer hover:text-gray-600 bg-gradient-to-br from-lime-500 via-emerald-500 to-emerald-500 whitespace-nowrap"
            >
              Buy Now
            </a>

            <a
              href="#_"
              className="relative overflow-hidden px-10 py-3 text-white border border-cyan-500 rounded-lg shadow-sm cursor-pointer hover:text-gray-600 bg-gradient-to-br from-cyan-500 via-indigo-500 to-indigo-500 whitespace-nowrap"
            >
              Explore More
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto hidden xl:block pl-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/images/hero.png"
            alt="headphone image"
            width={780}
            height={780}
          />
        </motion.div>
      </div>
    </div>
  );
};
