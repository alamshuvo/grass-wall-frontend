import AgriculturalProducts from "./component/AgriculturalProducts";
import GrassSlider from "./component/GrassSlider";
import LandScapeProducts from "./component/LandscapeProduct";

import NavBar from "./component/NavBar";

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
      </div>
    </>
  );
}

export default App;
