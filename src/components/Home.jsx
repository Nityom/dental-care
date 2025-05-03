import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaTooth } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBoxRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Toggle menu function
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  // Close menu function
  const closeMenu = () => setMenuOpen(false);
  
  useEffect(() => {
    // Handle menu animation
    if (menuBoxRef.current) {
      menuBoxRef.current.style.transform = menuOpen
        ? "translate(0, 0)"
        : "translate(-100%, 0)";
    }
    
    // Check if mobile on initial load
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkIsMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [menuOpen]);
  
  return (
    <section id="home" className="w-full overflow-x-hidden">
      {/* Main container with consistent 2% top margin */}
      <div className="w-full min-h-[95vh] h-full mt-[2%] relative overflow-hidden sm:rounded-[30px]">
        {/* NAVIGATION */}
        <nav className="w-full h-[60px] flex items-center justify-end px-4 sm:px-6 md:px-[50px] z-[99] relative">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="px-3 py-1 sm:px-4 sm:py-2 mt-6 border-2 border-[#3a3a3a] rounded-full text-xs sm:text-sm md:text-[18px] hover:bg-[#3a3a3a] hover:text-white transition-all duration-200 cursor-pointer whitespace-nowrap">
              Dental Emergency
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-[50px] mt-6 md:h-[50px] bg-[#3a3a3a] text-white rounded-full flex items-center justify-center text-lg sm:text-xl md:text-[25px] border-2 border-[#3a3a3a] hover:bg-transparent hover:text-[#3a3a3a] transition-all duration-200 cursor-pointer">
              <FaTooth />
            </div>
          </div>
        </nav>
        
        {/* HERO CONTENT CONTAINER */}
        <div className="w-full flex flex-col md:flex-row">
          {/* HERO TEXT */}
          <div className="w-full md:w-1/2 min-h-[40vh] md:min-h-[60vh] text-[#1e1b1e] px-4 sm:px-6 md:px-[50px] py-[20px] sm:py-[30px] md:py-[40px] flex flex-col justify-center items-start relative z-10">
            {/* Tagline */}
            <p className="text-sm sm:text-base md:text-lg text-[#333] mb-2 font-medium tracking-wide">
              New Delhi's Best Dental Clinic
            </p>
            
            {/* Heading for Mobile */}
            {isMobile ? (
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-extrabold text-[20vw] sm:text-[18vw] leading-none tracking-tight text-center w-full"
              >
                <span className="block">Tarunam Dental</span>
                <span className="block">Care</span>
              </motion.h1>
            ) : (
              /* Heading for Desktop */
              <h1 className="font-bold text-[clamp(3rem,10vw,6rem)] leading-none tracking-tight text-left">
                <span className="block">Tarunam Dental</span>
                <span className="block">Care</span>
              </h1>
            )}
            
            {/* CTA Button */}
            <button className="mt-8 sm:mt-6 px-5 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full text-white bg-[#1e1b1e] hover:bg-transparent hover:text-[#1e1b1e] border-2 border-transparent hover:border-[#1e1b1e] transition-all duration-300 text-xs sm:text-sm md:text-base">
              Book appointment
            </button>
          </div>
          
          {/* MOBILE IMAGE */}
          <div className="md:hidden w-full flex justify-center items-end mt-4">
            <img
              src="./assets/landing.png"
              alt="Dental care"
              className="h-[50vh] object-contain drop-shadow-[0_0_20px_#3a3a3a] grayscale"
            />
          </div>
        </div>
        
        {/* DESKTOP IMAGE SECTION */}
        <div className="absolute inset-0 flex justify-center items-end pointer-events-none">
          <img
            src="./assets/landing.png"
            alt="Dental care"
            className="hidden md:block h-[70%] object-contain drop-shadow-[0_0_40px_#3a3a3a] grayscale"
          />
        </div>
      </div>
      
      {/* MOBILE MENU (if needed) */}
      {menuOpen && (
        <div 
          ref={menuBoxRef}
          className="fixed top-0 left-0 w-full h-full bg-white z-[100] p-8"
        >
          <button onClick={closeMenu} className="absolute top-8 right-8">
            Close
          </button>
          <ul className="flex flex-col gap-6 mt-16">
            <li className="text-xl font-medium">Home</li>
            <li className="text-xl font-medium">Services</li>
            <li className="text-xl font-medium">About</li>
            <li className="text-xl font-medium">Contact</li>
          </ul>
        </div>
      )}
    </section>
  );
}
