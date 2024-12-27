import React from "react";
import Image from "next/image";
import { IoShareSocialSharp } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { FaHeart } from "react-icons/fa";



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

const Product: React.FC = () => {
  const formatPrice = (price: number) => {
    // Convert number to string and format it as X.XX.XXX
    const priceStr = price.toString();
    const formatted = priceStr.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    return formatted;
  };

  return (
    <div className="p-0">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="px-6 sm:px-12 lg:px-24 justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white border p-4 group hover:bg-gray-300 transition-colors mx-auto w-full max-w-[270px] h-auto overflow-hidden"
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
              width={301}
              height={301}
              className="w-full h-[301px] object-cover mb-4"
            />

            {/* Product Info */}
            <h2 className="text-xl text-[#3A3A3A] font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 text-sm mb-2">{product.description}</p>
            <div className="text-sm font-medium mb-4">
              <span className="text-[#3A3A3A] font-semibold">
                Rp{formatPrice(product.price.new)}
              </span>
              {!(product.isNew || product.discount) && product.price.old && (
                <span className="line-through text-gray-500 ml-2">
                  Rp{formatPrice(product.price.old)}
                </span>
              )}
            </div>

            {/* Hover Options */}
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-transform duration-200 ease-in-out">
              {/* Add to Cart Button */}
              <button className="bg-white text-yellow-600 font-bold py-2 px-4 rounded shadow mb-2 hover:shadow-lg hover:bg-graay transition-shadow">
                Add to Cart
              </button>
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
          </div>
        ))}
      </div>
      {/* Button to show more Products */}
      <div className="text-center mt-6">
        <button className="bg-white text-[#B88E2F] border border-[#B88E2F] font-bold py-3 px-16 hover:bg-lime-200 transition-colors">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Product;