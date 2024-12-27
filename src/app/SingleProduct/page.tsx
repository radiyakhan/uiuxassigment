"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaChevronRight, FaFacebook, FaLinkedin } from "react-icons/fa";

const page = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);
  const relatedImages = [
    "/Product-1.png",
    "/product-2.png",
    "/product-3.png",
    "/product-4.png",
  ];
  return (
    <div>
      <div className="bg-[#F9F1E7]">
        <div className="h-[100px] max-w-[1400px] pl-2 gap-4 md:gap-8 flex items-center xl:pl-12 mx-auto">
          <div className="flex gap-4 items-center">
            <p className="font-poppins text-base font-normal text-[#9F9F9F]">
              Home
            </p>
            <FaChevronRight />
          </div>
          <div className="flex gap-4 items-center">
            <p className="font-poppins text-base font-normal text-[#9F9F9F]">
              Shop
            </p>
            <FaChevronRight />
          </div>
          <div className="border-l items-center h-[40px] w-[120px] flex justify-end border-gray-700 pt-2 lg:pt-0">
            <p className="text-sm md:text-base text-center lg:text-left">
              Asgaard sofa
            </p>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="mx-auto max-w-[1400px] gap-6 lg:gap-16 px-10 py-6 flex md:flex-row flex-col">
        {/* Image Section */}
        <div className=" w-auto h-auto flex flex-col lg:flex-row lg:gap-5">
          <div className="flex lg:flex-col gap-2 mb-2 lg:gap-8">
            {relatedImages.map((img, index) => (
              <span
                key={index}
                className="w-[76px] h-[80px] rounded-md flex items-center bg-[#F9F1E7]"
              >
                <Image
                  src={img}
                  alt={`related image ${index + 1}`}
                  height={80}
                  width={76}
                />
              </span>
            ))}
          </div>
          <div className="lg:h-[415px] lg:w-[423px] bg-[#F9F1E7] flex justify-center items-center rounded-xl">
            <Image
              src="/Asgaard sofa 3.png"
              alt="Single Product Image"
              className="rounded-lg"
              height={391}
              width={481}
            />
          </div>
          <div className="h-auto lg:ml-10 flex flex-col gap-1">
            <h2 className="font-semibold text-[42px]/[63px]">
              Asgaard sofa
            </h2>
            <p className="text-[#9F9F9F] font-poppins font-medium text-2xl">
              Rs. 250,000.00
            </p>

            {/* Reviews and Description */}
            <div className="flex gap-2 items-center">
              <Image src="/stars.png" alt="rating" width={124} height={20} />
              <div className="border-l h-[30px] flex items-center pl-4">
                <p className="text-[#9F9F9F] text-sm font-poppins">
                  5 Customer Reviews
                </p>
              </div>
            </div>
            <p className="text-sm lg:w-[500px] font-poppins text-[#9F9F9F]">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            {/* Size Selection */}
            <div className="mt-3">
              <p className="font-poppins text-[#9F9F9F] text-sm">Size</p>
              <div className="flex gap-4">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className="w-[30px] h-[30px] flex items-center justify-center rounded-sm bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white"
                    aria-label={`Select size ${size}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <p className="font-poppins text-[#9F9F9F] text-sm">Color</p>
              <div className="flex gap-4">
                {["#816DFA", "black", "#B88E2F"].map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={`w-[30px] h-[30px] rounded-full`}
                    style={{ backgroundColor: color }}
                    aria-label={`Select color ${color}`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex flex-col xl:flex-row gap-5 mt-4">
              <span className="h-16 w-[123px] gap-7 border rounded-2xl flex items-center justify-center">
                <button type="button" onClick={decrement}>
                  -
                </button>
                <p>{count}</p>
                <button type="button" onClick={increment}>
                  +
                </button>
              </span>
              <Link href="/cart">
                <button
                  type="button"
                  className="h-16 w-[215px] border-2 border-black rounded-2xl flex items-center justify-center"
                >
                  Add To Cart
                </button>
              </Link>
              <Link href="/product-comparison">
                <button
                  type="button"
                  className="h-16 w-[215px] border-2 border-black rounded-2xl flex items-center justify-center"
                >
                  + Compare
                </button>
              </Link>
            </div>
            

            <div>
              <div>
                <Image alt="line" src='/line 7.png' width={605.01} height={5} className="mt-16"/>
              </div>
              <div className="mt-9 flex flex-col gap-4 text-graay2">
                <div>
                  <ul className="flex gap-4">
                    <li>SKU</li>
                    <li>:</li>
                    <li>SS001</li>
                  </ul>
                </div>
                <div>
                <ul className="flex gap-4">
                    <li>Category</li>
                    <li>:</li>
                    <li>Sofas</li>
                  </ul>
                </div>
                <div>
                <ul className="flex gap-4">
                    <li>Tags</li>
                    <li>:</li>
                    <li>Sofa, Chair, Home, Shop</li>
                  </ul>
                </div>
                <div>
                <ul className="flex gap-4">
                    <li>SKU</li>
                    <li>:</li>
                    <li className="flex gap-6 text-2xl text-black"><FaFacebook /> <FaLinkedin /> <AiFillTwitterCircle />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
