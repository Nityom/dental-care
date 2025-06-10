import React from 'react';

const Form = () => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-[#1e1b1e] mb-1 text-center">Book Online</h1>
      <p className="text-sm text-gray-700 mb-6 text-center">
       Book your orthodontic visit online—fast, easy, and professional care.
      </p>

      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium text-sm">Name</label>
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
          <label htmlFor="email" className="mb-1 font-medium text-sm">Email</label>
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
            <label htmlFor="date" className="mb-1 font-medium text-sm">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a3a3a]"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="time" className="mb-1 font-medium text-sm">Time</label>
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
          <label htmlFor="message" className="mb-1 font-medium text-sm">Message</label>
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
  );
};

export default Form;
