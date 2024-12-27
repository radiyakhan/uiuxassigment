import { HiOutlineTrophy } from "react-icons/hi2";

import Image from "next/image";
import Link from "next/link";
import { GoVerified } from "react-icons/go";

export default function Cart() {
  return (
    <div>
      <div
        className="bg-white py-6 shadow-md w-full h-[316px] items-center space-y-6"
        style={{
          backgroundImage: `url('/shop.png')`,
        }}
      >
        <div className="container mx-auto flex flex-col items-center py-20">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-semibold">Cart</h1>
            <p className="text-sm text-black">Home &gt; Cart</p>
          </div>
        </div>
      </div>

      <div className="h-auto lg:h-[525px] flex justify-center items-center px-4 md:px-6 lg:px-0 xl:my-0 my-5">
        <div className="h-auto lg:h-[390px] w-full lg:w-[1240px] flex flex-col xl:flex-row justify-between gap-6">
          {/* product */}
          <div className="w-full lg:w-[817px] h-auto lg:h-[215px] flex flex-col justify-between">
            <div className="h-[55px] bg-[#F9F1E7] flex items-center px-4 lg:px-40 gap-4 lg:gap-28">
              <p className="font-poppins font-medium text-sm lg:text-base">Product</p>
              <p className="font-poppins font-medium text-sm lg:text-base">Price</p>
              <p className="font-poppins font-medium text-sm lg:text-base ml-3">Quantity</p>
              <p className="font-poppins font-medium text-sm lg:text-base">Subtotal</p>
            </div>

            <div className="h-auto lg:h-[108px] flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 py-4 lg:py-0">
              <Image
                src={"/chairset.png"}
                alt="product image"
                height={105}
                width={108}
                className="object-contain"
              />

              <div className="h-auto lg:h-[25px] flex flex-col lg:flex-row gap-4 lg:gap-20 items-center">
                <p className="font-poppins text-sm lg:text-base font-normal text-[#9F9F9F]">
                  Asgaard sofa
                </p>
                <p className="font-poppins text-sm lg:text-base font-normal text-[#9F9F9F]">
                  Rs. 250,000.00
                </p>
                <p className="font-poppins text-sm lg:text-base font-normal border border-[#9F9F9F] flex items-center justify-center w-8 h-8 rounded-md">
                  1
                </p>
                <p className="font-poppins text-sm lg:text-base font-normal">
                  Rs. 250,000.00
                </p>
              </div>

              <Image
                src={"/delete.png"}
                alt="product image"
                height={21.88}
                width={21}
                className="hover:cursor-pointer"
              />
            </div>
          </div>

          {/* price */}
          <div className="h-auto lg:h-[390px] w-full lg:w-[393px] flex flex-col items-center justify-center gap-10 bg-[#F9F1E7] p-6 lg:p-0">
            <h3 className="font-poppins font-semibold text-2xl lg:text-[32px]/[48px]">
              Cart Totals
            </h3>

            <div className="flex flex-col gap-4 lg:gap-7 mt-3">
              <span className="flex justify-between gap-4">
                <p className="font-poppins text-sm lg:text-base font-medium">Subtotal</p>
                <p className="font-poppins text-sm lg:text-base font-normal text-[#9F9F9F]">
                  Rs. 250,000.00
                </p>
              </span>

              <span className="flex justify-between gap-4">
                <p className="font-poppins text-sm lg:text-base font-medium">Total</p>
                <p className="text-[#B88E2F] text-lg lg:text-xl/[30px] font-medium font-poppins">
                  Rs. 250,000.00
                </p>
              </span>
            </div>

            <Link href={"/checkout"}>
              <button
                type="button"
                className="text-lg lg:text-xl/[30px] font-normal h-12 lg:h-[58px] border border-black w-[222px] rounded-xl"
              >
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-auto lg:h-[270px] flex flex-col lg:flex-row items-center justify-center bg-[#FAF3EA] px-4 py-6">
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {/* High Quality */}
              <div className="h-auto lg:h-[70px] w-full sm:w-[337px] flex items-center gap-2">
                <HiOutlineTrophy className="w-12 h-12 text-gray-800" />
                <div>
                  <h2 className="text-[20px]/[30px] sm:text-[25px]/[37.5px] font-semibold font-poppins text-[#242424]">
                    High Quality
                  </h2>
                  <p className="text-base/[24px] sm:text-xl/[30px] font-poppins font-medium text-[#898989]">
                    crafted from top materials
                  </p>
                </div>
              </div>
      
              {/* Warranty Protection */}
              <div className="h-auto lg:h-[70px] w-full sm:w-[338px] flex items-center gap-2">
                <GoVerified className="w-12 h-12 text-gray-800" />
                <div>
                  <h2 className="text-[20px]/[30px] sm:text-[25px]/[37.5px] font-semibold font-poppins text-[#242424]">
                    Warranty Protection
                  </h2>
                  <p className="text-base/[24px] sm:text-xl/[30px] font-poppins font-medium text-[#898989]">
                    Over 2 years
                  </p>
                </div>
              </div>
      
              {/* Free Shipping */}
              <div className="h-auto lg:h-[70px] w-full sm:w-[244px] flex items-center gap-2">
                <Image
                  src={"/hand.png"}
                  alt="Free Shipping"
                  height={60}
                  width={60}
                />
                <div>
                  <h2 className="text-[20px]/[30px] sm:text-[25px]/[37.5px] font-semibold font-poppins text-[#242424]">
                    Free Shipping
                  </h2>
                  <p className="text-base/[24px] sm:text-xl/[30px] font-poppins font-medium text-[#898989]">
                    Order over 150 $
                  </p>
                </div>
              </div>
      
              {/* 24/7 Support */}
              <div className="h-auto lg:h-[70px] w-full sm:w-[249px] flex items-center gap-2">
                <Image
                  src={"/head.png"}
                  alt="Customer Support"
                  height={60}
                  width={60}
                />
                <div>
                  <h2 className="text-[20px]/[30px] sm:text-[25px]/[37.5px] font-semibold font-poppins text-[#242424]">
                    24 / 7 Support
                  </h2>
                  <p className="text-base/[24px] sm:text-xl/[30px] font-poppins font-medium text-[#898989]">
                    Dedicated support
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}