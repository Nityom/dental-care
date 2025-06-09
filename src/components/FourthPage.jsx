import React from "react";
// Import images
import backImage from "../assets/back.jpg";
import patientImage from "../assets/patient.avif";
import dentalImplantImage from "../assets/Dental_Implant.jpg";

const FourthPage = () => {
  return (
    <section className="bg-white">
      <div className="w-full min-h-screen grid grid-rows-[auto_1fr_1fr] gap-8 px-6 md:px-8 lg:px-[50px] py-12">
        {/* Top Heading and Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 lg:gap-12 items-center">
          <h1 className="text-3xl md:text-5xl lg:text-[60px] font-semibold text-center lg:text-left">
            Advanced Orthodontics With a Personal Touch
          </h1>
          <p className="text-sm text-center lg:text-left">
            At Titanium Dental Care, we specialize in advanced orthodontic treatments
            and invisible braces. Our state-of-the-art facility combines cutting-edge
            technology with personalized care to create beautiful, confident smiles.
          </p>
        </div>

        {/* Middle section with image and text */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_65%] gap-6 lg:gap-12">
          {/* Left card */}
          <div className="h-64 lg:h-full rounded-2xl lg:rounded-[20px] relative">
            {/* Mobile view content */}
            <div className="block lg:hidden w-full h-full">
              <div className="absolute inset-0 bg-gray-800 rounded-2xl">
                <img 
                  src={backImage} 
                  alt="Advanced orthodontic technology" 
                  className="w-full h-full object-cover rounded-2xl opacity-70"
                />
              </div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                <h1 className="w-full text-xl font-semibold">Advanced Technology</h1>
                <p className="w-full text-sm mt-4">
                  Our clinic features the latest in 3D imaging and digital scanning technology, 
                  ensuring precise diagnosis and treatment planning for optimal orthodontic results.
                </p>
              </div>
            </div>

            {/* Desktop view content */}
            <div 
              className="hidden lg:flex lg:flex-col lg:justify-between lg:text-white lg:p-[30px_40px] lg:h-full lg:rounded-[20px] bg-black/40 backdrop-blur-sm"
              style={{ backgroundImage: `url(${backImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="space-y-6">
                <h1 className="text-3xl font-semibold">Advanced Technology</h1>
                <p className="text-base leading-relaxed opacity-90">
                  Our clinic features the latest in 3D imaging and digital scanning technology, 
                  ensuring precise diagnosis and treatment planning for optimal orthodontic results.
                  We utilize cutting-edge orthodontic tools and software for accurate treatment planning.
                </p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="h-64 lg:h-full">
            {/* Mobile view */}
            <div className="block lg:hidden w-full h-full rounded-2xl shadow-md overflow-hidden">
              <img 
                src={patientImage} 
                alt="Patient image" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Desktop view */}
            <div 
              className="hidden lg:block lg:h-full lg:rounded-[20px] lg:shadow-md"
              style={{ backgroundImage: `url(${patientImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-16">
          {/* Expert Team Card */}
          <div className="border-2 border-black rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[300px]">
            <div>
             <h2 className="text-2xl lg:text-3xl font-bold">
  Expert Orthodontic Team
</h2>

              <p className="text-base text-gray-600 mt-6 lg:mt-8 leading-relaxed">
                Led by Dr. Tarun Pandey, our team of specialists brings extensive experience 
                in orthodontics and invisible braces, ensuring exceptional treatment outcomes 
                for every patient.
              </p>
            </div>
          </div>

          {/* Middle image - only visible on large screens */}
          <div className="hidden lg:block h-full rounded-3xl overflow-hidden shadow-lg">
            <img 
              src={dentalImplantImage} 
              alt="Dental implant" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Comfort & Care Card */}
          <div className="bg-[#a7aaca] rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[300px]">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold">Comfort & Care</h2>
              <p className="text-base mt-6 lg:mt-8 leading-relaxed">
                Experience orthodontic treatment in our modern, comfortable facility. 
                We prioritize patient comfort and use the latest techniques to ensure 
                a painless and efficient treatment journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthPage;
