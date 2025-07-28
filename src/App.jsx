import AgriculturalProducts from "./component/AgriculturalProducts";
import GrassSlider from "./component/GrassSlider";
import LandScapeProducts from "./component/LandscapeProduct";

import NavBar from "./component/NavBar";
import TrustedCustomer from "./component/TrustedCustomer";

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
        <div className="my-[100px] relative">
          <TrustedCustomer/>
          <div className="absolute inset-0 bg-[rgba(27,127,225,0.4)] blur-[200px] z-0 w-[497px] h-[497px] bottom-0 left-[40%]"></div>

        </div>
      </div>
    </>
  );
}

export default App;
