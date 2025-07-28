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
    <div className="h-[332px] max-w-[1280px] mx-auto bg-[#002B55] font-poopins rounded-[24px]">
      <div className="flex justify-center items-center">
        <p className="text-[#FFFFFF] text-[42px] mt-[80px]">
          Trusted by over 6K+ customers
        </p>
      </div>

      <div className="mt-[50px] flex justify-between mx-[177px]">
        {trustItems.map((item) => (
          <div key={item.id} className="flex items-center gap-[20px]">
            <div className="bg-[#FFFFFF] w-[80px] h-[80px] rounded-full flex justify-center items-center">
              <div className="border-dashed border-2 p-[5px] rounded-full">
                <img src={item.image} alt={item.title} className="w-[42px] h-[42px]" />
              </div>
            </div>
            <div className="text-[#FFFFFF]">
              <p className="text-[28px] font-[500]">{item.title}</p>
              <p className="text-[22px] font-[400]">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedCustomer;
