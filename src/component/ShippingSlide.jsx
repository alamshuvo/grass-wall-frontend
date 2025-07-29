import React, { useEffect, useRef, useState } from "react";
import icon from "../assets/s.png";

const InfiniteBanner = () => {
  const bannerRef = useRef(null);
  const [rotate, setRotate] = useState(false);

  const items = [
    { text: "Quality Product", icon },
    { text: "Shipping Across India", icon },
  ];
  const repeatedItems = [...Array(10)].flatMap(() => items);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setRotate(entry.isIntersecting);
      },
      { threshold: 0.3 } // Adjust visibility threshold
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      className={`transition-transform duration-500 ease-in-out transform ${
        rotate ? "-rotate-[3deg]" : "rotate-0"
      } w-full bg-[#D9ECFF] border border-[#00000033] p-4 sm:p-6 md:p-8 overflow-hidden`}
    >
      <div className="w-full">
        <div className="flex animate-infinite-scroll whitespace-nowrap will-change-transform min-w-full gap-[40px] sm:gap-8 md:gap-10">
          {repeatedItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-[40px] sm:gap-12 md:gap-[40px]"
            >
              <img
                src={item.icon}
                alt="icon"
                className="max-w-none w-[32px] h-[20px] sm:w-[40px] sm:h-[25px] md:w-[49px] md:h-[31px]"
              />
              <span
                className="text-[#002B55] font-[500] font-poopins leading-[100%] text-center capitalize text-[16px] sm:text-[24px] md:text-[32px]"
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteBanner;
