import React from "react";

const ContactUsPage = () => {
  return (
    <div className="pt-24 pb-16 px-6 md:px-20 bg-[#f6fafa] text-[#1e1b1e] min-h-screen">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Get In Touch With Us</h1>
        <p className="text-[#3a3a3a] max-w-2xl mx-auto">
          Have questions, concerns, or need to book an appointment? We're here to help you smile brighter every day.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#afc9c8]"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#afc9c8]"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#afc9c8]"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3a3a3a] text-white px-6 py-2 rounded-md hover:bg-transparent hover:text-[#3a3a3a] border-2 border-[#3a3a3a] transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center bg-[#afc9c8] p-8 rounded-xl shadow-md text-white space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Clinic Address</h3>
            <p>123 Dental Street, Sector 4<br />New Delhi, India - 110001</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>+91 9876543210</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>support@dentopoint.in</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Clinic Hours</h3>
            <p>Mon - Sat: 9:00 AM – 6:00 PM<br />Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
