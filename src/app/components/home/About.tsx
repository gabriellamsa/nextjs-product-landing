import Image from "next/image";
import { FaCheck } from "react-icons/fa";

type Feature = {
  text: string;
};

type Props = {
  imageOrder: string;
  textOrder: string;
  title: string;
  linkText: string;
  features: Feature[];
  imageSrc: string;
};

export const About = ({
  imageOrder,
  textOrder,
  title,
  linkText,
  features,
  imageSrc,
}: Props) => {
  const isPrimaryImage = imageSrc === "/images/h1.png";

  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        <div className={`${textOrder}`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            {title}
          </h1>

          <div className="mt-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center mb-6 space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-pink-500 text-white">
                  <FaCheck />
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {feature.text}
                </p>
              </div>
            ))}
            <p className="font-semibold text-pink-400 cursor-pointer hover:underline w-fit">
              {linkText}
            </p>
          </div>
        </div>

        <div
          className={`${imageOrder} ${
            isPrimaryImage ? "block" : "hidden lg:block"
          }`}
        >
          <Image
            src="/images/h1.png"
            alt="about image"
            width={780}
            height={780}
          />
        </div>
      </div>
    </div>
  );
};
