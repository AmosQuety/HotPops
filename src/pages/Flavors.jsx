// import React from "react";

// function Flavors() {
//   return <div>Flavors</div>;
// }

// export default Flavors;

// src/data/flavors.js (or you can define this directly in Home.jsx)
const flavorsData = [
  {
    id: 1,
    name: "Classic Butter",
    description: "The traditional favorite, buttery and delicious.",
    image: "/images/butter-popcorn.jpg", // Make sure you have this image!
  },
  {
    id: 2,
    name: "Spicy Chili",
    description:
      "A fiery kick for your taste buds, with a blend of chili spices.",
    image: "/images/chili-popcorn.jpg", // Make sure you have this image!
  },
  {
    id: 3,
    name: "Sweet Caramel",
    description:
      "A sweet and crunchy delight, perfect for satisfying your sweet tooth.",
    image: "/images/caramel-popcorn.jpg", // Make sure you have this image!
  },
  {
    id: 4,
    name: "Zesty Lemon Pepper",
    description: "A tangy and savory flavor combination that is truly unique.",
    image: "/images/lemon-pepper-popcorn.jpg",
  },
  // Add more flavors here...
];

export default flavorsData;
