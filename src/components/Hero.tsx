import Image from "next/image";
import React from "react";
import bg from "../../public/bg.jpg";

const Hero = () => {
  return (
    <div>
      <div className="h-full w-full">
        <Image src={bg} alt="bg" className="absolute inset-0 object-cover"/>
        <div className=" text-center relative">
          <div className="w-[640px] h-[440px] mt-[150px] ml-[690px] rounded-[10px] text-[52px] p-9 bg-peach">
            <p className="font-[600] text-base w-[123px] text-start h-6">New Arrival</p>
            <h1 className="text-brown font-bold text-[52px] leading-[65px] w-[390px] h-[127px] text-start">
            Discover Our New Collection
            </h1>
            <p className="font-[500] text-[18px] leading-6 w-[600px] h-[42px] text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className="w-[222px] h-[67px] ml-[-340px] mt-[100px] gap-[10px] bg-brown text-white text-base font-bold text-center">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
