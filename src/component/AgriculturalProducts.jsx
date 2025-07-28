import React from 'react';
import ProductSlider from './ProductSlice';
import image1 from "../assets/a1.png";
    import image2 from "../assets/a2.png";
    import image3 from "../assets/a3.png";
    import image4 from "../assets/a4.png";
   
const AgriculturalProducts = () => {
    ;
    const products = [
      {
        id: 1,
        title: "JF Barbed Wire~ 270 GSM",
        price: "₹4,995.00",
        image: image1,
      },
      {
        id: 2,
        title: "FGC RustFree Fencing Poles",
        price: "₹949.00 – ₹1,188.00",
        image: image2,
      },
      {
        id: 3,
        title: "GI Poultry Mesh",
        price: "₹1,280.00 – ₹1,700.00",
        image: image3,
      },
      {
        id: 4,
        title: "JF Bluelink Mesh",
        price: "₹2,897.50 – ₹6,362.00",
        image: image4,
      },
      {
        id: 5,
        title: "JF Barbed Wire~ 270 GSM",
        price: "₹4,995.00",
        image: image1,
      },
      {
        id: 6,
        title: "FGC RustFree Fencing Poles",
        price: "₹949.00 – ₹1,188.00",
        image: image2,
      },
    ];
    return (
        <div className='max-w-[1280px] mx-auto'>
            <p className='font-poopins font-[500] text-[42px] mb-[40px]'>Agricultural Products</p>
            <ProductSlider products={products}/>
        </div>
    );
};

export default AgriculturalProducts;