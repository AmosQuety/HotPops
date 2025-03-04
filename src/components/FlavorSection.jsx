import React from "react";

const FlavorSection = ({ flavors }) => {
  // Expect `flavors` as a prop
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display text-center text-hotpops-primary font-bold mb-8">
          Our Flavors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flavors.map((flavor) => (
            <div
              key={flavor.id}
              className="bg-white rounded-hotpops-radius-md shadow-hotpops-shadow-md p-4 hover:shadow-hotpops-shadow-lg transition duration-300 transform hover:scale-105"
            >
              <img
                src={flavor.image}
                alt={flavor.name}
                className="w-full h-48 object-cover rounded-hotpops-radius-md mb-2"
              />
              <h3 className="text-xl font-bold text-hotpops-secondary mb-2">
                {flavor.name}
              </h3>
              <p className="text-hotpops-gray leading-relaxed">
                {flavor.description}
              </p>
              <button className="mt-4 bg-hotpops-primary hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-hotpops-radius-md transition duration-300 block mx-auto">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;
