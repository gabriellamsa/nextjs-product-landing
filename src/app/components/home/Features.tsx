"use client";
import { motion } from "framer-motion";
import { FaFingerprint } from "react-icons/fa";
import { HiOutlineChat } from "react-icons/hi";
import { IoAppsOutline, IoWifiOutline } from "react-icons/io5";
import { MdNotifications, MdOutlineTouchApp } from "react-icons/md";

const featureData = [
  {
    title: "Touch to buy",
    description:
      "Cheese slices edam camembert de normandie who moved my cheese cream cheese chalk and cheese cheese triangles monterey jack.",
    icon: <MdOutlineTouchApp className="w-12 h-12 text-pink-500 mx-auto" />,
  },
  {
    title: "Secure Data",
    description:
      "Cheese slices edam camembert de normandie who moved my cheese cream cheese chalk and cheese cheese triangles monterey jack.",
    icon: <FaFingerprint className="w-12 h-12 text-pink-500 mx-auto" />,
  },
  {
    title: "Instant Chat",
    description:
      "Cheese slices edam camembert de normandie who moved my cheese cream cheese chalk and cheese cheese triangles monterey jack.",
    icon: <HiOutlineChat className="w-12 h-12 text-pink-500 mx-auto" />,
  },
  {
    title: "Live Notification",
    description:
      "Cheese slices edam camembert de normandie who moved my cheese cream cheese chalk and cheese cheese triangles monterey jack.",
    icon: <MdNotifications className="w-12 h-12 text-pink-500 mx-auto" />,
  },
  {
    title: "Wifi Support",
    description:
      "Cheese slices edam camembert de normandie who moved my cheese cream cheese chalk and cheese cheese triangles monterey jack.",
    icon: <IoWifiOutline className="w-12 h-12 text-pink-500 mx-auto" />,
  },
  {
    title: "App Watch",
    description:
      "Cheese slices edam camembert de normandie who moved my cheese cream cheese chalk and cheese cheese triangles monterey jack.",
    icon: <IoAppsOutline className="w-12 h-12 text-pink-500 mx-auto" />,
  },
];

export const Features = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {featureData.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center mx-auto"
          >
            <div className="mx-auto text-center">{feature.icon}</div>
            <h1 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              {feature.title}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
