import React, { useState } from "react";
import image2 from "../assets/c1.png";
import image3 from "../assets/c.png";
import image4 from "../assets/c2.png";
import right from "../assets/right-arrow.png";
import left from "../assets/left.png";

const testimonials = [
  {
    name: "Samuel Varughese",
    text: `I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast (400ft.) Value for money and easy to install. Happy with the product`,
    bgImage: image4,
  },
  {
    name: "Aarav Sen",
    text: `Very responsive customer support team and quick installation. The quality exceeded my expectations. Highly recommended!`,
    bgImage: image4,
  },
  {
    name: "Fatima Noor",
    text: `Affordable pricing, top-notch service, and easy to maintain. I'm satisfied with the overall experience.`,
    bgImage: image4,
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-0">
      <div className="mb-[40px]">
        <h2 className="text-black font-poopins text-[32px] md:text-[38px] lg:text-[42px] font-[500] leading-[100%] text-center">
          Why Customers Love ❤️ Us?
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-[24px] lg:gap-[40px]">
        {/* Testimonial Card */}
        <div className="w-full lg:w-[881px] h-auto lg:h-[608px] bg-[#F2F4F6] rounded-[24px] flex flex-col justify-between overflow-hidden">
          {/* Top Section */}
          <div className="px-[24px] md:px-[40px] lg:pl-[60px]">
            <div className="flex gap-[8px] mb-[24px] md:mb-[32px] pt-[40px] md:pt-[60px] lg:pt-[70px]">
              <img src={image3} alt="quote" />
              <img src={image3} alt="quote" />
            </div>
            <p className="w-full md:mt-[42px] lg:w-[760px] text-black font-poopins text-[18px] md:text-[22px] lg:text-[28px] font-[400] leading-[150%]">
              {current.text}
            </p>
          </div>

          {/* Bottom Section */}
          <div
            style={{
              backgroundImage: `url(${current.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="h-[120px] md:h-[130px] w-[90%] lg:w-[95%] mx-auto my-[20px] rounded-[24px] flex flex-col md:flex-row items-center justify-between px-[20px] md:px-[30px] lg:px-[40px]"
          >
            <p className="text-black font-poopins text-[20px] md:text-[26px] lg:text-[32px] font-[600] leading-[150%] text-center md:text-left">
              - {current.name}
            </p>
            <div className="flex gap-[8px] mt-3 md:mt-0">
              <button
                onClick={handlePrev}
                className="p-[10px] md:p-[13.5px] rounded-full w-[44px] md:w-[51px] h-[44px] md:h-[51px] border border-black shadow bg-transparent transition animate-glow"
              >
                <img src={left} alt="left" className="w-[16px] md:w-[20px]" />
              </button>
              <button
                onClick={handleNext}
                className="p-[10px] md:p-[13.5px] rounded-full w-[44px] md:w-[51px] h-[44px] md:h-[51px] border border-black shadow bg-transparent transition animate-glow"
              >
                <img src={right} alt="right" className="w-[16px] md:w-[20px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Side Image */}
        <div className="w-full md:w-[70%] lg:w-[359px] h-auto lg:h-[608px] bg-[#F2F4F6] p-[20px] rounded-[24px] flex justify-center items-center">
          <img src={image2} alt="man" className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}
