import React from "react";

const AboutSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-display text-hotpops-primary font-bold mb-4">
            About HotPops
          </h2>
          <p className="text-hotpops-gray mb-4">
            HotPops exists to redefine the popcorn experience by offering a
            diverse, affordable, and ever-evolving range of unique and delicious
            flavors. We push the boundaries of what popcorn can be, bringing
            excitement and adventure to every bite.
          </p>
          <p className="text-hotpops-gray">
            Our mission is to become the leading popcorn brand in Uganda, known
            for freshness, great taste, and innovation. As HotPops grows, we aim
            to create opportunities, support local communities, and make a
            positive impact beyond just snacks.
          </p>
        </div>
        <div>
          <img
            src="popcorn.png"
            alt="HotPops Popcorn"
            className="rounded-hotpops-radius-md shadow-hotpops-shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
