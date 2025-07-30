import image1 from "../assets/w1.png";
import image2 from "../assets/w2.png";
import image3 from "../assets/w3.png";

const cardData = [
  {
    image: image1,
    title: "Unmatched Durability with Corrosion-Free Technology",
    description:
      "Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.",
    bgColor: "bg-[#F2F2F6]",
    descriptionColor: "text-[#1a1a1a80]",
    gapBottom: false,
  },
  {
    image: image2,
    title: "Unmatched Durability with Corrosion-Free Technology",
    description:
      "Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.",
    bgColor: "bg-[#002B55]",
    textColor: "text-[#ffffff]",
    descriptionColor: "text-[#ffffffcc]",
    gapBottom: true,
  },
  {
    image: image3,
    title: "Innovative and Diverse Product Range",
    description:
      "We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.",
    bgColor: "bg-[#F2F2F6]",
    descriptionColor: "text-[#1a1a1a80]",
    gapBottom: false,
  },
];

const WhyUsCard = () => {
  return (
    <div className="max-w-[1280px] mx-auto relative font-poopins flex flex-col md:flex-row justify-between items-center gap-[40px] ">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`md:w-[400px] relative flex flex-col md:px-[40px] px-[10px] pt-[30px] pb-[40px] z-50 rounded-[24px] overflow-hidden h-full md:h-[501px] ${card.bgColor} ${
            card.gapBottom ? "md:mb-[110px]" : ""
          }`}
        >
          {/* Blue glow layer inside card */}
          <div className="absolute z-0 w-[340px] h-[340px] -top-[40%] left-[30%] bg-[rgba(27,127,225,0.4)] blur-[100px] pointer-events-none"></div>

          {/* Icon */}
          <div className="mb-[30px] z-10">
            <img
              className={`border-dashed border-2 animate-spinSlow ${
                index === 1 ? "w-[70px] h-[70px]" : ""
              }`}
              src={card.image}
              alt="icon"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-[20px] z-10">
            <h2 className={`font-[500] text-[26px] w-[90%] leading-[130%] ${card.textColor}`}>
              {card.title}
            </h2>
            <p
              className={`text-[17px] font-[400] leading-[150%] ${
                card.descriptionColor || card.textColor
              }`}
            >
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyUsCard;
