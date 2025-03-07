import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Flavors from "./pages/Flavors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import FlavorSection from "./components/FlavorSection";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flavor-section" element={<FlavorSection />} />
          <Route path="/flavors" element={<Flavors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
