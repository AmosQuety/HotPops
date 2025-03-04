import React from "react";
import Hero from "../components/Hero";
import FlavorSection from "../components/FlavorSection";
import AboutSection from "../components/AboutSection";
import ContactForm from "../components/ContactForm";
import About from "./About";
import flavorsData from "../data/FlavorData";

const Home = () => {
  return (
    <div>
      <Hero />
      <FlavorSection flavors={flavorsData} />
      <About />
      <AboutSection />
      <ContactForm />
    </div>
  );
};

export default Home;
