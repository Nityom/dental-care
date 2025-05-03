import React from "react";
// Import images
import backImage from "../assets/back.jpg";
import patientImage from "../assets/patient.avif";
import dentalImplantImage from "../assets/Dental_Implant.jpg";

const FourthPage = () => {
  return (
    <section>
      <div className="w-full min-h-screen flex flex-col items-center justify-evenly py-8 md:py-4 lg:py-0 lg:h-screen">
        {/* Top Heading and Paragraph */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-center justify-between px-6 md:px-8 lg:px-[50px] py-4 lg:py-0 lg:h-[30%] gap-6 lg:gap-0">
          <h1 className="w-full lg:w-[45%] text-3xl md:text-5xl lg:text-[60px] font-semibold text-center lg:text-left">
            Modern Dentistry With a Personal Touch
          </h1>
          <p className="w-full md:w-[80%] lg:w-[30%] text-sm text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad impedit sed! Aut,
            exercitationem perferendis asperiores numquam tenetur alias assumenda aperiam consectetur hic
            odio et harum id, omnis quos delectus!
          </p>
        </div>
        
        {/* Middle section with image and text */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-8 lg:px-[50px] py-4 lg:py-0 lg:h-[30%] gap-6 lg:gap-0">
          {/* Mobile: Image with text overlay, Desktop: CSS background image */}
          <div className="w-full lg:w-[30%] h-64 lg:h-full rounded-2xl lg:rounded-[20px] relative">
            {/* Mobile view */}
            <div className="block lg:hidden w-full h-full">
              <div className="absolute inset-0 bg-gray-800 rounded-2xl">
                <img 
                  src={backImage} 
                  alt="Innovation technology background" 
                  className="w-full h-full object-cover rounded-2xl opacity-70"
                />
              </div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                <h1 className="w-full text-xl font-semibold">Innovation technology</h1>
                <p className="w-full text-sm mt-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi in provident veritatis
                  dignissimos odio obcaecati quia totam ipsam labore molestiae. Lorem ipsum dolor sit
                </p>
              </div>
            </div>
            
            {/* Desktop view - original style */}
            <div 
              className="hidden lg:flex lg:flex-col lg:justify-between lg:text-white lg:p-[20px_30px] lg:h-full lg:rounded-[20px]"
              style={{ backgroundImage: `url(${backImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <h1 className="w-[70%] text-[24px] font-semibold">Innovation technology</h1>
              <p className="w-[75%] text-[13px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi in provident veritatis
                dignissimos odio obcaecati quia totam ipsam labore molestiae. Lorem ipsum dolor sit
              </p>
            </div>
          </div>
          
          {/* Mobile: Image element, Desktop: CSS background image */}
          <div className="w-full lg:w-[65%] h-64 lg:h-full">
            {/* Mobile view */}
            <div className="block lg:hidden w-full h-full rounded-2xl shadow-md overflow-hidden">
              <img 
                src={patientImage} 
                alt="Patient image" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Desktop view - original style */}
            <div 
              className="hidden lg:block lg:h-full lg:rounded-[20px] lg:shadow-md"
              style={{ backgroundImage: `url(${patientImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
          </div>
        </div>
        
        {/* Bottom section with 3 cards */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-8 lg:px-[50px] py-4 lg:py-0 lg:h-[30%] gap-6 lg:gap-0">
          <div className="w-full lg:w-[25%] border-2 border-black rounded-2xl lg:rounded-[20px] flex flex-col items-start justify-between p-6 lg:p-[20px_30px] h-auto lg:h-full">
            <h1 className="w-full lg:w-[60%] text-lg lg:text-[20px] font-semibold">Qualified staff</h1>
            <p className="w-full lg:w-[90%] text-sm lg:text-[13px] mt-4 lg:mt-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero repudiandae unde nam odio
              aperiam ducimus esse tempore eius voluptatibus cumque.
            </p>
          </div>
          
          {/* Mobile: Image element, Desktop: CSS background image */}
          <div className="w-full lg:w-[30%] h-64 lg:h-full">
            {/* Mobile view */}
            <div className="block lg:hidden w-full h-full rounded-2xl shadow-md overflow-hidden">
              <img 
                src={dentalImplantImage} 
                alt="Dental implant" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Desktop view - original style */}
            <div 
              className="hidden lg:block lg:h-full lg:rounded-[20px] lg:shadow-md"
              style={{ backgroundImage: `url(${dentalImplantImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
          </div>
          
          <div className="w-full lg:w-[30%] bg-[#a7aaca] rounded-2xl lg:rounded-[20px] flex flex-col items-start justify-between p-6 lg:p-[20px_30px] h-auto lg:h-full">
            <h1 className="w-full lg:w-[60%] text-lg lg:text-[20px] font-semibold">Comfortable and coziness</h1>
            <p className="w-full lg:w-[90%] text-sm lg:text-[13px] mt-4 lg:mt-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quo temporibus repellat
              sapiente minima harum aperiam laborum sed dolor iure?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthPage;