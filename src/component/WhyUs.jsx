import Button from "../Shared/Button";
import WhyUsCard from "./WhyUsCard";

const WhyUs = () => {
    return (
        <div>
            <div className="w-[760px] mx-auto z-10">
                <h2 className="text-[42px] text-center font-poopins font-[500] mb-[]">Why Us</h2>
                <p className="font-poopins font-[400] text-[20px] text-center text-black mb-[40px] leading-[150%]">We specialize in delivering durable and innovative fencing solutions built to last. With a focus on quality and trust, we help secure spaces across industries and communities.</p>
            </div>
            <div className="mt-[110px]">
                <WhyUsCard/>
               
            </div>
            <div className="flex justify-center items-center mt-[30px]">
            <Button text={"Contact Us"}></Button>
            </div>
        </div>
    );
};

export default WhyUs;