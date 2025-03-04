import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="logo1.png" alt="HotPops Logo" className="h-10 mr-2" />
          <span className="text-hotpops-primary font-display text-2xl font-bold">
            HotPops
          </span>
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="space-x-6 hidden md:flex">
          <Link
            to="/"
            className="text-hotpops-gray hover:text-hotpops-primary transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/flavors"
            className="text-hotpops-gray hover:text-hotpops-primary transition duration-300"
          >
            Flavors
          </Link>
          <Link
            to="/about"
            className="text-hotpops-gray hover:text-hotpops-primary transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-hotpops-gray hover:text-hotpops-primary transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu (Hamburger Icon) */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {" "}
          {/* Add onClick handler */}
          <svg
            className="w-6 h-6 text-hotpops-gray hover:text-hotpops-primary transition duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu (Links) */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {" "}
          {/* Toggle visibility based on state */}
          <Link
            to="/"
            className="block py-2 px-4 text-hotpops-gray hover:text-hotpops-primary transition duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/flavors"
            className="block py-2 px-4 text-hotpops-gray hover:text-hotpops-primary transition duration-300"
            onClick={toggleMenu}
          >
            Flavors
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 text-hotpops-gray hover:text-hotpops-primary transition duration-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 text-hotpops-gray hover:text-hotpops-primary transition duration-300"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
