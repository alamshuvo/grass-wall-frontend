import React from 'react';
import ProductSlider from './ProductSlice';
import image1 from "../assets/l1.png";
    import image2 from "../assets/l2.png";
    import image3 from "../assets/l3.png";
    import image4 from "../assets/l4.png";
   
const LandScapeProducts = () => {
    ;
    const products = [
      {
        id: 1,
        title: "Antiqo Fence",
        price: "₹10,024.00 – ₹14,984.82",
        image: image1,
      },
      {
        id: 2,
        title: "JF Australian Trellis",
        price: "₹6,962.00",
        image: image2,
      },
      {
        id: 3,
        title: "JF Polyhex Mesh",
        price: "₹4,050.00 – ₹10,770.00",
        image: image3,
      },
      {
        id: 4,
        title: "JF Privezy Grass Wall",
        price: "₹1,646.10 – ₹18,284.10",
        image: image4,
      },
      {
        id: 5,
        title: "Antiqo Fence",
        price: "₹10,024.00 – ₹14,984.82",
        image: image1,
      },
      {
        id: 6,
        title: "JF Australian Trellis",
        price: "₹6,962.00",
        image: image2,
      },
      {
        id: 7,
        title: "JF Polyhex Mesh",
        price: "₹4,050.00 – ₹10,770.00",
        image: image3,
      },
      {
        id: 8,
        title: "JF Privezy Grass Wall",
        price: "₹1,646.10 – ₹18,284.10",
        image: image4,
      },
    ];
    return (
        <div className='max-w-[1280px] mx-auto'>
            <p className='font-poopins font-[500] text-[42px] mb-[40px]'>Landscape Products</p>
            <ProductSlider products={products}/>
        </div>
    );
};

export default LandScapeProducts;