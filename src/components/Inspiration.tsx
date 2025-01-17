"use client"

import Image from "next/image";

import Image1 from "../../public/room1.jpg";
import Image2 from "../../public/room2.jpg";
import Image3 from "../../public/room-3.png"
import { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Explore = () => {
    const images = [
        { src: Image1, title: "01 — Bed Room", subtitle: "Inner Peace" },
        { src: Image2, title: "02 — Living Room", subtitle: "Relaxation" },
        { src: Image3, title: "03 — Dining Room", subtitle: "Cozy Vibes" },
        
      ];
    
      const [currentIndex, setIndex] = useState(0);
    
      const handleNext = () => {
        setIndex((preIndex) => (preIndex + 1) % images.length);
      };
    
      const Previous = () => {
        setIndex((preIndex) =>
          preIndex === 0 ? images.length - 1 : preIndex - 1
        );
      };
    
  return (
    <section className="max-w-[1440px] mx-auto px-8 sm:px-16 lg:px-24 my-16 bg-[#FCF8F3] p-8 shadow-md">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="flex flex-col items-center sm:items-start gap-4 lg:basis-[40%] text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#3A3A3A]">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-sm sm:text-base text-[#616161]">
          Our designer already made a lot of beautiful prototypes of rooms
          that inspire you
        </p>
        <button className="bg-[#B88E2F] hover:bg-[#b88f2ff8] rounded-sm py-2 px-6 sm:px-8 text-white text-sm sm:text-base font-semibold mt-4">
          Explore More
        </button>
      </div>

      <div className="relative flex flex-col items-center lg:basis-[60%] w-full">
        <div className="relative w-full">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            className="rounded-md"
          />
          <div className="absolute bottom-6 left-6 opacity-80 bg-white p-8 rounded-sm shadow text-[#3A3A3A] z-[500]">
            <p className="text-sm font-semibold">
              {images[currentIndex].title}
            </p>
            <p className="text-sm">{images[currentIndex].subtitle}</p>
          </div>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              className="bg-white text-3xl cursor-pointer text-[#B88E2F] rounded-full shadow p-2"
              onClick={Previous}
            >
              <IoIosArrowDropleft />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              className="bg-white text-3xl cursor-pointer text-[#B88E2F] rounded-full shadow p-2"
              onClick={handleNext}
            >
              <IoIosArrowDropright />
            </button>
          </div>
        </div>

        {/* Dots for Slider */}
        <div className="flex gap-2 justify-center mt-4">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-[#B88E2F]" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Explore