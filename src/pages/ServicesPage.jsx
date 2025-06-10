import React from "react";
import { motion } from "framer-motion";
import BeforeAfterSlider from "../components/BeforeAfterSlider";

// Import service images
import invisibleBracesImg from "../assets/services/invisible-braces.png";
import clearAlignersImg from "../assets/services/clear-aligners.png";
import dentalImplantImg from "../assets/services/dental-implant.jpg";
import rootCanalImg from "../assets/services/root-canal-treatment.png";
import laminatesImg from "../assets/services/laminates.jpg";
import cleaningImg from "../assets/services/teeth-cleaning.jpg";
import denturesImg from "../assets/services/dentures.jpg";
import crownsImg from "../assets/services/crowns-and-bridges.png";
import whiteningImg from "../assets/services/tooth-whitening.png";
import extractionImg from "../assets/services/tooth-extraction.png";

const services = [
  {
    title: "Invisible Braces",
    desc: "Experience the confidence of a beautiful smile with our virtually invisible braces. Perfect for teens and adults, these ceramic braces blend seamlessly with your natural tooth color. Using advanced orthodontic technology, we ensure precise tooth movement while maintaining your professional appearance. Treatment includes regular adjustments, progress monitoring, and detailed care instructions for optimal results.",
    image: invisibleBracesImg,
  },
  {
    title: "Clear Aligner Therapy",
    desc: "Transform your smile discreetly with our custom-made clear aligners. Using 3D digital scanning and treatment planning, we create a series of transparent aligners that gradually straighten your teeth. Enjoy the flexibility of removable aligners while eating and cleaning, with treatment times typically ranging from 6-18 months. Ideal for mild to moderate alignment issues, offering comfort and convenience throughout your smile journey.",
    image: clearAlignersImg,
  },
  {
    title: "Dental Implants",
    desc: "Restore your natural smile with our advanced dental implant solutions. Using premium titanium implants and the latest 3D imaging technology, we provide permanent tooth replacement that looks, feels, and functions like natural teeth. Our comprehensive process includes detailed planning, precise surgical placement, and custom crown creation. Benefit from improved oral health, enhanced comfort, and long-lasting results with success rates over 98%.",
    image: dentalImplantImg,
  },
  {
    title: "Root Canal Treatment",
    desc: "Experience painless and efficient root canal therapy with our state-of-the-art endodontic treatment. Using microscopic visualization and rotary instruments, we carefully clean and seal infected tooth pulp to save your natural tooth. Our procedure includes complete infection removal, advanced canal shaping, and permanent filling placement. Most treatments are completed in 1-2 visits, with immediate pain relief and long-term tooth preservation.",
    image: rootCanalImg,
  },
  {
    title: "Laminates and Veneers",
    desc: "Achieve your dream smile with our custom-crafted porcelain veneers. Using ultra-thin, high-quality ceramic materials, we design each veneer to perfectly match your natural teeth while correcting imperfections. Our process includes detailed smile design consultation, minimal tooth preparation, and precise fitting. Transform stained, chipped, or misaligned teeth with durable veneers that can last 10-15 years with proper care.",
    image: laminatesImg,
  },
 
  {
    title: "Professional Teeth Cleaning",
    desc: "Maintain optimal oral health with our thorough professional cleaning service. Using ultrasonic scalers and hand instruments, we remove plaque, tartar, and surface stains while protecting your enamel. Treatment includes comprehensive cleaning, polishing, fluoride application, and personalized oral hygiene instructions. Regular cleanings every 6 months help prevent gum disease, cavities, and maintain fresh breath.",
    image: cleaningImg,
  },
  {
    title: "Complete Dentures",
    desc: "Regain your confident smile with our custom-fitted complete dentures. Using advanced materials and precise measurements, we create comfortable, natural-looking dentures that restore your ability to eat and speak clearly. Our process includes detailed impressions, try-in sessions, and final adjustments for perfect fit. Benefit from improved facial support, better digestion, and enhanced quality of life.",
    image: denturesImg,
  },
  {
    title: "Crowns and Bridges",
    desc: "Restore damaged teeth and replace missing ones with our premium crown and bridge solutions. Using high-strength ceramics and digital design technology, we create restorations that perfectly match your natural teeth. Treatment includes thorough preparation, temporary restoration placement, and final fitting of custom-made prosthetics. Enjoy improved function and aesthetics with restorations that can last 15+ years.",
    image: crownsImg,
  },
  {
    title: "Teeth Whitening",
    desc: "Achieve a brighter, more radiant smile with our professional teeth whitening services. Using the latest whitening technology and high-concentration gels, we can lighten your teeth by several shades in just one session. Treatment includes protective measures for sensitive gums, customized whitening intensity, and after-care instructions. Results can last 1-2 years with proper maintenance.",
    image: whiteningImg,
  },
  {
    title: "Tooth Extraction",
    desc: "Experience comfortable tooth removal with our gentle extraction procedures. Whether it's wisdom teeth or damaged teeth, we use modern techniques and proper anesthesia to ensure a pain-free experience. Service includes pre-extraction assessment, precise removal procedure, and comprehensive post-operative care instructions. Most patients recover fully within 7-10 days with proper follow-up care.",
    image: extractionImg,
  }
];

const ServicesPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e9f6f6] to-white pt-24 pb-20 px-0 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 px-4 md:px-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e1b1e] mb-4">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care solutions using advanced technology and expert techniques
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:gap-16 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-6 md:gap-10 p-4 md:p-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/2 group">
                <div className="relative overflow-hidden md:rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[300px] md:h-[400px] object-cover transform transition-transform duration-300 group-hover:scale-105 md:rounded-xl md:shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1e1b1e]">
                  {service.title}
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {service.desc}
                </p>
               
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white md:rounded-2xl md:shadow-xl p-4 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e1b1e] mb-8">
            Treatment Results
          </h2>
          <div className="relative">
            <BeforeAfterSlider />
            <div className="flex justify-between absolute top-4 left-4 right-4 text-white font-semibold">
              <span className="bg-[#3a3a3a]/80 px-4 py-2 rounded-full backdrop-blur-sm">
                After
              </span>
              <span className="bg-[#3a3a3a]/80 px-4 py-2 rounded-full backdrop-blur-sm">
                Before
              </span>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto px-4 md:px-0">
            Experience the transformation potential with our advanced dental treatments. 
            Results may vary based on individual cases.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
