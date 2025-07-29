import React, { useState } from "react";
import image2 from "../assets/c1.png";
import image3 from "../assets/c.png";
import image4 from "../assets/c2.png";
import right from "../assets/right-arrow.png";
import left from "../assets/left.png";

// Example testimonial data
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
    <div className="max-w-[1280px] mx-auto">
      <div className="mb-[40px]">
        <h2 className="text-black font-poopins text-[42px] font-[500] leading-[100%] text-center">
          Why Customers Love ❤️ Us?
        </h2>
      </div>

      <div className="flex justify-between items-center gap-[40px]">
        {/* Testimonial Card */}
        <div className="w-[881px] h-[608px] bg-[#F2F4F6] rounded-[24px] flex flex-col justify-between overflow-hidden">
          {/* Top Section */}
          <div className="pl-[60px]">
            <div className="flex gap-[8px] mb-[42px] pt-[70px]">
              <img src={image3} alt="quote" />
              <img src={image3} alt="quote" />
            </div>
            <p className="w-[760px] text-black font-poopins text-[28px] font-[400] leading-[150%]">
              {current.text}
            </p>
          </div>

          {/* Bottom Background with name and buttons */}
          <div
            style={{
              backgroundImage: `url(${current.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="h-[130px] w-[95%] mx-auto mb-[20px] rounded-[24px] flex items-center justify-between px-[40px]"
          >
            <p className="text-black font-poopins text-[32px] font-[600] leading-[150%]">
              - {current.name}
            </p>
            <div className="flex gap-[8.44px]">
              <button
                onClick={handlePrev}
                className="p-[13.5px] rounded-[84.38px] w-[51px] h-[51px] border-[0.84px] border-black shadow bg-transparent transition animate-glow"
              >
                <img src={left} alt="left" className="w-[20px] h-[20px]" />
              </button>
              <button
                onClick={handleNext}
                className="p-[13.5px] rounded-[84.38px] w-[51px] h-[51px] border-[0.84px] border-black shadow bg-transparent transition animate-glow"
              >
                <img src={right} alt="right" className="w-[20px] h-[20px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Side Image */}
        <div className="w-[359px] h-[608px] bg-[#F2F4F6] p-[20px] rounded-[24px]">
          <img src={image2} alt="man" />
        </div>
      </div>
    </div>
  );
}
