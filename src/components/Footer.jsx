import React from 'react';

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

        {/* Right Side - Booking Form */}
        <div className="w-full md:w-[55%] flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-bold text-[#1e1b1e]">Book Online</h1>
            <p className="text-sm text-gray-700 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vitae.
            </p>
          </div>

          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 font-semibold text-sm">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a3a3a]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-semibold text-sm">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a3a3a]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label htmlFor="date" className="mb-1 font-semibold text-sm">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a3a3a]"
                />
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="time" className="mb-1 font-semibold text-sm">Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a3a3a]"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 font-semibold text-sm">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a3a3a]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#1e1b1e] text-white font-medium rounded-md hover:bg-transparent hover:text-[#1e1b1e] border-2 border-transparent hover:border-[#1e1b1e] transition-all duration-300"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
