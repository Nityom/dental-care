import React from 'react';
import { Link } from 'react-router-dom';

const SecondPage = () => {
  return (
    <section>
      <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-4 sm:px-8 md:px-0 overflow-hidden">
        {/* Left Section */}
        <div className="w-full md:w-[60%] h-full flex flex-col justify-evenly items-start text-[#3a3a3a] md:mx-[100px] space-y-6 py-10 md:py-0">
          {/* Profile Images */}
          <div className="flex">
            {[
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
              "https://images.unsplash.com/photo-1550525811-e5869dd03032",
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
              "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc",
              "https://images.unsplash.com/photo-1550525811-e5869dd03032",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            ].map((src, index) => (
              <div
                key={index}
                className={`w-[50px] sm:w-[60px] md:w-[70px] h-[50px] sm:h-[60px] md:h-[70px] rounded-full overflow-hidden border-[4px] border-white ${
                  index !== 0 ? "ml-[-15px]" : ""
                } z-[${6 - index}]`}
              >
                <img src={src} alt="Team member portrait" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Heading */}
          <h1 className="text-[32px] sm:text-[45px] md:text-[65px] font-semibold leading-tight">
            Crafting Healthy Smiles One Service at a Time
          </h1>

          {/* Paragraph */}
          <p className="text-[15px] sm:text-[16px] max-w-[95%] md:max-w-[85%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime praesentium assumenda
            molestias error, saepe similique sed pariatur optio ab. Ab vitae veniam sapiente odio amet natus,
            labore totam esse porro iusto deleniti eos quasi fugiat cumque, possimus perferendis quam.
          </p>

          {/* Button */}
          <Link
  to="/about"
  className="px-[30px] py-[12px] sm:px-[40px] sm:py-[15px] rounded-full text-[#3a3a3a] bg-transparent border-[2px] border-[#1e1b1e] hover:bg-[#1e1b1e] hover:text-white transition-all duration-200"
>
  About Clinik
</Link>

        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-[40%] h-[300px] sm:h-[400px] md:h-full flex items-center justify-center">
          <div className="w-full sm:w-[90%] h-full rounded-[30px] md:rounded-[40px] overflow-hidden">
            <img
              src="./assets/medical.png"
              alt="Medical illustration"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
