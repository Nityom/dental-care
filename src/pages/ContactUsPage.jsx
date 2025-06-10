import React from "react";
import Form from "../components/Form";

const ContactUsPage = () => {
  return (
    <div className="pt-24 pb-16 px-0 md:px-20 bg-[#f6fafa] text-[#1e1b1e] min-h-screen">
      <section className="text-center mb-12 px-4 md:px-0">
        <h1 className="text-4xl font-bold mb-3">Get In Touch With Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions about our orthodontic treatments or want to schedule a consultation? We're here to help you achieve your perfect smile.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-0 md:gap-10">
        {/* Reusable Form Component */}
        <div className="bg-white p-4 md:p-8 md:rounded-2xl md:shadow-md flex items-center justify-center">
          <div className="w-full">
            <Form />
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-[#afc9c8] p-6 md:p-10 md:rounded-2xl md:shadow-md flex flex-col justify-center space-y-6 mt-0">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Clinic Address</h3>
            <p className="text-gray-600">
              E3/119, First Floor<br />
              Arera Colony, Main Road No. 3<br />
              Near Gastrocare Hospital<br />
              Bhopal, Madhya Pradesh - 462016
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Contact Numbers</h3>
            <p className="text-gray-600">+91 9917609177<br />+91 7771970889</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Email</h3>
            <p className="text-gray-600">info@titaniumsmiles.in</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Clinic Hours</h3>
            <p className="text-gray-600">Monday - Sunday: 10:00 AM – 8:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
