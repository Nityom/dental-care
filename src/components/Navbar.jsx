import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg border-b border-white/20 text-[#1e1b1e] z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1e1b1e] hover:opacity-80 transition-all duration-300">
          Titanium <span className="bg-gradient-to-r from-[#3a3a3a] to-[#666] bg-clip-text text-transparent">Smiles</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className="relative hover:text-[#3a3a3a] transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#3a3a3a] after:left-0 after:-bottom-2 after:transition-all hover:after:w-full">Home</Link>
          <Link to="/about" className="relative hover:text-[#3a3a3a] transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#3a3a3a] after:left-0 after:-bottom-2 after:transition-all hover:after:w-full">About Us</Link>
          <Link to="/services" className="relative hover:text-[#3a3a3a] transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#3a3a3a] after:left-0 after:-bottom-2 after:transition-all hover:after:w-full">Services</Link>
          <Link to="/contact" className="relative hover:text-[#3a3a3a] transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#3a3a3a] after:left-0 after:-bottom-2 after:transition-all hover:after:w-full">Contact Us</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] z-50 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-6 h-[2px] bg-[#1e1b1e] rounded-full transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-[#1e1b1e] rounded-full transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-[#1e1b1e] rounded-full transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg px-6 pb-6 pt-2 space-y-4 text-sm font-medium flex flex-col z-50 fixed top-0 left-0 w-full h-[100vh] transition-all duration-500 ease-in-out">
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-[#3a3a3a] text-white hover:bg-[#666] transition-all duration-300"
            aria-label="Close Menu"
          >
            ×
          </button>

          <div className="flex flex-col h-full justify-center items-center space-y-8">
            <Link to="/" onClick={closeMenu} className="text-4xl font-bold text-[#1e1b1e] hover:text-[#3a3a3a] transition-all duration-300 hover:-translate-y-1">Home</Link>
            <Link to="/services" onClick={closeMenu} className="text-4xl font-bold text-[#1e1b1e] hover:text-[#3a3a3a] transition-all duration-300 hover:-translate-y-1">Services</Link>
            <Link to="/about" onClick={closeMenu} className="text-4xl font-bold text-[#1e1b1e] hover:text-[#3a3a3a] transition-all duration-300 hover:-translate-y-1">About Us</Link>
            <Link to="/contact" onClick={closeMenu} className="text-4xl font-bold px-8 py-2 rounded-full bg-gradient-to-r from-[#3a3a3a] to-[#666] text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;