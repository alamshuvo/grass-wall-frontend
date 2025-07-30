import { useState } from "react";
import v1 from "../assets/v1.png";
import v2 from "../assets/v2.png";
import v3 from "../assets/v3.png";
import v4 from "../assets/v4.png";
import v5 from "../assets/v5.png";
import map from "../assets/map.png";
import sv from "../assets/ss.svg";
import Button from "../Shared/Button";

const branches = [
  { name: "COIMBATORE", img: v1 },
  { name: "CHENNAI", img: v2 },
  { name: "HYDERABAD", img: v3 },
  { name: "GOA", img: v4 },
  { name: "KOCHI", img: v5 },
];

const ContactPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-[1280px] mx-auto border border-[#002b5533] rounded-[24px] relative my-4 md:my-0">
      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 transition-opacity">
          <div className="bg-white p-6 md:p-10 rounded-[20px] w-[90%] max-w-[400px] text-center shadow-xl scale-100 duration-300">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-black">
              Submitted Successfully!
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mb-6">
              Thank you for contacting us. We'll get back to you soon.
            </p>
            <button
              onClick={closeModal}
              className="bg-[#B0DD1D] text-black px-4 py-2 md:px-6 md:py-2 rounded-full font-medium hover:bg-[#a3cc1c] transition-all text-sm md:text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Title */}
      <div className="relative">
        <div className="absolute left-[50%] -translate-x-[50%] -top-3 md:-top-[20px]">
          <button className="rounded-[100px] p-2 md:p-[10px] flex justify-center items-center bg-[#B0DD1D] text-black font-poopins text-sm md:text-[16px] font-[500] leading-[100%]">
            OUR BRANCHES
          </button>
        </div>
      </div>

      {/* Branch List */}
      <div className={`w-full flex flex-wrap gap-4 md:gap-[62px] justify-center items-center mt-12 md:mt-[50px] px-4 md:px-[20px] mb-6 md:mb-[35px]`}>
        {branches.map((branch, i) => (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`cursor-pointer flex justify-center items-center flex-col pt-1 pr-2 pb-1 pl-2 md:pt-[6px] md:pr-[12px] md:pb-[6px] md:pl-[12px] rounded-[16px] ${
              activeIndex === i
                ? "bg-[#b0dd1d1a] border border-[#B0DD1D]"
                : "bg-transparent"
            } transition`}
          >
            <img src={branch.img} alt={branch.name} className="w-12 md:w-auto" />
            <p className="mt-2 md:mt-[15px] text-xs md:text-[14px] font-poopins font-[500] leading-[120%]">
              {branch.name}
            </p>
          </div>
        ))}
      </div>

      {/* contact list */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[20px] px-4 md:pl-[10px] pb-4 md:pb-0">
        <div className="w-full md:w-[40%] h-auto md:h-[642px] bg-gradient-to-b from-[#0B1120] to-[#1E2A47] rounded-[24px] p-6 md:p-[50px] text-white">
          <h2 className="font-poopins text-2xl md:text-[38px] font-[500] leading-[100%] text-white mb-6 md:mb-[30px]">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-[20px]">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#1C2B47]/60 pl-4 md:pl-[30px] py-3 md:py-[20px] h-12 md:h-[60px] text-white text-base md:text-[20px] font-[400] placeholder-white rounded-[24px] outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[#1C2B47]/60 pl-4 md:pl-[30px] py-3 md:py-[20px] h-12 md:h-[60px] text-white text-base md:text-[20px] font-[400] placeholder-white rounded-[24px] outline-none"
            />
            <input
              type="tel"
              placeholder="Phone *"
              className="bg-[#1C2B47]/60 pl-4 md:pl-[30px] py-3 md:py-[20px] h-12 md:h-[60px] text-white text-base md:text-[20px] font-[400] placeholder-white rounded-[24px] outline-none"
            />
            <textarea
              placeholder="Write message"
              rows="4"
              className="bg-[#1C2B47]/60 pl-4 md:pl-[30px] py-3 md:py-[20px] h-32 md:h-[134px] text-white text-base md:text-[20px] font-[400] placeholder-white rounded-[24px] outline-none resize-none mb-6 md:mb-[30px]"
            ></textarea>

            <Button text={"Submit"} />
          </form>
        </div>

        <div
          style={{   
            backgroundImage: `url(${map})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-64 md:h-[642px] w-full md:w-[60%] mx-auto rounded-[24px] flex items-end justify-center px-4 md:px-[40px] md:mr-[10px] md:mb-[10px]"
        >
          <div className="h-auto py-4 md:h-[116px] flex justify-center items-center w-full max-w-[700px] p-2 md:p-[10px] bg-white rounded-[24px]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-[30px]">
              <img src={sv} alt="ss" className="w-8 md:w-auto" />
              <p className="font-poopins font-[400] text-xs md:text-[18px] leading-[150%] text-center md:text-left">
                <span className="font-poopins font-[600] text-xs md:text-[18px]">
                  JRR Towers
                </span>{" "}
                (2nd Floor), Pattalamma Temple Rd, Basavangudi, Bangalore,
                560004
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;