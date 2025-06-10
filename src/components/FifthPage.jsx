import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const FifthPage = () => {
const testimonials = [
  {
    name: "Anubhav Kumar",
    role: "Orthodontic Patient",
    image: "./assets/testimonials/anubhav.png",
    background: "bg-[#e8d8bd]",
    comment:
      "Absolutely amazing experience from the first consultation to the final result! The clinic maintained a professional yet friendly environment throughout. The orthodontic team explained each step clearly and made me feel comfortable. My braces journey was smooth, appointments were always on time, and now I have a smile I'm genuinely proud of. Highly recommended for anyone seeking expert orthodontic care!"
  },
  {
    name: "Snehal Sharma",
    role: "Clear Aligner Patient",
    image: "./assets/testimonials/snehal.png",
    background: "bg-white",
    comment:
      "This clinic made my aligner treatment an enjoyable and seamless process. The invisible braces were perfect for my lifestyle, and I appreciated how attentive the staff were during each check-up. Every question I had was answered patiently, and I was kept informed about my progress regularly. The results are phenomenal—I barely noticed I was wearing aligners and yet saw visible improvement every week!"
  },
  {
    name: "Atharva Verma",
    role: "Dental Patient",
    image: "./assets/testimonials/atharva.png",
    background: "bg-white",
    comment:
      "The clinic offers outstanding dental services. I initially visited for a routine check-up but ended up opting for cosmetic improvements as well. Dr. Sindhuja provided detailed consultations and tailored the treatment plan to suit my goals. The equipment is modern, the hygiene standards are excellent, and the staff made me feel at ease every step of the way. The transformation in my smile has boosted my confidence immensely!"
  },
  {
    name: "Nityom Tikhe",
    role: "Braces Patient",
    image: "./assets/testimonials/nityom.png",
    background: "bg-[#e8d8bd]",
    comment:
      "Getting braces as an adult was a tough decision, but this clinic made the journey worth it. The orthodontists were skilled, compassionate, and always listened to my concerns. Each visit was smooth, and the support I received throughout the treatment was commendable. I'm thrilled with the outcome—it's one of the best decisions I've made for my oral health and self-esteem!"
  }
];


  const [currentIndex, setCurrentIndex] = useState(0);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section>
      <div className="w-full min-h-screen flex items-center justify-center py-4 sm:py-8">
        <div
          className="w-[97%] min-h-[90vh] bg-none sm:bg-[url('/assets/back.jpg')] bg-cover bg-center bg-no-repeat rounded-lg md:rounded-[30px] overflow-hidden relative pb-6"
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
