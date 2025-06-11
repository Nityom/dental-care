import React from 'react';
import doctor1 from '../assets/doctors/doctor1.png';
import doctor2 from '../assets/doctors/doctor2.jpg';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Tarun Pandey",
      title: "BDS, MDS (ORTHODONTICS)",
      specialization: "Orthodontics & Invisible Braces",
      experience: "15+ Years Experience",
      img: doctor1,
    },
    {
      name: "Dr. Sindhuja Pandey",
      title: "BDS, PG Diploma in Facial Cosmetology",
      specialization: "Cosmetic & General Dentistry",
      experience: "7+ Years Experience",
      img: doctor2,
    },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#1e1b1e] mb-2 block">Our Expert Team</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e1b1e] mb-6">
            Meet Our Dental Experts
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of highly qualified dental professionals combines expertise with 
            compassion to provide you with exceptional care and beautiful smiles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#1e1b1e] mb-2">{member.name}</h3>
                  <p className="text-[#3a3a3a] font-medium mb-3">{member.title}</p>
                  <div className="space-y-2 text-gray-600">
                    <p className="text-sm">{member.specialization}</p>
                    <p className="text-sm font-medium">{member.experience}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
