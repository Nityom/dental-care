import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaStar } from 'react-icons/fa';
import { MdAccessTime, MdLocationOn } from 'react-icons/md';

const WebsiteFooter = () => {
  return (
    <footer className="bg-[#1e1b1e] text-white px-6 py-10 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">

        {/* Left Side: Brand and Description */}
        <div className="md:col-span-2">
          <div className="flex flex-col items-center md:items-start gap-4 mb-6">

            <img 
              src="../assets/logo.png" 
              alt="Titanium Smiles Logo" 
              className="h-20 w-auto filter grayscale object-contain"
            />

            <h1 className="text-2xl font-bold text-[#afc9c8]">Titanium Smiles</h1>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Titanium Smiles is a top-rated local practice specializing in cosmetic, preventative, and restorative dentistry. 
            Our expert team is committed to providing personalized care, cutting-edge treatments, and a comfortable 
            experience for every patient.
          </p>

          <div className="mt-6">
            <p className="font-semibold mb-2">FOLLOW US ON</p>
            <div className="flex justify-center md:justify-start gap-4 text-xl text-white">
              <a href="https://www.instagram.com/titaniumsmiles?igsh=MWs0OHRkeWc2eDhkag==" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/share/1Z1C2trRr5/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Info */}
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="bg-white text-[#1e1b1e] p-3 rounded-lg">
              <FaPhoneAlt />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-300">Phone Numbers</p>
              <p className="text-white font-medium">+91 9917609177</p>
              <p className="text-white font-medium">+91 7771970889</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white text-[#1e1b1e] p-3 rounded-lg">
              <MdAccessTime />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-300">Open Hour</p>
              <p className="text-white font-medium">10:00 AM - 8:00 PM</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white text-[#1e1b1e] p-3 rounded-lg">
              <MdLocationOn />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-300">Clinic Address</p>
              <p className="text-white font-medium">
                E3/119, First Floor, Arera Colony, Main Road No.3, Near Gastrocare Hospital, Bhopal, M.P. 462016
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white text-[#1e1b1e] p-3 rounded-lg">
              <FaStar />
            </div>
            <div className="text-left">
              <a 
                href="https://search.google.com/local/writereview?placeid=ChIJwTICXIdDfDkR2vqV9g0mkZk"
                target="_blank"
                rel="noopener noreferrer"
               
              >
                <p className="text-sm text-gray-300">Write A Review</p>
                <p className="text-white font-medium">Share Your Experience</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="text-center mt-10 border-t border-gray-600 pt-4 text-sm text-gray-400">
        © 2025 Titanium Smiles. All Rights Reserved
      </div>
    </footer>
  );
};

export default WebsiteFooter;