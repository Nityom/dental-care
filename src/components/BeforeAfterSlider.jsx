import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import beforeImg from "../assets/teeth-dirty.webp";
import afterImg from "../assets/teeth-clean.webp";

const BeforeAfterSlider = () => {
  return (
    <div className="w-full px-4 py-12 bg-[#e9f6f6]">
      <h2 className="text-3xl font-bold text-center text-[#1e1b1e] mb-8">
        Before and After Effect
      </h2>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={afterImg} // ✅ use imported image
              alt="Clean Teeth"
              className="aspect-video rounded-lg"
              aria-label="Clean Teeth"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={beforeImg} // ✅ use imported image
              alt="Dirty Teeth"
              className="aspect-video rounded-lg"
              aria-label="Dirty Teeth"
            />
          }
          position={50}
          className="rounded-lg shadow-xl"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
