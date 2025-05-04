import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#a8d5ba77] backdrop-blur-md border-b border-[#afc9c8] text-[#1e1b1e] z-50 shadow-md sm:bg-transparent sm:border-none sm:backdrop-blur-md sm:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl sm:text-2xl font-bold tracking-wide text-[#1e1b1e]">
          DENTO <span className="text-[#3a3a3a]">POINT</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6 sm:space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-[#3a3a3a] transition">Home</Link>
          <Link to="/services" className="hover:text-[#3a3a3a] transition">Services</Link>
          <Link to="/about" className="hover:text-[#3a3a3a] transition">About Us</Link>
          <Link to="/contact" className="hover:text-[#3a3a3a] transition">Contact Us</Link>
        </nav>

        {/* Mobile Toggle (Hamburger Icon) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] z-50 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-6 h-[2px] bg-[#1e1b1e] rounded transition-transform duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-[#1e1b1e] rounded transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-[#1e1b1e] rounded transition-transform duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu - Full Screen */}
      {mobileMenuOpen && (
       <div className="md:hidden bg-[#a8d5ba] px-6 pb-6 pt-2 space-y-4 text-sm font-medium flex flex-col z-50 absolute top-0 left-0 w-full h-[100vh] transition-all duration-500 ease-in-out opacity-100">

          {/* Close Button (X) */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-3xl font-bold text-[#1e1b1e] hover:text-[#3a3a3a] transition-all duration-300 ease-in-out"
            aria-label="Close Menu"
          >
            X
          </button>

          {/* Mobile Menu Links */}
          <div className="flex flex-col h-full justify-center items-center">
            <Link to="/" onClick={closeMenu} className="hover:text-[#3a3a3a] transition text-4xl font-bold py-4 text-[#1e1b1e]">Home</Link>
            <Link to="/services" onClick={closeMenu} className="hover:text-[#3a3a3a] transition text-4xl font-bold py-4 text-[#1e1b1e]">Services</Link>
            <Link to="/about" onClick={closeMenu} className="hover:text-[#3a3a3a] transition text-4xl font-bold py-4 text-[#1e1b1e]">About Us</Link>
            <Link to="/contact" onClick={closeMenu} className="hover:text-[#3a3a3a] transition text-4xl font-bold py-4 text-[#1e1b1e]">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
