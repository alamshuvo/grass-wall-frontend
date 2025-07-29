import { useEffect, useRef, useState } from "react";

import slide1 from "../assets/1.png";
import slide2 from "../assets/2.png";
import back from "../assets/back.png";
import right from "../assets/right-arrow.png";
import left from "../assets/left.png";

const slides = [
  {
    id: 1,
    img: slide1,
    title: "JF Privezy Grass Wall",
    desc: "The Perfect Blend Of Greenery",
    btnText: "Shop Now",
  },
  {
    id: 2,
    img: slide2,
    title: "Green Mesh Fence",
    desc: "Outdoor Eco Vibes",
    btnText: "Shop Now",
  },
];

const GrassSlider = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  return (
    <div className="relative w-full max-w-[1280px] mx-auto bg-[#F2F4F6] p-4 sm:p-[20px] rounded-[24px]">
      <div className="w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out w-full"
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex flex-col sm:flex-row items-center sm:items-stretch gap-6 sm:gap-[70px] flex-shrink-0"
            >
              {/* Left Image */}
              <div
                className="w-full sm:w-1/2 p-4 sm:p-[46px] rounded-[24px] border-dashed border-2"
                style={{ backgroundImage: `url(${back})` }}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-[24px]"
                />
              </div>

              {/* Right Content */}
              <div className="w-full sm:w-1/2 flex flex-col justify-center items-start text-left">
                <h2 className="text-[30px] sm:text-[40px] md:text-[62px] font-[500] text-black leading-[36px] sm:leading-[48px] md:leading-[72px] mb-4 sm:mb-[20px]">
                  {slide.title}
                </h2>
                <p className="text-[16px] sm:text-[20px] md:text-[24px] text-black leading-[24px] sm:leading-[30px] md:leading-[32px] font-[400] mb-6 sm:mb-[50px]">
                  {slide.desc}
                </p>
                <button className="relative py-[12px] sm:py-[16px] px-[24px] sm:px-[32px] font-dm bg-[#B0DD1D] hover:bg-white text-black rounded-[100px] text-[16px] sm:text-[18px] font-[500] transition duration-300 ease-in-out transform hover:scale-105 shadow-[0_0_20px_#B0DD1D]">
                  {slide.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-[10px] sm:-left-[30px] z-[100] transform -translate-y-1/2 bg-[#B0DD1D] hover:bg-white shadow-md rounded-full p-3 sm:p-[16px] transition"
      >
        <img src={left} alt="left" className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-[10px] sm:-right-[30px] transform -translate-y-1/2 bg-[#B0DD1D] hover:bg-white shadow-md rounded-full p-3 sm:p-[16px] transition"
      >
        <img src={right} alt="right" className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default GrassSlider;
