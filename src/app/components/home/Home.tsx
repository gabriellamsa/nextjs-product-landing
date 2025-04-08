import { About } from "./About";
import { Features } from "./Features";
import { Hero } from "./Hero";
import { Review } from "../reviews/Review";
import { Contact } from "./Contact";

export const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <About
        imageOrder="order-1 lg:order-2"
        textOrder="order-2 lg:order-1"
        title="Immersive Audio Experience"
        linkText="Learn more about sound tech"
        imageSrc="/images/h1.png"
        features={[
          { text: "Spatial Audio with Dynamic Head Tracking¹" },
          { text: "Lossless audio via USB-C or 3.5 mm audio cable²" },
          { text: "Up to 50 hours of Battery Life³" },
          { text: "Compatible with iOS and Android" },
        ]}
      />
      <About
        imageOrder="order-1"
        textOrder="order-2"
        title="Designed for Comfort and Style"
        linkText="See design options"
        imageSrc="/images/h1.jpg"
        features={[
          { text: "Ultralight material with comfort padding" },
          { text: "Ergonomic design fits all head shapes" },
          { text: "Modern aesthetic available in 5 colors" },
          { text: "Foldable and portable with carrying case" },
        ]}
      />
      <Review />
      <Contact />
    </div>
  );
};
