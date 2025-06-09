import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTooth, FaStethoscope, FaUserMd } from 'react-icons/fa';

const SecondPage = () => {
  const features = [
    { icon: <FaTooth />, title: "Modern Equipment", desc: "State-of-the-art dental technology" },
    { icon: <FaStethoscope />, title: "Expert Care", desc: "Experienced dental professionals" },
    { icon: <FaUserMd />, title: "Personal Approach", desc: "Customized treatment plans" },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 px-4 sm:px-8 md:px-12 overflow-hidden">
          {/* Left Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[55%] flex flex-col justify-evenly items-start text-[#3a3a3a] space-y-8"
          >
            {/* Small Header */}
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-sm font-medium px-4 py-2 bg-gray-100 rounded-full text-[#3a3a3a]"
            >
              Why Choose Us
            </motion.span>

            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[32px] sm:text-[45px] md:text-[65px] font-bold leading-[1.1] bg-gradient-to-r from-[#1e1b1e] to-[#3a3a3a] bg-clip-text text-transparent"
            >
              Crafting Healthy Smiles One Service at a Time
            </motion.h1>

            {/* Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[16px] leading-relaxed text-gray-600 max-w-[95%] md:max-w-[85%]"
            >
              At Titanium Dental Care, we believe in providing exceptional dental care with a personal touch. 
              Our team of experienced professionals uses the latest technology to ensure your comfort and deliver 
              outstanding results for all your dental needs.
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-lg  transition-all duration-300"
                >
                  <span className="text-3xl text-[#3a3a3a] mb-3">{feature.icon}</span>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <Link
                to="/about"
                className="px-8 py-4 rounded-full text-white bg-gradient-to-r from-[#1e1b1e] to-[#3a3a3a]  transition-all duration-300 inline-flex items-center gap-2"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[45%] h-[400px] md:h-[600px]"
          >
            <div className="w-full h-full rounded-[40px] overflow-hidden shadow-2xl relative group">
              <img
                src="./assets/medical.png"
                alt="Medical illustration"
                className="w-full h-full object-cover transition-transform duration-700 "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
