import React from "react";
import { FaTrophy } from "react-icons/fa";  // Importing the trophy icon
import { motion } from "framer-motion";  // Ensure this line is at the top

const AboutUsPage = () => {
  return (
    <div className="pt-24 pb-20 bg-[#ffffff] text-[#1e1b1e] px-6 md:px-20">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Your Trusted Dental Care Partner</h1>
          <p className="text-[#3a3a3a] mb-6 text-base sm:text-lg">
            At DantSri, we believe that your smile speaks volumes. Our mission is to ensure that each patient feels heard, understood, and treated with the utmost care and respect. We make oral wellness a part of your daily routine so you can smile with confidence and pride. Our team is committed to bringing world-class dental practices to your neighborhood clinic, ensuring everyone receives premium care regardless of their background.
          </p>
          <button className="bg-[#3a3a3a] text-white px-6 py-2 rounded-md hover:bg-transparent hover:text-[#3a3a3a] border-2 border-[#3a3a3a] transition">
            Contact Us
          </button>
        </motion.div>
        <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
          <img
            src="https://images.unsplash.com/photo-1616212098931-09c997c9b1f2?auto=format&fit=crop&w=400&q=80"
            className="rounded-xl object-cover w-full sm:w-[48%] md:w-[48%]"
            alt="Happy patient"
          />
          <img
            src="https://images.unsplash.com/photo-1588776814546-ec7c9c4a5e54?auto=format&fit=crop&w=400&q=80"
            className="rounded-xl object-cover w-full sm:w-[48%] md:w-[48%]"
            alt="Dentist at work"
          />
        </div>
      </section>

      {/* Patient Priority Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1588776814965-6bcb8ad6c663?auto=format&fit=crop&w=800&q=80"
          alt="Dental care"
          className="rounded-xl shadow-lg w-full h-[250px] sm:h-[300px] md:h-full object-cover"
        />
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Patients Come First</h2>
          <p className="text-[#3a3a3a] text-base sm:text-lg">
            Every smile we serve reflects our belief in holistic care. We provide a welcoming and safe environment where patients can openly discuss their concerns. Our highly trained staff ensures you feel relaxed and confident in the treatments you receive. Whether it's a regular check-up or a complex procedure, we make your comfort our top priority.
          </p>
          <button className="mt-4 bg-[#3a3a3a] text-white px-6 py-2 rounded-md hover:bg-transparent hover:text-[#3a3a3a] border-2 border-[#3a3a3a] transition">
            Book an Appointment
          </button>
        </div>
      </section>

      {/* Mission & Video Section */}
      <section className="bg-[#e9f6f6] rounded-xl p-10 md:p-16 text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl font-bold mb-4"
        >
          Your Well-being is Our Priority
        </motion.h2>
        <p className="text-[#3a3a3a] max-w-3xl mx-auto mb-6 text-base sm:text-lg">
          Our clinic is equipped with the latest dental technology to ensure the highest standard of care. From digital X-rays and painless procedures to personalized treatment plans, every step is taken to guarantee your safety, hygiene, and comfort. Watch the video below to discover how we make a difference.
        </p>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SCP38MrccsI"
            title="Dental Care Promo Video"
            className="rounded-xl shadow-md w-full max-w-2xl h-64 md:h-80"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center mb-20">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="uppercase text-sm tracking-widest text-[#3a3a3a] font-semibold mb-1"
        >
          Meet Our Team
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Meet Our Expert Dental Team
        </motion.h2>
        <p className="text-[#3a3a3a] max-w-2xl mx-auto mb-12 text-base sm:text-lg">
          Backed by years of hands-on experience and continuous education, our dental experts combine compassion, skill, and precision. With specialties ranging from oral surgery to cosmetic care, our team works collaboratively to ensure you get the smile you deserve.
        </p>
        <div className="grid md:grid-cols-2 gap-10 justify-center items-stretch">
          {[{
            name: "Dr. John Doe",
            title: "Oral-Dental Surgeon, Implantologist\nEx Sr. Consultant - ENISH\n(Cancer Hospital) New Delhi\nEx Resident - DNH Hospital",
            image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
          }, {
            name: "Dr. Joy",
            title: "Oral-Dental Surgeon, Cosmetologist,\nFMDC, PGDCC, PGDMT",
            image: "https://images.unsplash.com/photo-1521165945112-8f54b2b3e85b?auto=format&fit=crop&w=500&q=80",
          }].map((doc, i) => (
            <div key={i} className="bg-[#afc9c8] p-6 rounded-xl shadow-lg text-left hover:scale-105 transition-transform duration-300">
              <img
                src={doc.image}
                alt={doc.name}
                className="rounded-lg mb-4 h-60 w-full object-cover"
              />
              <h4 className="font-bold text-xl mb-2">{doc.name}</h4>
              <p className="text-sm text-[#1e1b1e] opacity-90 whitespace-pre-line">{doc.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-[#f0f0f0] rounded-xl px-6 md:px-12 py-12 mb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Our Awards & Recognition
        </motion.h2>
        <div className="flex justify-center gap-10">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <FaTrophy className="w-16 h-16 mx-auto mb-4 text-[#3a3a3a]" />
            <p className="text-xl font-semibold">Best Clinic Award 2025</p>
            <p className="text-[#3a3a3a]">Recognized for exceptional patient care and innovative practices in dentistry.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <FaTrophy className="w-16 h-16 mx-auto mb-4 text-[#3a3a3a]" />
            <p className="text-xl font-semibold">Patient Choice Award 2025</p>
            <p className="text-[#3a3a3a]">Awarded for outstanding patient satisfaction and trust in our services.</p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-[#f3f3f3] rounded-xl px-6 md:px-12 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          <details className="bg-white p-4 rounded-md shadow-md cursor-pointer">
            <summary className="font-semibold text-[#1e1b1e]">What are the common dental problems?</summary>
            <p className="mt-2 text-sm text-[#3a3a3a]">Tooth decay, gum disease, bad breath, sensitivity, and oral infections are frequently encountered. Early diagnosis and treatment can prevent complications.</p>
          </details>
          <details className="bg-white p-4 rounded-md shadow-md cursor-pointer">
            <summary className="font-semibold text-[#1e1b1e]">How can I prevent cavities?</summary>
            <p className="mt-2 text-sm text-[#3a3a3a]">Brush twice daily, floss regularly, limit sugary food, drink water, and visit your dentist every six months for a cleaning.</p>
          </details>
          <details className="bg-white p-4 rounded-md shadow-md cursor-pointer">
            <summary className="font-semibold text-[#1e1b1e]">What is facial aesthetic treatment?</summary>
            <p className="mt-2 text-sm text-[#3a3a3a]">These include treatments like chemical peels, wrinkle fillers, laser skin rejuvenation, and other non-invasive cosmetic procedures to enhance your natural features.</p>
          </details>
          <details className="bg-white p-4 rounded-md shadow-md cursor-pointer">
            <summary className="font-semibold text-[#1e1b1e]">What are the benefits of regular dental check-ups?</summary>
            <p className="mt-2 text-sm text-[#3a3a3a]">Routine visits help prevent gum disease, detect oral cancer early, remove plaque buildup, and keep your overall health in check.</p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
