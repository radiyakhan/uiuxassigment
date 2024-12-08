import React from "react";
import Image from "next/image";
import bg from "../../../public/shop.png";
import set from "../../../public/chairset.png";
import hand from "../../../public/hand.png";
import head from "../../../public/head.png";
import { HiOutlineTrophy } from "react-icons/hi2";
import { GoVerified } from "react-icons/go";

const page = () => {
  return (
    <div>
      {/* Background Image */}
      <div className="relative w-full h-[400px]">
        <Image
          src={bg}
          alt="Shop Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black">
          <p className="font-medium text-3xl sm:text-4xl md:text-5xl">Cart</p>
          <h1 className="font-light text-sm sm:text-base mt-2">
            Home &gt; Cart
          </h1>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="min-h-screen  flex items-center justify-center">
          <div className="p-6 max-w-5xl w-full ">
            {/* Cart Header */}
            <div className="flex lg:justify-between items-center pb-4 bg-[#F9F1E7] py-3">
              <h2 className="font-semibold text-[16px] ml-[160px]">Product</h2>
              <h2 className="font-semibold text-[16px] mr-[140px] ml-[110px]">
                Price
              </h2>
              <div className="flex">
                <h2 className="font-semibold text-[16px] mr-[220px]">
                  Quantity
                </h2>
                <h2 className="font-semibold text-[16px] mr-[20px]">
                  Subtotal
                </h2>
              </div>
            </div>

            {/* Cart Items */}
            <div className="mt-60">
              <div className="flex items-center justify-between pb-4 ">
                {/* Product Image */}
                <div className="flex items-center space-x-4 ">
                  <Image
                    src={set}
                    alt="Asgaard sofa"
                    className="h-[105px] w-[108px] object-cover rounded-md"
                  />
                  <div className="flex  gap-20">
                    <h3 className="text-[#9F9F9F] text-[16px] font-medium text-lg mt-[8px] ml-[20px]">
                      Asgaard sofa
                    </h3>
                    <p className="text-gray-500 mt-[8px]">Rs. 250,000.00</p>
                    <input
                      type="number"
                      defaultValue="1"
                      className="w-11 border rounded-md text-center item-center py-1"
                    />

                    <p className="text-black mt-[8px]">Rs. 250,000.00</p>
                    <button className="text-red-500 hover:text-red-700">
                      🗑
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center  justify-center min-h-screen ">
          <div className="bg-[#F9F1E7] py-11  ">
            {/* Cart Header */}
            <div className="p-2 mb-1">
              <h2 className="font-semibold text-center w-[179px] h-[179px] text-[32px] ml-[120]  ">
                Cart Totals
              </h2>
            </div>

            {/* Cart Items */}
            <div className="p-2 mb-2 mt-[-90px]">
              <div className="items-center justify-between pb-1 px-20   ">
                <h2 className="flex items-center gap-x-16 text-lg mt-[-18px]">
                  <span>Subtotal</span>
                  <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
                </h2>
                <br />
                <br />
                <h2 className="flex items-center gap-x-16 text-lg  ">
                  <span>Total</span>
                  <span className="text-[#B88E2F]">Rs. 250,000.00</span>
                </h2>
              </div>

              {/* Cart Totals */}
              <div className=" rounded-lg p-4"></div>
              <button className="ml-[80px] w-[222px] border-2 border-black rounded-[15px] py-3 font-400 text-[20px] hover:bg-black hover:text-white transition">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-peach py-10">
        <div className="container mx-auto flex flex-wrap justify-around">
          {/* Feature Item */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <HiOutlineTrophy className="w-12 h-12 text-gray-800" />
            <div>
              <h1 className="text-lg font-semibold">High Quality</h1>
              <p className="text-sm text-gray-700">
                Crafted from top materials
              </p>
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
