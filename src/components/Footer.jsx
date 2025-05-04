import React from 'react';
import Form from './Form'; // adjust the path based on your folder structure

const Footer = () => {
  const mapLink =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14326.664221027982!2d86.2772433!3d26.2500207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee798a5eb8fb8d%3A0xd4a13b8246675fd3!2sJANTA%20COLLEGE%2C%20Jhanjharpur%2C%20Bihar%20847404!5e0!3m2!1sen!2sin!4v1700000000000';

  return (
    <footer className="w-full bg-[#afc9c8] py-12 px-6 md:px-16 mt-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side - Map */}
        <div className="w-full md:w-[40%] rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
          <iframe
            src={mapLink}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-2xl shadow-md transition-transform duration-200 hover:scale-105"
          ></iframe>
        </div>

        {/* Right Side - Form */}
        <Form />
      </div>
    </footer>
  );
};

export default Footer;
