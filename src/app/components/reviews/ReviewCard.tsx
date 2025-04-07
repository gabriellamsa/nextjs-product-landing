import Image from "next/image";
import { BsQuote } from "react-icons/bs";

type Props = {
  image: string;
  name: string;
  role: string;
};

export const ReviewCard = ({ image, name, role }: Props) => {
  return (
    <div className="text-center">
      <BsQuote className="w-14 h-14 text-pink-400" />
      <p className="text-center text-gray-800 dark:text-gray-200 text-sm">
        I love cheese, especially say cheese bavarian bergkase. Danish fontina
        macaroni cheese ricotta monterey jack the big cheese cheese and biscuits
        cheddar cheddar. Ricotta cheese strings bavarian bergkase chalk and
        cheese chalk and cheese danish fontina jarlsberg roquefort. Everyone
        loves lancashire cheesecake melted cheese camembert de normandie
        lancashire mascarpone.
      </p>
      <Image
        src={image}
        alt="image"
        width={100}
        height={100}
        className="object-center mx-auto rounded-full"
      />
      <h1 className="text-lg font-bold text-center mt-4">{name}</h1>
      <h1 className="text-center text-gray-500">{role}</h1>
    </div>
  );
};
