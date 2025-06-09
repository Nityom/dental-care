import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const FifthPage = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Orthodontic Patient",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      background: "bg-[#e8d8bd]",
      comment: "Got my Invisalign treatment done here. Dr. Tarun and his team are extremely professional and caring. The results are amazing!"
    },
    {
      name: "Priya Sharma",
      role: "Clear Aligner Patient",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      background: "bg-white",
      comment: "Best dental care experience! The invisible braces treatment was comfortable and the staff was very supportive throughout."
    },
    {
      name: "Amit Verma",
      role: "Dental Patient",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      background: "bg-white",
      comment: "State-of-the-art facility with excellent care. Dr. Sindhuja's expertise in cosmetic dentistry is remarkable."
    },
    {
      name: "Meera Patel",
      role: "Braces Patient",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      background: "bg-[#e8d8bd]",
      comment: "Wonderful experience with the orthodontic treatment. The team is highly skilled and the results exceeded my expectations!"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section>
      <div className="w-full min-h-screen flex items-center justify-center py-4 sm:py-8">
        <div
          className="w-[97%] min-h-[90vh] bg-none sm:bg-[url('/assets/back.jpg')] bg-cover bg-center bg-no-repeat rounded-lg md:rounded-[30px] overflow-hidden relative"
        >
          {/* Overlay */}
          <div className="hidden sm:block absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between text-white px-4 sm:px-6 md:px-[50px] py-4 text-xs sm:text-sm font-medium">
              <p>Patient Testimonials</p>
              <p>2025</p>
            </div>

            {/* Main Section */}
            <div className="w-full flex flex-col md:flex-row items-start justify-between px-4 sm:px-6 md:px-[50px] pb-6 md:py-0 md:h-[85%]">
              {/* Left Section */}
              <div className="w-full md:w-[60%] flex flex-col justify-center gap-6 md:gap-10 mb-6 md:mb-0">
                <h1 className="text-black sm:text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight">
                  Our Patients Love<br />Their New Smiles
                </h1>

                {/* Mobile Carousel */}
                <div className="block sm:hidden relative w-full">
                  <div className="flex overflow-hidden">
                    <div className="w-full transition-all duration-500 ease-in-out">
                     <div
  className={`${
    currentIndex % 2 === 0 ? 'bg-[#e8d8bd]' : 'bg-[#f5ede3]'
  } rounded-[20px] p-6 text-[#1e1b1e] shadow-md min-h-[65vh] flex flex-col justify-between`}
>

                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-[60px] h-[60px] rounded-[12px] overflow-hidden">
                              <img
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{testimonials[currentIndex].name}</h3>
                              <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
                            </div>
                          </div>
                          <p className="text-base leading-relaxed font-medium">
                            {testimonials[currentIndex].comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrows */}
                  <button
                    onClick={prev}
                    className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                  >
                    <BiChevronLeft size={24} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                  >
                    <BiChevronRight size={24} />
                  </button>
                </div>

                {/* Desktop Grid */}
                <div className="hidden sm:grid sm:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`${testimonial.background} rounded-[25px] p-4 md:p-6 text-[#1e1b1e] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[15px] md:text-[16px]">{testimonial.name}</h3>
                          <p className="text-[12px] md:text-[13px] text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-[13px] md:text-[14px] leading-relaxed font-medium">
                        {testimonial.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image - Hidden on Mobile */}
              <div className="hidden md:flex w-full md:w-[35%] items-center justify-center md:self-center">
                <div className="w-full h-48 sm:h-64 md:h-[80vh] rounded-[20px] sm:rounded-[30px] overflow-hidden">
                  <div className="w-full h-full relative bg-black/10">
                    <img
                      src="/assets/candid.jpg"
                      alt="Candid dental product"
                      className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthPage;
