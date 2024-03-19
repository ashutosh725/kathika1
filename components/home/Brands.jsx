import React from "react";
import Image from "next/image";


const Brands = ({ images, bgColor }) => {
  return (
    <div className={`flex justify-center items-center gap-5 ${bgColor === "white" ? "bg-white" : "bg-black"} p-10`}>
      {images && images.map((image, index) => (

        <div key={index}>
          <Image src={image} alt={`Brand ${index + 1}`} className="h-16 object-contain" />
        </div>
      ))}
    </div>
  );
};

export default Brands;
