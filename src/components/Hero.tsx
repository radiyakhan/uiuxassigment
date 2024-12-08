import Image from "next/image";
import React from "react";
import bg from "../../public/bg.jpg";

const Hero = () => {
  return (
    <div>
      <div className="h-full w-full">
        <Image src={bg} alt="bg" className="absolute inset-0 object-cover lg:block md:block sm:hidden hidden"/>
        <div className=" text-center relative">
          <div className="lg:w-[640px] mx-[20px] w-[300px] lg:h-[440px] lg:mt-[150px] lg:ml-[690px] rounded-[10px] text-[52px] p-9 bg-peach">
            <p className="font-[600] text-base w-[123px] text-start h-6">New Arrival</p>
            <h1 className="text-brown font-bold text-[52px] leading-[65px] lg:w-[390px] lg:h-[127px] text-start">
            Discover Our New Collection
            </h1>
            <p className="font-[500] text-[18px] leading-6 lg:w-[600px] lg:h-[42px] text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className="lg:w-[222px] lg:h-[67px] sm:w-full p-5 sm:h-full lg:ml-[-340px] mt-[100px] gap-[10px] bg-brown text-white text-base font-bold text-center">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
