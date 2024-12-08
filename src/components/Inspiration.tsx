// import React from "react";
// import room1 from '../../public/room1.jpg';
// import room2 from '../../public/room2.jpg';
// import Image from "next/image";

// const Inspiration = () => {
//   return (
//     <div className="flex flex-wrap mt-14 bg-bgpeach h-auto w-full p-10">
//       <div className="flex-1 space-y-6">
//         <h1 className="font-bold mt-[130px] text-[32px] md:text-[40px] w-[422px] leading-tight text-gray-800">
//           50+ Beautiful rooms inspiration
//         </h1>
//         <p className="font-medium w-[368px] text-base text-gray-600">
//           Our designer already made a lot of beautiful prototypes of rooms that inspire you.
//         </p>
//         <button className="w-[222px] h-[50px] bg-brown text-white text-base font-bold text-center rounded hover:bg-opacity-80 transition">
//           Explore More
//         </button>
//       </div>
//       <div className="flex flex-1 justify-center mt-6 md:mt-0 space-x-3">
//         <Image src={room1} alt="Room 1" className="rounded-lg object-cover w-[380px] md:h-[582px]" />
//         <Image src={room2} alt="Room 2" className="rounded-lg object-cover w-[290px] md:h-[486px]" />
//       </div>
//     </div>
//   );
// };

// export default Inspiration;

import React from "react";
import room1 from "../../public/room1.jpg";
import room2 from "../../public/room2.jpg";
import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const Inspiration = () => {
  return (
    <div className="flex flex-wrap mt-14 bg-bgpeach h-auto w-full p-10">
      <div className="flex-1 space-y-6">
        <h1 className="font-bold mt-[130px] text-[32px] md:text-[40px] w-[422px] leading-tight text-gray-800">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="font-medium w-[368px] text-base text-gray-600">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you.
        </p>
        <button className="w-[222px] h-[50px] bg-brown text-white text-base font-bold text-center rounded hover:bg-opacity-80 transition">
          Explore More
        </button>
      </div>
      <div className="flex flex-wrap justify-center mt-6 md:mt-0 space-x-3 relative">
        <div className="relative w-[400px] md:h-[582px]">
          <Image
            src={room1}
            alt="Room 1"
            className="rounded-lg object-cover w-[450px] h-full"
          />
          <div className="absolute top-0  left-0 w-[217px] h-[130px] mt-[400px] ml-6 bg-white bg-opacity-55 ">
            <p className="text-graay2 w-[182px] pt-7  pl-5 font-[500] text-base ">
              01 — Bed Room
            </p>
            <p className="text-blackw-[168px] pl-5 mt-3 font-semibold text-[28px] leading-[33.6px]">
              Inner Peace
            </p>
            <IoArrowForwardOutline className="bg-brown ml-[218px] text-white w-10 h-10 p-2 mt-[-9px]" />
          </div>
        </div>
        <div className="relative mt-6 w-[400px] md:h-[582px]">
          <Image
            src={room2}
            alt="Room 2"
            className="rounded-lg object-cover w-[290px] md:h-[486px]"
          />
          <div className="absolute  ">
            <IoIosArrowForward className="bg-white ml-[268px] rounded-full w-10 h-10 p-2 mt-[-250px]" />
          </div>
        </div>
      </div>
      <div className="flex lg:ml-[870px] relative gap-1 sm:mt-3 lg:mt-[-60px] text-2xl">
     <GoDotFill className="hover:text-brown hover:border hover:border-brown rounded-3xl text-graay2 "/>
      <GoDotFill className="hover:text-brown hover:border hover:border-brown rounded-3xl text-graay2 "/>
      <GoDotFill className="hover:text-brown hover:border hover:border-brown rounded-3xl text-graay2 "/>
      <GoDotFill className="hover:text-brown hover:border hover:border-brown rounded-3xl text-graay2 "/>
      </div>
    </div>
  );
};

export default Inspiration;
