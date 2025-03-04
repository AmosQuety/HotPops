import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-amber-300 py-20 text-black">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-5xl font-bold mb-4">
          Bursting with Flavor
        </h1>
        <p className="text-lg mb-8">
          Redefining the popcorn experience with unique and delicious flavors.
        </p>
      </div>
    </section>
  );
};

export default Hero;
