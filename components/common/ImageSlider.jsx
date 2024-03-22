
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";




const ImageSlider = ({ showButtons = true, images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (images) {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }
  };

  const prevSlide = () => {
    if (images) {
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [currentSlide]);

  return (
    <div className="flex justify-center">
      <div className="relative w-full  overflow-hidden shadow-lg">
       <div className="h-full w-full">
       <Image
          src={images ? images[currentSlide] : dummyImages[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          layout="responsive"
          className="object-cover"
        />
       </div>
        {showButtons && (
          <div className="absolute top-0  flex h-full w-full items-center  justify-between">
            <button
              onClick={prevSlide}
              className=" rounded-full bg-[#00000030] p-3 text-white hover:bg-[#000000] hover:text-gray-300 focus:outline-none"
            >
            <FaArrowLeft/>
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full bg-[#00000030] p-3  text-white  hover:bg-[#000000] hover:text-gray-300 focus:outline-none"
            >
              <FaArrowRight/>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
