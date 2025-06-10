import React, { useState } from "react";
import { FaTrophy, FaAward, FaMedal } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import aboutImage1 from "../assets/about/img1.jpg";
import aboutImage2 from "../assets/about/img2.jpg";
import aboutImage3 from "../assets/about/img3.jpg";
import aboutImage4 from "../assets/about/img4.jpg";


const AboutUsPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const awards = [
    {
      icon: FaTrophy,
      title: "Clinical Head (Pan India)",
      description: "Ormco SPARK Aligners, 2024-25 - Leading orthodontic treatment planning and clinical protocols nationwide.",
      color: "from-amber-400 to-yellow-600"
    },
    {
      icon: FaAward,
      title: "Treatment Planning Specialist",
      description: "Invisalign India LLP, 2024 - Expert in creating precise treatment plans for optimal patient outcomes.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: FaMedal,
      title: "Clinical Support Manager",
      description: "Dentsply Sirona (West India), 2023 - Managed SureSmile Aligners clinical operations across western region.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: FaAward,
      title: "Consultant Orthodontist",
      description: "Clove Dental, 2021-23 - Provided specialized orthodontic care and treatment planning services.",
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#ffffff] text-[#1e1b1e] px-0 md:px-20">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-6 md:gap-10 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Your Trusted Orthodontic Specialists</h1>
          <p className="text-[#3a3a3a] mb-6 text-base sm:text-lg">
            At Titanium Smiles, we specialize in creating perfect smiles through advanced orthodontic care. Our mission is to transform lives through exceptional orthodontic treatment, using cutting-edge technology and personalized care plans. From traditional braces to invisible aligners, we offer comprehensive solutions tailored to your unique needs.
          </p>
          <button className="bg-[#3a3a3a] text-white px-6 py-2 rounded-md hover:bg-transparent hover:text-[#3a3a3a] border-2 border-[#3a3a3a] transition">
            Schedule a Consultation
          </button>
        </motion.div>
        <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
          <img
            src={aboutImage1}
            className="rounded-xl object-cover w-full sm:w-[48%] md:w-[48%]"
            alt="Happy patient"
          />
          <img
            src={aboutImage2}
            className="rounded-xl object-cover w-full sm:w-[48%] md:w-[48%]"
            alt="Dentist at work"
          />
        </div>
      </section>

      {/* Patient Priority Section */}
      <section className="grid md:grid-cols-2 gap-6 md:gap-10 items-center mb-20">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src={aboutImage3}
          alt="Dental care"
          className="w-full h-[250px] sm:h-[300px] md:h-full object-cover md:rounded-xl md:shadow-lg"
        />
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Expert Orthodontic Care</h2>
          <p className="text-[#3a3a3a] text-base sm:text-lg">
            We understand that each smile is unique. Our team of experienced orthodontists combines artistic vision with technical precision to achieve outstanding results. Whether you're interested in clear aligners, traditional braces, or specialized orthodontic treatments, we ensure your journey to a perfect smile is comfortable and rewarding.
          </p>
          <button className="mt-4 bg-[#3a3a3a] text-white px-6 py-2 rounded-md hover:bg-transparent hover:text-[#3a3a3a] border-2 border-[#3a3a3a] transition">
            Explore Treatments
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#e9f6f6] md:rounded-xl p-6 md:p-16 text-center mb-20">
        <motion.div className="mb-8">
          <img
            src={aboutImage4}
            alt="Our dental facility"
            className="w-full max-w-3xl mx-auto mb-6 md:rounded-xl"
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl font-bold mb-4"
        >
          Advanced Orthodontic Technology
        </motion.h2>
        <p className="text-[#3a3a3a] max-w-3xl mx-auto mb-6 text-base sm:text-lg">
          Our clinic features state-of-the-art orthodontic technology, including 3D imaging, digital treatment planning, and advanced aligner systems. We utilize the latest innovations in orthodontic care to ensure precise, efficient, and comfortable treatment experiences. Watch our video to learn more about our cutting-edge approach to orthodontics.
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

      {/* Awards Section */}
      <section className="relative mb-20">
        <div className="absolute inset-0 bg-[#AFC9C8] md:rounded-xl opacity-95"></div>
        <motion.div className="relative px-4 md:px-12 py-12 md:py-16">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-[#1e1b1e]"
          >
            Awards & Recognition
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm p-6 md:p-8 md:rounded-xl md:shadow-lg border-0 md:border md:border-white/50 hover:bg-white/90 transition-all duration-300"
              >
                <div className="bg-[#3a3a3a] p-4 rounded-full w-16 h-16 mx-auto mb-6 shadow-md">
                  <award.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1e1b1e] text-center mb-4">{award.title}</h3>
                <p className="text-[#3a3a3a] text-center">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQs Section */}
      <section className="bg-[#AFC9C8]/20 md:rounded-xl px-4 md:px-12 py-12 md:py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              question: "What orthodontic treatments do you offer?",
              answer: "We offer a comprehensive range of orthodontic treatments including traditional braces, ceramic braces, Invisalign, SPARK aligners, and specialized treatments for complex cases."
            },
            {
              question: "How long does orthodontic treatment take?",
              answer: "Treatment duration varies depending on individual cases, typically ranging from 12 to 24 months. During your consultation, we'll provide a detailed timeline based on your specific needs."
            },
            {
              question: "Do you treat both children and adults?",
              answer: "Yes, we provide orthodontic care for patients of all ages. We recommend initial orthodontic evaluation at age 7, and we have specialized treatment options for teens and adults."
            },
            {
              question: "What payment options are available?",
              answer: "We offer flexible payment plans, accept most major insurance plans, and provide financing options to make orthodontic treatment accessible to everyone."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white md:rounded-xl md:shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-[#1e1b1e] text-lg">{faq.question}</h3>
                <motion.span
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#3a3a3a]"
                >
                  ↓
                </motion.span>
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-[#3a3a3a] text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
