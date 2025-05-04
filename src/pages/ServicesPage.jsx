import React from "react";
import BeforeAfterSlider from "../components/BeforeAfterSlider";

const services = [
  {
    title: "Comprehensive Dental Care",
    desc: "We provide quality dental treatment like cleaning, filling, scaling, orthodontics, root canal, crowns & more.",
    image: "https://via.placeholder.com/600x400?text=Dental+Care",
  },
  {
    title: "Advanced Digital X-Ray",
    desc: "Cutting-edge x-ray equipment to diagnose issues with more accuracy and less exposure.",
    image: "https://via.placeholder.com/600x400?text=Digital+X-Ray",
  },
  {
    title: "Skin & Hair Restoration",
    desc: "Offering skin treatment and hair solutions, from hair transplants to laser-based procedures.",
    image: "https://via.placeholder.com/600x400?text=Hair+%26+Skin+Care",
  },
  {
    title: "On-Site Pharmacy",
    desc: "Medication, supplements, and instant remedies—all under one roof for faster recovery.",
    image: "https://via.placeholder.com/600x400?text=Pharmacy",
  },
  {
    title: "Pathology & Diagnostic Tests",
    desc: "Complete blood tests, lab support, pathology reports powered by advanced tech.",
    image: "https://via.placeholder.com/600x400?text=Lab+%26+Pathology",
  },
  {
    title: "Modern Operation Theater",
    desc: "Equipped for surgeries and minor procedures with the latest sterilization standards.",
    image: "https://via.placeholder.com/600x400?text=Operation+Theater",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#e9f6f6] pt-24 pb-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#1e1b1e] mb-14">
          Our Services
        </h1>

        {/* Services Grid */}
        <div className="grid gap-16 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-[#1e1b1e]">
                  {service.title}
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Section */}
        <BeforeAfterSlider />
      </div>
    </div>
  );
};

export default ServicesPage;
