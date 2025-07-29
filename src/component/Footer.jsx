import logo from "../assets/fl.png";
import Button from "../Shared/Button";
import social from "../assets/so1.png";
import social1 from "../assets/so2.png";
import social2 from "../assets/so3.png";
const Footer = () => {
  return (
    <footer >
     <div className="bg-gradient-to-l pt-[104px] from-[#0A0F32] to-[#153C7D] text-white py-10 px-6 md:px-20">
     <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-[175px] flex-wrap">
        {/* Newsletter Section */}
        <div className="md:w-[35%]">
          <h3 className="text-[32px] font-medium leading-[100%] mb-4">
            Join Our JF Products
          </h3>
          <p className="text-[18px] text-gray-300 mb-4">
            We’ll let you about new updates and discounts
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-[60px] py-[20px] pl-[30px] bg-[#ffffff1a] text-white rounded-[24px] placeholder:text-white text-[20px] leading-[100%] mt-[40px]"
          />
          <label className=" flex items-center gap-2 mt-[24px] text-[#ffffff80] text-[18px] font-[400] leading-[100%] mb-[43px]">
            <input type="checkbox" className="accent-[#B0DD1D] " />
            Yes, subscribe me to your newsletter.
          </label>
          <button
            className="w-full bg-white text-[#1a1a1a33] px-[32px] py-[16px] rounded-full font-semibold 
  hover:brightness-105 hover:scale-105 hover:shadow-lg 
  transition transform duration-300 ease-in-out font-dm"
          >
            Join Now
          </button>
        </div>

        {/* Information Section */}
        <div className="md:w-[15%]">
          <h3 className="font-[500] font-poopins text-[32px] leading-[100%] mb-[40px]">Information</h3>
          <ul className="space-y-[30px] text-[20px] leading-[100%] font-[400] text-white">
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
              <a href="#" className="">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div className="md:w-[15%]">
          <h3 className="font-[500] font-poopins text-[32px] leading-[100%] mb-[40px]">Helpful</h3>
          <ul className="space-y-[30px] text-[20px] leading-[100%] font-[400] text-white">
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
      <div className="flex justify-between items-center my-[120px]">
        <div className="flex justify-center items-center gap-[50px]">
        <img
          src={logo}
          alt="JF Logo"
          className="w-[132px] h-[150px] mx-auto md:mx-0 mb-3"
        />
        <div className="font-[400] text-[20px] font-poopins leading-[150%]">
        <p className="text-sm text-gray-300 font-semibold">Our Branches</p>
        <p className="text-sm text-gray-300">
          Coimbatore, Chennai, Hyderabad, Goa, Kochi
        </p>
        </div>
        </div>
        <Button text={"Contact Us"}></Button>
      </div>
     </div>
     <div className="h-[98px] py-[30px] max-w-[1280px] mx-auto flex justify-between items-center">
        <p className="font-poopins font-[400] text-[18px] ">Copyright © 2025 JF Products. All rights reserved </p>
        <div className="flex items-center gap-[16px]">
            <div className="w-[38px] h-[38px] rounded-full bg-[#F2F4F6] flex justify-center items-center p-[10px]">
            <img src={social} alt="" className="" />
            </div>
          
            <div className="w-[38px] h-[38px] rounded-full bg-[#F2F4F6] flex justify-center items-center p-[10px]">
            <img src={social1} alt="" className="" />
            </div>
            <div className="w-[38px] h-[38px] rounded-full bg-[#F2F4F6] flex justify-center items-center p-[10px]">
            <img src={social2} alt="" className="" />
            </div>
        </div>
     </div>
    </footer>
  );
};

export default Footer;
