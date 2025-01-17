import React from "react";
import Image from "next/image";
import { IoShareSocialSharp } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { BsFillGridFill, BsViewList } from "react-icons/bs";
import Link from "next/link";
import CustomerCare from "@/components/customer-care";
import Banner from "@/components/banner";

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
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: { new: 1500000 },
    image: "/lamp.jpg",
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: { new: 150000 },
    image: "/muggo.jpg",
    isNew: true,
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: { new: 7000000, old: 14000000 },
    image: "/sofaset.jpg",
    discount: "50%",
  },
  {
    id: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: { new: 500000 },
    image: "/potty.jpg",
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
      <Banner name="Shop" title="Shop" logo="/logo.png" />
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
        {Array.from({ length: 3 }).map((_, rowIndex) =>
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
              
              <Link href={`/shop/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={270} // Adjust based on your image dimensions
                  height={301} // Adjust based on your image dimensions
                  className="w-full h-[301px] object-cover mb-4"
                />
              </Link>

              {/* Product Info */}
             <Link href={`/shop/${product.id}`}>
             <h2 className="text-xl text-[#3A3A3A] font-semibold mb-2">
                {product.name}
              </h2></Link>
              <p className="text-gray-700 text-sm mb-2">
                {product.description}
              </p>
              <div className="text-sm font-medium mb-4">
                <span className="text-[#3A3A3A] font-semibold">
                  Rs. {formatPrice(product.price.new)}
                </span>
                {product.price.old && (
                  <span className="line-through text-gray-500 ml-2">
                    Rp{formatPrice(product.price.old)}
                  </span>
                )}
              </div>
              
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
      <CustomerCare />
    </div>
  );
};

export default Shop;
