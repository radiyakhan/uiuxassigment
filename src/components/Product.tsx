"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { GoArrowSwitch } from "react-icons/go";
import { IoShareSocialSharp } from "react-icons/io5";
// import AddToCart from "@/components/addtocart2";
import AddToList from "@/components/addtowishlist";

const formatPrice = (price: number) => {
  const priceStr = price.toString();
  const formatted = priceStr.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  return formatted;
};
export default function Product(){

  // let products = [];
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"] {
          _id,
          title,
          "productImage": productImage.asset->url,
          price,
          tags,
          discountPercentage,
          isNew
        }`;
        const fetchedProducts = await client.fetch(query);
        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Please try again later.");
      }
    };
    fetchProducts(); // Call the async function
  }, []); // Empty dependency array to run only once on mount

  if (error) {
    return <div>{error}</div>;
  }
  const topro = products.slice(0, 8)
  return (
    <div>
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

      {/* Product Grid */}
      <div className="px-6 sm:px-12 mt-8 lg:px-24 justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topro.length > 0 ? (
          topro.map((product: any) => (
            <div
              key={product._id}
              className="relative bg-white border p-4 group hover:bg-gray-300 transition-colors mx-auto w-full max-w-[270px] h-auto overflow-hidden"
            >
              {/* Discount or New Tag */}
              {(product.discount || product.isNew) && (
                <div
                  className={`absolute top-2 right-2 px-2 py-1 text-white text-sm font-bold rounded-full ${
                    product.discountPercentage ? "bg-red-500" : "bg-green-500"
                  }`}
                >
                  {product.discount || "NEW"}
                </div>
              )}

              {/* Product Image */}
              <Image
                src={product.productImage || "/placeholder-image.jpg"}
                alt={product.title}
                width={301}
                height={301}
                className="w-full h-[301px] object-cover mb-4"
              />

              {/* Product Info */}
              <h2 className="text-xl text-[#3A3A3A] font-semibold mb-2">
                {product.title}
              </h2>
              <p className="text-gray-700 text-sm line-clamp-1 mb-2">
                {product.tags?.join(", ")}
              </p>
              <div className="text-sm font-medium mb-4">
                <span className="text-[#3A3A3A] font-semibold">
                  Rs. {formatPrice(product.price)}
                </span>
              </div>

              {/* Hover Options */}
              <Link href={`/shop/${product._id}`}>
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-transform duration-200 ease-in-out">
                <Link href={`/shop/${product._id}`}>
                    <h1
                      
                      className="bg-white text-yellow-600 font-bold py-2 px-4 rounded shadow mb-2 hover:shadow-lg hover:bg-graay transition-shadow"
                    >
                      View Detail
                    </h1>
                    </Link>
                  <div className="flex justify-center space-x-2 text-white text-sm mt-2">
                    <button className="hover:text-black flex items-center">
                      <IoShareSocialSharp /> Share
                    </button>
                    <Link href={"/product-comparision"}>
                      <button className="hover:text-black flex items-center">
                        <GoArrowSwitch /> Compare
                      </button>
                    </Link>
                    <AddToList
                      product={{
                        id: product._id,
                        title: product.title,
                        price: product.price,
                        image: product.productImage,
                      }}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <h1 className="text-center text-red-600 items-center text-xl">
            Products not found
          </h1>
        )}
      </div>
      {/* Button to show more Products */}
      <Link href={'/shop'}>
      <div className="text-center mt-6">
        <button className="bg-white text-[#B88E2F] border hover:border-x-[3px] hover:border-y-[3px] border-[#B88E2F] font-bold py-3 px-16  transition-colors">
          Show More
        </button>
      </div></Link>
    </div>
    </div>
  );
};


