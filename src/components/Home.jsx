import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTooth } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-20">
        {/* Top Navigation */}
        <nav className="flex justify-end mb-16"> {/* Changed mb-8 to mb-16 for more space */}
          {!isMobile && (
            <div className="flex items-center gap-4 mt-4"> {/* Added mt-4 for top margin */}
              <Link
                to="/contact"
                className="px-5 py-2 border-2 border-[#3a3a3a] rounded-full text-sm hover:bg-[#3a3a3a] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Dental Emergency
              </Link>
              <div className="w-10 h-10 bg-[#3a3a3a] text-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#3a3a3a] border-2 border-[#3a3a3a] transition-all duration-300">
                <FaTooth />
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full md:w-1/2 space-y-6 flex flex-col items-center md:items-start"
          >
            <motion.p className="text-lg text-[#3a3a3a] font-medium text-center md:text-left">
             Bhopal's Premier Dental Clinic
            </motion.p>

            <div className="flex justify-center md:justify-start mb-4">
              <img 
                src="../assets/logo.png" 
                alt="Titanium Smiles Logo" 
                className="h-20 w-auto filter grayscale object-contain"
              />
            </div>

            <motion.h1
              className={`font-bold ${
                isMobile ? "text-[2rem]" : "text-[4rem]"
              } leading-[1.2] tracking-tight text-center md:text-left`}
            >
              <span className="bg-gradient-to-r from-[#1e1b1e] via-[#3a3a3a] to-[#666] bg-clip-text text-transparent inline-block">
                Titanium Smiles
              </span>
              <br className={isMobile ? "block" : "hidden"} />
              <span className="bg-gradient-to-r from-[#1e1b1e] via-[#3a3a3a] to-[#666] bg-clip-text text-transparent inline-block">
                Dental Care
              </span>
            </motion.h1>

            <motion.div>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 rounded-full text-white bg-gradient-to-r from-[#1e1b1e] to-[#3a3a3a] hover:from-[#3a3a3a] hover:to-[#1e1b1e] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Your Appointment
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full md:w-1/2 mt-8 md:mt-0"
          >
            <img
              src="./assets/landing.png"
              alt="Dental care visualization"
              className="w-full h-auto max-h-[90vh] object-contain drop-shadow-[0_0_30px_rgba(58,58,58,0.3)] grayscale  transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
