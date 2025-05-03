import React from 'react';

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      title: "Orthodontist",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Dr. Mark Patel",
      title: "Endodontist",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Dr. Emily Chen",
      title: "Pediatric Dentist",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Dr. James Lee",
      title: "Oral Surgeon",
      img: "https://randomuser.me/api/portraits/men/66.jpg",
    },
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#fff] px-6 py-16">
      <div className="w-full max-w-7xl text-center">
        <h1 className="text-4xl font-bold text-[#1e1b1e] mb-4">
          Meet Our Dental Experts
        </h1>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-12">
          Our team of qualified and compassionate dental professionals are committed to giving you the best care possible.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#afc9c8] text-[#1e1b1e] rounded-[20px] p-6 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="w-full h-[220px] mb-4 overflow-hidden rounded-[15px]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm opacity-80">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
