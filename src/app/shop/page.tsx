import Image from "next/image";
import React from "react";
import bg from "../../../public/shop.png";
import { HiMiniAdjustmentsHorizontal, HiOutlineTrophy } from "react-icons/hi2";
import { BsFillGridFill, BsViewList } from "react-icons/bs";
import pic1 from "../../../public/sylthe.jpg";
import pic2 from "../../../public/chair.jpg";
import pic3 from "../../../public/sofa.jpg";
import pic4 from "../../../public/room.jpg";
import hand from '../../../public/hand.png'
import head from '../../../public/head.png'
import { GoVerified } from "react-icons/go";

const page = () => {
  return (
    <div>
      <div className="relative w-full h-[400px]">
        {/* Background Image */}
        <Image
          src={bg}
          alt="Shop Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black">
          <p className="font-medium text-5xl">Shop</p>
          <h1 className="font-[300px] text-base  mt-2">Home &gt; Shop</h1>
        </div>
      </div>
      {/* ................ */}
      <div className="flex flex-col items-center bg-peach py-10">
        <div className="flex justify-between items-center w-full h-2 max-w-4xl p-4">
          {/* Filters */}
          <div className="lg:flex gap-3 space-x-4">
            <HiMiniAdjustmentsHorizontal className="w-[20px] h-[20px]" />
            <h1 className="font-[400px] text-[20px] leading-[30px] w-12 h-[30px] mt-[-9px]">
              Filter
            </h1>
            <BsFillGridFill className="w-[18px] h-[18px]" />
            <BsViewList className="w-[20px] h-[20px]" />
          </div>

          {/* Pagination Info */}
          <div className="lg:w-[40px] border-[1px] ml-[-150px] rotate-90 text-black "></div>
          <div className="text-center text-sm">
            <span className=" lg:px-2 py-1 lg:ml-[-180px]">
              Showing 1-16 of 32 results
            </span>
          </div>
          {/* Sorting */}
          <div className="lg:flex space-x-4 lg:mr-[-98px] hidden ">
            <label className="flex items-center space-x-1">
              <span>Show</span>
              <select className="border lg:px-2 py-1">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
            </label>

            <label className="lg:flex lg:items-center lg:space-x-2 hidden ">
              <span>Sort By</span>
              <select className="border lg:px-2 py-1">
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      {/* products */}
      <div className="ml-24">
      <div className="lg:flex gap-[30px] flex-wrap mt-12 w-full">
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic1} alt="game" className="" />
          <div className="gap-3 ml-2 w-[201px] h-6 ">
            <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">
              Syltherine
            </h2>
            <h2 className="font-[500px] mt-2 text-graay2 text-base">
              Stylish cafe chair
            </h2>
            <div className="flex w-[502px] gap-5 h-6">
              <h2 className="font-semibold leading-[30px] text-[20px]">
                Rp 2.500.000
              </h2>
              <h2 className="font-[400px] text-base text-graay3 line-through">
                Rp 3.500.000
              </h2>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic2} alt="chair" className="" />
          <div className="gap-3 ml-2  w-[201px] h-6 ">
            <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">
              Leviosa
            </h2>
            <h2 className="font-[500px] mt-2 text-graay2 text-base">
              Stylish cafe chair
            </h2>
            <div className="flex w-[502px] gap-5 h-6">
              <h2 className="font-semibold leading-[30px] text-[20px]">
                Rp 2.500.000
              </h2>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic3} alt="sofa" className="" />
          <div className="gap-3 ml-2 w-[201px] h-6 ">
            <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">
              Lolito
            </h2>
            <h2 className="font-[500px] mt-2 text-graay2 text-base">
              Luxury big sofa
            </h2>
            <div className="flex w-[502px] gap-5 h-6">
              <h2 className="font-semibold leading-[30px] text-[20px]">
                Rp 7.000.000
              </h2>
              <h2 className="font-[400px] text-base text-graay3 line-through">
                Rp 14.000.000
              </h2>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 bg-graay h-[390px] gap-4 w-[270px]">
          <Image src={pic4} alt="keyboard" className="" />
          <div className="gap-3 ml-2 w-[] h-6 ">
            <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">
              Respira
            </h2>
            <h2 className="font-[500px] mt-2 text-graay2 text-base">
              Outdoor bar table
            </h2>
            <div className="flex w-[] gap-5 h-6">
              <h2 className="font-semibold leading-[30px] text-[20px]">
                Rp 2.500.000
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-[30px] mt-12 w-full">
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic1} alt="game" className="" />
          <div className="gap-3 ml-2 w-[201px] h-6 ">
            <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">
              Syltherine
            </h2>
            <h2 className="font-[500px] mt-2 text-graay2 text-base">
              Stylish cafe chair
            </h2>
            <div className="flex w-[502px] gap-5 h-6">
              <h2 className="font-semibold leading-[30px] text-[20px]">
                Rp 2.500.000
              </h2>
              <h2 className="font-[400px] text-base text-graay3 line-through">
                Rp 3.500.000
              </h2>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic2} alt="chair" className="" />
          <div className="gap-3 ml-2  w-[201px] h-6 ">
            <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">
              Leviosa
            </h2>
            <h2 className="font-[500px] mt-2 text-graay2 text-base">
              Stylish cafe chair
            </h2>
            <div className="flex w-[502px] gap-5 h-6">
              <h2 className="font-semibold leading-[30px] text-[20px]">
                Rp 2.500.000
              </h2>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic3} alt="sofa" className="" />
          <div className="gap-3 ml-2 w-[201px] h-6 ">
            <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">
              Lolito
            </h2>
            <h2 className="font-[500px] mt-2 text-graay2 text-base">
              Luxury big sofa
            </h2>
            <div className="flex w-[502px] gap-5 h-6">
              <h2 className="font-semibold leading-[30px] text-[20px]">
                Rp 7.000.000
              </h2>
              <h2 className="font-[400px] text-base text-graay3 line-through">
                Rp 14.000.000
              </h2>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 bg-graay h-[390px] gap-4 w-[270px]">
          <Image src={pic4} alt="keyboard" className="" />
          <div className="gap-3 ml-2 w-[] h-6 ">
            <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">
              Respira
            </h2>
            <h2 className="font-[500px] mt-2 text-graay2 text-base">
              Outdoor bar table
            </h2>
            <div className="flex w-[] gap-5 h-6">
              <h2 className="font-semibold leading-[30px] text-[20px]">
                Rp 2.500.000
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-[30px] mt-12 w-full">
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic1} alt="game" className="" />
          <div className="gap-3 ml-2 w-[201px] h-6 ">
            <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">
              Syltherine
            </h2>
            <h2 className="font-[500px] mt-2 text-graay2 text-base">
              Stylish cafe chair
            </h2>
            <div className="flex w-[502px] gap-5 h-6">
              <h2 className="font-semibold leading-[30px] text-[20px]">
                Rp 2.500.000
              </h2>
              <h2 className="font-[400px] text-base text-graay3 line-through">
                Rp 3.500.000
              </h2>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic2} alt="chair" className="" />
          <div className="gap-3 ml-2  w-[201px] h-6 ">
            <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">
              Leviosa
            </h2>
            <h2 className="font-[500px] mt-2 text-graay2 text-base">
              Stylish cafe chair
            </h2>
            <div className="flex w-[502px] gap-5 h-6">
              <h2 className="font-semibold leading-[30px] text-[20px]">
                Rp 2.500.000
              </h2>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic3} alt="sofa" className="" />
          <div className="gap-3 ml-2 w-[201px] h-6 ">
            <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">
              Lolito
            </h2>
            <h2 className="font-[500px] mt-2 text-graay2 text-base">
              Luxury big sofa
            </h2>
            <div className="flex w-[502px] gap-5 h-6">
              <h2 className="font-semibold leading-[30px] text-[20px]">
                Rp 7.000.000
              </h2>
              <h2 className="font-[400px] text-base text-graay3 line-through">
                Rp 14.000.000
              </h2>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 bg-graay h-[390px] gap-4 w-[270px]">
          <Image src={pic4} alt="keyboard" className="" />
          <div className="gap-3 ml-2 w-[] h-6 ">
            <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">
              Respira
            </h2>
            <h2 className="font-[500px] mt-2 text-graay2 text-base">
              Outdoor bar table
            </h2>
            <div className="flex w-[] gap-5 h-6">
              <h2 className="font-semibold leading-[30px] text-[20px]">
                Rp 2.500.000
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-[30px] mt-12 w-full">
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic1} alt="game" className="" />
          <div className="gap-3 ml-2 w-[201px] h-6 ">
            <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">
              Syltherine
            </h2>
            <h2 className="font-[500px] mt-2 text-graay2 text-base">
              Stylish cafe chair
            </h2>
            <div className="flex w-[502px] gap-5 h-6">
              <h2 className="font-semibold leading-[30px] text-[20px]">
                Rp 2.500.000
              </h2>
              <h2 className="font-[400px] text-base text-graay3 line-through">
                Rp 3.500.000
              </h2>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic2} alt="chair" className="" />
          <div className="gap-3 ml-2  w-[201px] h-6 ">
            <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">
              Leviosa
            </h2>
            <h2 className="font-[500px] mt-2 text-graay2 text-base">
              Stylish cafe chair
            </h2>
            <div className="flex w-[502px] gap-5 h-6">
              <h2 className="font-semibold leading-[30px] text-[20px]">
                Rp 2.500.000
              </h2>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic3} alt="sofa" className="" />
          <div className="gap-3 ml-2 w-[201px] h-6 ">
            <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">
              Lolito
            </h2>
            <h2 className="font-[500px] mt-2 text-graay2 text-base">
              Luxury big sofa
            </h2>
            <div className="flex w-[502px] gap-5 h-6">
              <h2 className="font-semibold leading-[30px] text-[20px]">
                Rp 7.000.000
              </h2>
              <h2 className="font-[400px] text-base text-graay3 line-through">
                Rp 14.000.000
              </h2>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 bg-graay h-[390px] gap-4 w-[270px]">
          <Image src={pic4} alt="keyboard" className="" />
          <div className="gap-3 ml-2 w-[] h-6 ">
            <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">
              Respira
            </h2>
            <h2 className="font-[500px] mt-2 text-graay2 text-base">
              Outdoor bar table
            </h2>
            <div className="flex w-[] gap-5 h-6">
              <h2 className="font-semibold leading-[30px] text-[20px]">
                Rp 2.500.000
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-10 mb-8 items-center justify-center text-center">
        <h1 className="bg-peach hover:bg-brown rounded px-5 py-2">1</h1>
        <h1 className="bg-peach hover:bg-brown rounded px-5 py-2">2</h1>
        <h1 className="bg-peach hover:bg-brown rounded px-5 py-2">3</h1>
        <h1 className="bg-peach hover:bg-brown rounded px-5 py-2">Next</h1>
      </div>
      </div>
      <div className="bg-peach py-10">
    <div className="container mx-auto flex flex-wrap justify-around">
      {/* Feature Item */}
      <div className="flex items-center space-x-4 mb-6 md:mb-0">
        <HiOutlineTrophy className="w-12 h-12 text-gray-800" />
        <div>
          <h1 className="text-lg font-semibold">High Quality</h1>
          <p className="text-sm text-gray-700">Crafted from top materials</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 mb-6 md:mb-0">
        <GoVerified className="w-12 h-12 text-gray-800" />
        <div>
          <h1 className="text-lg font-semibold">Warranty Protection</h1>
          <p className="text-sm text-gray-700">Over 2 years</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 mb-6 md:mb-0">
        <Image src={hand} alt="hand" className="w-12 h-12" />
        <div>
          <h1 className="text-lg font-semibold">Free Shipping</h1>
          <p className="text-sm text-gray-700">Order over 150 $</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Image src={head} alt="hand" className="w-12 h-12" />
        <div>
          <h1 className="text-lg font-semibold">24/7 Support</h1>
          <p className="text-sm text-gray-700">Dedicated support</p>
        </div>
      </div>
    </div>
  
      </div>
    </div>
  );
};

export default page;
