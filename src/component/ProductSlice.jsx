import React, { useRef } from "react";
import right from "../assets/right-arrow.png";
import left from "../assets/left.png"

const ProductSlider = ({products=[]}) => {
  const sliderRef = useRef();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* Slider Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute z-10 -left-[25px] top-1/2 -translate-y-1/2 p-[13.5px]  border-2 border-black shadow rounded-full bg-transparent transition animate-glow"
      >
        <img src={left} alt="right" className="w-[20px] h-[20px]" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute z-10 -right-[25px] top-1/2 p-[13.5px] -translate-y-1/2 border-2 border-black shadow rounded-full bg-transparent transition animate-glow"
      >
        <img src={right} alt="right" className="w-[20px] h-[20px]" />
      </button>

      {/* Scrollable Product List */}
      <div
        ref={sliderRef}
        className="flex overflow-x-hidden gap-[20px]  scroll-smooth"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className=" flex-shrink-0 bg-[#F2F4F6] border border-gray-200 rounded-[17.44px]  shadow hover:shadow-lg transition "
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full  object-cover rounded-[17.68px] mb-[10px] p-[10px]"
            />
            <h3 className="text-[18px] font-[600] font-poopins text-black pl-[20px] pr-[35px]">
              {product.title}
            </h3>
            <p className="text-[14px] text-[#1a1a1ab3] mt-[10px] font-[500] pl-[20px] mb-[20px]">
              {product.price}
            </p>
            <button className="py-[12px] px-[32px] text-sm font-dm bg-[#B0DD1D] hover:bg-white relative text-black rounded-[100px] font-[500] transition duration-300 ease-in-out transform hover:scale-105 shadow-[0_0_20px_#B0DD1D] animate-glow ml-[20px] mb-[20px]">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
