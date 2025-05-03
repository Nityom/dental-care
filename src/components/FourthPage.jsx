import React from "react";

const FourthPage = () => {
  return (
    <section>
      <div className="w-full min-h-screen py-6 md:py-0 flex flex-col items-center justify-evenly">
        {/* Top Heading and Paragraph - Desktop */}
        <div className="hidden md:flex w-full md:h-[30%] items-center justify-between px-4 sm:px-8 lg:px-[50px]">
          <h1 className="w-[45%] text-3xl sm:text-4xl lg:text-[60px] font-semibold leading-tight">
            Modern Dentistry With a Personal Touch
          </h1>
          <p className="w-[30%] text-xs lg:text-[13px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad impedit sed! Aut,
            exercitationem perferendis asperiores numquam tenetur alias assumenda aperiam consectetur hic
            odio et harum id, omnis quos delectus!
          </p>
        </div>

        {/* Top Heading and Paragraph - Mobile */}
        <div className="md:hidden w-full px-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4 leading-tight">
            Modern Dentistry With a Personal Touch
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad impedit sed! Aut,
            exercitationem perferendis asperiores numquam tenetur.
          </p>
        </div>

        {/* Middle section with image and text - Desktop */}
        <div className="hidden md:flex w-full md:h-[30%] items-center justify-between px-4 sm:px-8 lg:px-[50px] my-4">
          <div
            className="w-[30%] h-full rounded-[20px] bg-cover bg-center bg-no-repeat text-white flex flex-col justify-between p-4 md:p-[20px_30px]"
            style={{ backgroundImage: "url(../assets/back.jpg)" }}
          >
            <h1 className="w-[70%] text-xl lg:text-[24px] font-semibold">Innovation technology</h1>
            <p className="w-[75%] text-xs lg:text-[13px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi in provident veritatis
              dignissimos odio obcaecati quia totam ipsam labore molestiae.
            </p>
          </div>
          <div
            className="w-[65%] h-full rounded-[20px] bg-cover bg-center bg-no-repeat shadow-md"
            style={{ backgroundImage: "url(../assets/patient.avif)" }}
          ></div>
        </div>

        {/* Middle section with image and text - Mobile */}
        <div className="md:hidden w-full px-4 mb-6">
          <div
            className="w-full h-48 sm:h-56 rounded-[20px] bg-cover bg-center bg-no-repeat shadow-md mb-4"
            style={{ backgroundImage: "url(../assets/patient.avif)" }}
          ></div>
          <div
            className="w-full rounded-[20px] bg-cover bg-center bg-no-repeat text-white flex flex-col justify-between p-4"
            style={{ backgroundImage: "url(../assets/back.jpg)" }}
          >
            <h1 className="text-xl font-semibold mb-2">Innovation technology</h1>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi in provident veritatis
              dignissimos odio obcaecati.
            </p>
          </div>
        </div>

        {/* Bottom section with 3 cards - Desktop */}
        <div className="hidden md:flex w-full md:h-[30%] items-center justify-between px-4 sm:px-8 lg:px-[50px]">
          <div className="w-[25%] h-full border-2 border-black rounded-[20px] flex flex-col items-start justify-between p-4 md:p-[20px_30px]">
            <h1 className="w-[60%] text-lg lg:text-[20px] font-semibold">Qualified staff</h1>
            <p className="w-[90%] text-xs lg:text-[13px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero repudiandae unde nam odio
              aperiam ducimus esse tempore eius voluptatibus cumque.
            </p>
          </div>
          <div
            className="w-[30%] h-full rounded-[20px] bg-cover bg-center bg-no-repeat shadow-md"
            style={{ backgroundImage: "url(../assets/Dental_Implant.jpg)" }}
          ></div>
          <div className="w-[30%] h-full bg-[#a7aaca] rounded-[20px] flex flex-col items-start justify-between p-4 md:p-[20px_30px]">
            <h1 className="w-[60%] text-lg lg:text-[20px] font-semibold">Comfortable and coziness</h1>
            <p className="w-[90%] text-xs lg:text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quo temporibus repellat
              sapiente minima harum aperiam laborum sed dolor iure?
            </p>
          </div>
        </div>

        {/* Bottom section with 3 cards - Mobile */}
        <div className="md:hidden w-full px-4 space-y-4">
          <div className="flex gap-4">
            <div
              className="w-1/2 h-40 rounded-[20px] bg-cover bg-center bg-no-repeat shadow-md"
              style={{ backgroundImage: "url(../assets/Dental_Implant.jpg)" }}
            ></div>
            <div className="w-1/2 h-40 bg-[#a7aaca] rounded-[20px] flex flex-col justify-between p-4">
              <h1 className="text-base font-semibold">Comfortable and coziness</h1>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quo temporibus.
              </p>
            </div>
          </div>
          <div className="w-full border-2 border-black rounded-[20px] flex flex-col p-4">
            <h1 className="text-base font-semibold mb-2">Qualified staff</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero repudiandae unde nam odio
              aperiam ducimus esse tempore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthPage;