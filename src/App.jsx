import AgriculturalProducts from "./component/AgriculturalProducts";
import GrassSlider from "./component/GrassSlider";
import LandScapeProducts from "./component/LandscapeProduct";

import NavBar from "./component/NavBar";
import TrustedCustomer from "./component/TrustedCustomer";
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
          <LandScapeProducts/>
        </div>
        <div className="my-[100px]">
  <div className="relative overflow-hidden rounded-[24px]"> {/* Add rounded if TrustedCustomer has rounded shape */}
    <TrustedCustomer />
    
    {/* Blurred glowing background layer */}
    <div className="absolute w-[497px] h-[497px] top-[40%] left-[40%] bg-[rgba(27,127,225,0.4)] blur-[100px] pointer-events-none z-0"></div>
  </div>
</div>

        <div>
          <WhyUs/>
        </div>
      </div>
    </>
  );
}

export default App;
