import Button from "../Shared/Button";
import WhyUsCard from "./WhyUsCard";

const WhyUs = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-0"> {/* responsive horizontal padding */}
      {/* Heading Section */}
      <div className="max-w-[760px] mx-auto z-10">
        <h2 className="text-[32px] sm:text-[36px] md:text-[42px] text-center font-poopins font-[500] mb-4">
          Why Us
        </h2>
        <p className="font-poopins font-[400] text-[16px] sm:text-[18px] md:text-[20px] text-center text-black mb-[40px] leading-[150%]">
          We specialize in delivering durable and innovative fencing solutions built to last. 
          With a focus on quality and trust, we help secure spaces across industries and communities.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-[60px] sm:mt-[80px] md:mt-[110px]">
        <WhyUsCard />
      </div>

      {/* Button Section */}
      <div className="flex justify-center items-center mt-[30px]">
        <Button text={"Contact Us"} />
      </div>
    </div>
  );
};

export default WhyUs;
