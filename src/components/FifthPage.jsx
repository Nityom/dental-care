import React from 'react';

const FifthPage = () => {
  return (
    <section>
      <div className="w-full min-h-screen flex items-center justify-center py-4 sm:py-8">
        <div
          className="w-[97%] min-h-[90vh] bg-cover bg-center bg-no-repeat rounded-lg md:rounded-[30px] overflow-hidden"
          style={{ backgroundImage: "url('/assets/back.jpg')" }}
        >
          {/* Top Bar */}
          <div className="w-full flex items-center justify-between text-white px-3 sm:px-6 md:px-[50px] py-3 sm:py-4 text-xs sm:text-sm font-medium">
            <p>Happy Smile</p>
            <p>2025</p>
          </div>          
          {/* Main Section */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between px-3 sm:px-6 md:px-[50px] py-4 sm:py-8 md:py-0 md:h-[85%]">
            {/* Left Content */}
            <div className="w-full md:w-[60%] flex flex-col justify-center gap-4 sm:gap-6 md:gap-10 mb-6 md:mb-0">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight">
                Patients Gave<br />Lots of Love
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Card 1 */}
                <div className="w-full sm:w-1/2 bg-[#e8d8bd] rounded-[20px] sm:rounded-[25px] p-3 sm:p-4 md:p-6 text-[#1e1b1e] shadow-md">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] rounded-[8px] sm:rounded-[10px] overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                        alt="Alice Thompson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[14px] sm:text-[15px] md:text-[16px]">Alice Thompson</h3>
                      <p className="text-[11px] sm:text-[12px] md:text-[13px]">Senior Doctor</p>
                    </div>
                  </div>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed font-medium">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos fugit nesciunt aperiam dolor velit quis officiis deserunt repellat iure temporibus.
                  </p>
                </div>
                {/* Card 2 */}
                <div className="w-full sm:w-1/2 bg-white rounded-[20px] sm:rounded-[25px] p-3 sm:p-4 md:p-6 text-[#1e1b1e] shadow-md">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] rounded-[8px] sm:rounded-[10px] overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                        alt="Emily Devis"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[14px] sm:text-[15px] md:text-[16px]">Emily Devis</h3>
                      <p className="text-[11px] sm:text-[12px] md:text-[13px]">Doctor</p>
                    </div>
                  </div>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestiae ad reprehenderit nihil similique quasi ipsam.
                  </p>
                </div>
              </div>
            </div>
            {/* Right Image */}
            <div className="w-full md:w-[35%] h-48 sm:h-64 md:h-full rounded-[20px] sm:rounded-[30px] overflow-hidden">
              <img
                src="/assets/candid.jpg"
                alt="Candid dental product"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthPage;