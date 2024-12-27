import Image from "next/image";
import React from "react";
import bg from "../../public/bg.jpg";

const Hero = () => {
  return (
    <div>
      <div className="h-full w-full">
        <Image src={bg} alt="bg" className="absolute inset-0 object-cover sm:w-full sm:h-[500px] sm:mt-[50px] md:w-full w-full h-[500px] mt-9 md:h-[550px]"/>
        <div className=" text-center relative">
          <div className="lg:w-auto lg:h-[440px] lg:mt-[60px] lg:ml-[670px] sm:text-base rounded-[10px] text-[52px] p-5 md:w-[500px] md:mt-20 sm:mt-[40px] w-auto h-[300px] mt-32 ml-3 mr-1 sm:w-auto
           sm:h-[280px] bg-peach">
            <p className="font-[600] text-base w-[123px] mb-2 text-start h-6">New Arrival</p>
            <h1 className="text-brown lg:mb-4 font-bold lg:text-[52px] lg:leading-[65px] lg:w-[390px] lg:h-[127px] w-auto text-xl  text-start">
            Discover Our New Collection
            </h1>
            <p className="font-[500] lg:text-[18px] leading-6 lg:w-[600px] lg:h-[42px] text-sm w-auto text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
              luctus nec ullamcorper mattis.</p>
            <button className="lg:w-[222px] lg:mt-20 lg:h-[67px] sm:h-auto sm:w-auto p-5 sm:mt-3 lg:mr-[410px] gap-[10px] bg-brown text-white text-base font-bold text-center">
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
