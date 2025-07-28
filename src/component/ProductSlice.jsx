import React, { useRef } from "react";
import image1 from "../assets/a1.png";
import image2 from "../assets/a2.png";
import image3 from "../assets/a3.png";
import image4 from "../assets/a4.png";
import right from "../assets/right-arrow.png";
import left from "../assets/left.png";
const products = [
  {
    id: 1,
    title: "JF Barbed Wire~ 270 GSM",
    price: "₹4,995.00",
    image: image1,
  },
  {
    id: 2,
    title: "FGC RustFree Fencing Poles",
    price: "₹949.00 – ₹1,188.00",
    image: image2,
  },
  {
    id: 3,
    title: "GI Poultry Mesh",
    price: "₹1,280.00 – ₹1,700.00",
    image: image3,
  },
  {
    id: 4,
    title: "JF Bluelink Mesh",
    price: "₹2,897.50 – ₹6,362.00",
    image: image4,
  },
  {
    id: 5,
    title: "JF Barbed Wire~ 270 GSM",
    price: "₹4,995.00",
    image: image1,
  },
  {
    id: 6,
    title: "FGC RustFree Fencing Poles",
    price: "₹949.00 – ₹1,188.00",
    image: image2,
  },
];

const ProductSlider = () => {
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
