import logo from "../assets/fl.png";
import Button from "../Shared/Button";
import social from "../assets/so1.png";
import social1 from "../assets/so2.png";
import social2 from "../assets/so3.png";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gradient-to-l pt-16 md:pt-[104px] from-[#0A0F32] to-[#153C7D] text-white py-10 px-6 md:px-20">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 md:gap-[175px] flex-wrap">
          {/* Newsletter Section */}
          <div className="w-full lg:w-[35%]">
            <h3 className="text-2xl md:text-[32px] font-medium leading-[100%] mb-4">
              Join Our JF Products
            </h3>
            <p className="text-base md:text-[18px] text-gray-300 mb-4">
              We'll let you about new updates and discounts
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 md:h-[60px] py-3 md:py-[20px] pl-4 md:pl-[30px] bg-[#ffffff1a] text-white rounded-[24px] placeholder:text-white text-base md:text-[20px] leading-[100%] mt-6 md:mt-[40px]"
            />
            <label className="flex items-center gap-2 mt-4 md:mt-[24px] text-[#ffffff80] text-sm md:text-[18px] font-[400] leading-[100%] mb-6 md:mb-[43px]">
              <input type="checkbox" className="accent-[#B0DD1D]" />
              Yes, subscribe me to your newsletter.
            </label>
            <button
              className="w-full bg-white text-[#1a1a1a33] px-4 md:px-[32px] py-3 md:py-[16px] rounded-full font-semibold 
                hover:brightness-105 hover:scale-105 hover:shadow-lg 
                transition transform duration-300 ease-in-out font-dm text-sm md:text-base"
            >
              Join Now
            </button>
          </div>

          {/* Information Section */}
          <div className="w-full sm:w-[45%] lg:w-[15%] mt-8 lg:mt-0">
            <h3 className="font-[500] font-poopins text-xl md:text-[32px] leading-[100%] mb-6 md:mb-[40px]">
              Information
            </h3>
            <ul className="space-y-4 md:space-y-[30px] text-base md:text-[20px] leading-[100%] font-[400] text-white">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div className="w-full sm:w-[45%] lg:w-[15%] mt-8 lg:mt-0">
            <h3 className="font-[500] font-poopins text-xl md:text-[32px] leading-[100%] mb-6 md:mb-[40px]">
              Helpful
            </h3>
            <ul className="space-y-4 md:space-y-[30px] text-base md:text-[20px] leading-[100%] font-[400] text-white">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Shipping Policy</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo and Branches */}
        <div className="flex flex-col md:flex-row justify-between items-center my-16 md:my-[120px] gap-8 md:gap-0">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-[50px]">
            <img
              src={logo}
              alt="JF Logo"
              className="w-24 md:w-[132px] h-auto md:h-[150px]"
            />
            <div className="font-[400] text-base md:text-[20px] font-poopins leading-[150%] text-center sm:text-left">
              <p className="text-sm text-gray-300 font-semibold">Our Branches</p>
              <p className="text-sm text-gray-300">
                Coimbatore, Chennai, Hyderabad, Goa, Kochi
              </p>
            </div>
          </div>
          <Button text={"Contact Us"} className="w-full sm:w-auto" />
        </div>
      </div>

      <div className="h-auto py-6 md:h-[98px] md:py-[30px] max-w-[1280px] mx-auto px-6 md:px-0 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <p className="font-poopins font-[400] text-sm md:text-[18px] text-center md:text-left">
          Copyright © 2025 JF Products. All rights reserved
        </p>
        <div className="flex items-center gap-3 md:gap-[16px]">
          <div className="w-8 h-8 md:w-[38px] md:h-[38px] rounded-full bg-[#F2F4F6] flex justify-center items-center p-2 md:p-[10px]">
            <img src={social} alt="" className="w-full h-auto" />
          </div>
          <div className="w-8 h-8 md:w-[38px] md:h-[38px] rounded-full bg-[#F2F4F6] flex justify-center items-center p-2 md:p-[10px]">
            <img src={social1} alt="" className="w-full h-auto" />
          </div>
          <div className="w-8 h-8 md:w-[38px] md:h-[38px] rounded-full bg-[#F2F4F6] flex justify-center items-center p-2 md:p-[10px]">
            <img src={social2} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;