import image1 from "../assets/trusted1.png";
import image2 from "../assets/trusted2.png";
import image3 from "../assets/trusted3.png";

const trustItems = [
  {
    id: 1,
    image: image1,
    title: "Premium",
    subtitle: "Products",
  },
  {
    id: 2,
    image: image2,
    title: "4000+",
    subtitle: "Google Review ",
  },
  {
    id: 3,
    image: image3,
    title: "Delivery",
    subtitle: "Across India",
  },
];

const TrustedCustomer = () => {
  return (
    <div className="h-auto md:h-[auto] lg:h-[332px] max-w-[1280px] mx-auto bg-[#002B55] font-poopins rounded-[24px] px-4 py-10 lg:px-0 lg:py-0">
      {/* Heading */}
      <div className="flex justify-center items-center text-center">
        <p className="text-[#FFFFFF] text-[28px] md:text-[36px] lg:text-[42px] leading-tight mt-4 md:mt-10 lg:mt-[80px]">
          Trusted by over 6K+ customers
        </p>
      </div>

      {/* Items Grid */}
      <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:mx-[177px] gap-y-10 md:gap-x-6 items-center px-4 md:px-12 lg:px-0">
        {trustItems.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-center gap-[20px] text-center md:text-left">
            <div className="bg-[#FFFFFF] w-[80px] h-[80px] rounded-full flex justify-center items-center">
              <div className="border-dashed animate-spinSlow border-2">
                <img src={item.image} alt={item.title} className="w-[42px] h-[42px]" />
              </div>
            </div>
            <div className="text-[#FFFFFF]">
              <p className="text-[22px] md:text-[26px] lg:text-[28px] font-[500]">{item.title}</p>
              <p className="text-[18px] md:text-[20px] lg:text-[22px] font-[400]">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedCustomer;
