import AgriculturalProducts from "./component/AgriculturalProducts";
import ContactPage from "./component/ContactPage";
import GrassSlider from "./component/GrassSlider";
import LandScapeProducts from "./component/LandscapeProduct";

import NavBar from "./component/NavBar";
import InfiniteBanner from "./component/ShippingSlide";
import TrustedCustomer from "./component/TrustedCustomer";
import TestimonialSlider from "./component/WhyCustomerLove";
import WhyUs from "./component/WhyUs";

function App() {
  return (
    <>
      <div className="font-poopins">
        <div>
          <NavBar />
          <GrassSlider />
        </div>
        <div className="mt-[100px]">
          <AgriculturalProducts />
        </div>
        <div className="mt-[110px]">
          <LandScapeProducts />
        </div>
        <div className="my-[100px]">
          <div className="relative overflow-hidden rounded-[24px]">
            {" "}
            {/* Add rounded if TrustedCustomer has rounded shape */}
            <TrustedCustomer />
            {/* Blurred glowing background layer */}
            <div className="absolute w-[497px] h-[497px] top-[40%] left-[40%] bg-[rgba(27,127,225,0.4)] blur-[100px] pointer-events-none z-0"></div>
          </div>
        </div>

        <div>
          <WhyUs />
        </div>
        <div className="mt-[70px] mb-[65px]">
          <InfiniteBanner/>
        </div>
        <div className="mt-[64px] mb-[100px]">
          <TestimonialSlider></TestimonialSlider>
        </div>
        <div>
          <ContactPage/>
        </div>
      </div>
    </>
  );
}

export default App;
