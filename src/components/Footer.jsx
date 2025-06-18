import React from 'react';
import Form from './Form';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
const mapLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.9511739550746!2d77.437421!3d23.212365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEyJzQ0LjUiTiA3N8KwMjYnMTQuNyJF!5e0!3m2!1sen!2sin!4v1718700000000';

  return (
    <footer className="w-full bg-gradient-to-b from-[#a7aaca] to-[#a7aaca] py-10 px-0 md:px-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Side - Map */}
          <div className="w-full lg:w-[40%]">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us Here</h2>
            <div className="overflow-hidden h-[400px] lg:h-[500px] md:shadow-xl md:rounded-2xl">
              <iframe
                src={mapLink}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full md:rounded-2xl transition-transform duration-300 hover:scale-105"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-[55%]">
            <Form />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;