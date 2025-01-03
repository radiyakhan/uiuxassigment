import React from "react";
import Image from "next/image";
import { IoShareSocialSharp } from "react-icons/io5";
import { GoArrowSwitch, GoVerified } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { HiMiniAdjustmentsHorizontal, HiOutlineTrophy } from "react-icons/hi2";
import { BsFillGridFill, BsViewList } from "react-icons/bs";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  description: string;
  price: { new: number; old?: number };
  image: string;
  discount?: string;
  isNew?: boolean;
};
// Array of Products

const products: Product[] = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: { new: 2500000, old: 3500000 },
    image: "/sylthe.jpg",
    discount: "30%",
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: { new: 2500000 },
    image: "/chair.jpg",
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: { new: 7500000, old: 14000000 },
    image: "/sofa.jpg",
    discount: "50%",
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: { new: 5000000 },
    image: "/room.jpg",
    isNew: true,
  },
];

const Shop = () => {
  const formatPrice = (price: number) => {
    // Convert number to string and format it as X.XX.XXX
    const priceStr = price.toString();
    const formatted = priceStr.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    return formatted;
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div
        className="bg-white py-6 shadow-md w-full h-[316px] items-center space-y-6"
        style={{
          backgroundImage: `url('/shop.png')`,
        }}
      >
        <div className="container mx-auto flex flex-col items-center py-20">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-semibold">Shop</h1>
            <p className="text-sm text-black">Home &gt; Shop</p>
          </div>
        </div>
      </div>
      {/* Filter Section */}
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
          <div className="lg:w-[40px] border-[1px] rotate-90 text-black "></div>
          <div className="text-center text-sm">
            <span className=" lg:px-2 py-1 lg:ml-[-180px]">
              Showing 1-16 of 32 results
            </span>
          </div>
          {/* Sorting */}
          <div className="lg:flex space-x-4 lg:mr-[-98px]">
            <label className="flex items-center space-x-1">
              <span>Show</span>
              <select className="border lg:px-2 py-1">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
            </label>

            <label className="lg:flex lg:items-center lg:space-x-2  ">
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

      {/* Product Grid */}
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, rowIndex) =>
          products.map((product) => (
            <div
              key={`${rowIndex}-${product.id}`}
              className="relative bg-white border p-4 group hover:bg-gray-300 transition-colors mx-auto w-[270px] h-[446px] overflow-hidden"
            >
              {/* Discount or New Tag */}
              {(product.discount || product.isNew) && (
                <div
                  className={`absolute top-2 right-2 px-2 py-1 text-white text-sm font-bold rounded-full ${
                    product.discount ? "bg-red-500" : "bg-green-500"
                  }`}
                >
                  {product.discount || "NEW"}
                </div>
              )}

              {/* Product Image */}
              
              <Image
                src={product.image}
                alt={product.name}
                width={270} // Adjust based on your image dimensions
                height={301} // Adjust based on your image dimensions
                className="w-full h-[301px] object-cover mb-4"
              />

              {/* Product Info */}
              <h2 className="text-xl text-[#3A3A3A] font-semibold mb-2">
                {product.name}
              </h2>
              <p className="text-gray-700 text-sm mb-2">
                {product.description}
              </p>
              <div className="text-sm font-medium mb-4">
                <span className="text-[#3A3A3A] font-semibold">
                  Rp{formatPrice(product.price.new)}
                </span>
                {product.price.old && (
                  <span className="line-through text-gray-500 ml-2">
                    Rp{formatPrice(product.price.old)}
                  </span>
                )}
              </div>
              {/* Hover Options - Fixed Visibility */}
              <Link href={'/SingleProduct'}>
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-transform duration-200 ease-in-out">
                {/* Add to Cart Button */}
                <Link href={'/cart'}>
                <button className="bg-white text-yellow-600 font-bold py-2 px-4 rounded shadow mb-2 hover:shadow-lg hover:bg-green-500 transition-shadow">
                  Add to Cart
                </button>
                </Link>
                {/* Icons Row */}
                <div className="flex justify-center space-x-2 text-white text-sm mt-2">
                  <button className="hover:text-black flex items-center">
                    <IoShareSocialSharp /> Share
                  </button>
                  <button className="hover:text-black flex items-center">
                    <GoArrowSwitch /> Compare
                  </button>
                  <button className="hover:text-black flex items-center">
                    <FaHeart />
                    Like
                  </button>
                </div>
              </div>
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="flex gap-5 mt-10 mb-8 items-center justify-center text-center">
        <h1 className="bg-peach hover:bg-brown rounded px-5 py-2">1</h1>
        <h1 className="bg-peach hover:bg-brown rounded px-5 py-2">2</h1>
        <h1 className="bg-peach hover:bg-brown rounded px-5 py-2">3</h1>
        <h1 className="bg-peach hover:bg-brown rounded px-5 py-2">Next</h1>
      </div>

      {/* Pagination */}
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
};

export default Shop;
