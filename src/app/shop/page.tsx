import React from "react";
import Image from "next/image";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { BsFillGridFill, BsViewList } from "react-icons/bs";
import Link from "next/link";
import CustomerCare from "@/components/customer-care";
import Banner from "@/components/banner";
import { client } from "@/sanity/lib/client";
import { GoArrowSwitch } from "react-icons/go";
import { IoShareSocialSharp } from "react-icons/io5";
import AddToCart from "@/components/addtocart2";
import AddToList from "@/components/addtowishlist";

const formatPrice = (price: number) => {
  const priceStr = price.toString();
  const formatted = priceStr.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  return formatted;
};

const Shop = async () => {
  let products = [];

  try {
    // Fetch products from Sanity
    const query = `*[_type == "product"] {
  _id,
  title,
  "productImage": productImage.asset->url,
  price,
  tags,
  discountPercentage,
  isNew
}
     
    `;
    products = await client.fetch(query);
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <>
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
        <div className="px-6 sm:px-12 mt-8 lg:px-24 justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product: any) => (
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
                    <AddToCart
                      product={{
                        id: product._id,
                        title: product.title,
                        price: product.price,
                        image: product.productImage,
                      }}
                    />
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
            <h1 className="text-center text-red-600 items-center text-xl">Products not found</h1>
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
    </>
  );
};

export default Shop;
