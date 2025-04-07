import { Features } from "./Features";
import { Hero } from "./Hero";

export const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
    </div>
  );
};
