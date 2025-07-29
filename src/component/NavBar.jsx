import React, { useState } from "react";
import tasklogo from "../assets/tasklogo1.svg";
import user from "../assets/user1.svg";
import search from "../assets/search.svg";
import bag from "../assets/bag.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-[1280px] mx-auto my-[10px] px-4 lg:px-0">
      <div className="flex justify-between items-center lg:h-[98px] relative">
        {/* Mobile/Tablet Logo */}
        <div className="lg:hidden">
          <img src={tasklogo} alt="logo" className="h-[40px]" />
        </div>

        {/* Desktop Nav Menu */}
        <ul className="hidden lg:flex justify-between items-center gap-[50px] text-[#1A171A] font-[400] text-[18px] cursor-pointer">
          {["Home", "Shop", "Blogs", "Contact"].map((item, index) => (
            <li
              key={index}
              className="relative transition-all duration-300 hover:text-[#B0DD1D] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B0DD1D] hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Center Logo */}
        <div className="hidden lg:flex border-dashed border-2 justify-center items-center p-[10px] absolute left-[45%] top-[10%] z-[1000]">
          <img src={tasklogo} alt="logo" />
        </div>

        {/* Right Side Section */}
        <div className="flex items-center gap-4 lg:gap-[55px]">
          {/* Hamburger (only below lg) */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Login (only for lg and up) */}
          <div className="hidden lg:flex justify-between items-center gap-[11px] cursor-pointer">
            <p className="text-[18px] font-[400]">Login</p>
            <img
              src={user}
              alt="user"
              className="border-dashed border-2 p-[4px]"
            />
          </div>

          {/* Search & Bag (only lg and up) */}
          <img
            src={search}
            alt="search"
            className="hidden lg:block border-dashed border-2 p-[4px] cursor-pointer"
          />
          <div className="relative hidden lg:block">
            <img
              src={bag}
              alt="bag"
              className="border-dashed border-2 p-[4px] cursor-pointer"
            />
            <div className="flex justify-center items-center -top-1 left-[50%] absolute bg-black text-white rounded-full h-[18px] w-[18px] text-[12px]">
              0
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Dropdown Menu with Transition */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] mt-4" : "max-h-0"
        }`}
      >
        <div className="space-y-3 text-[#1A171A] font-[400] text-[16px]">
          {["Home", "Shop", "Blogs", "Contact"].map((item, index) => (
            <div
              key={index}
              className="py-2 border-b hover:text-[#B0DD1D] transition"
            >
              {item}
            </div>
          ))}
          <div className="pt-3 flex items-center gap-2">
            <img src={user} alt="user" className="border-dashed border-2 p-[4px]" />
            <p>Login</p>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <img src={search} alt="search" className="border-dashed border-2 p-[4px]" />
            <div className="relative">
              <img src={bag} alt="bag" className="border-dashed border-2 p-[4px]" />
              <div className="absolute -top-1 left-[50%] bg-black text-white rounded-full h-[18px] w-[18px] text-[12px] flex justify-center items-center">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
