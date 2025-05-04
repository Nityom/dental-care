import React from "react";
import Form from "../components/Form"; // adjust path as needed


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
        {/* Reusable Form Component */}
        <div className="bg-white p-8 rounded-2xl shadow-md flex items-center justify-center">
          <div className="w-full">
            <Form />
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-[#afc9c8] p-10 rounded-2xl shadow-md text-white flex flex-col justify-center space-y-6">
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
