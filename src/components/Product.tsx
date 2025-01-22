// import React from "react";
// import Image from "next/image";
// import { IoShareSocialSharp } from "react-icons/io5";
// import { GoArrowSwitch } from "react-icons/go";
// import { FaHeart } from "react-icons/fa";
// import Link from "next/link";

// type Product = {
//   id: number;
//   name: string;
//   description: string;
//   price: { new: number; old?: number };
//   image: string;
//   discount?: string;
//   isNew?: boolean;
// };

// // Array of Products
// const products: Product[] = [
//   {
//     id: 1,
//     name: "Syltherine",
//     description: "Stylish cafe chair",
//     price: { new: 2500000, old: 3500000 },
//     image: "/sylthe.jpg",
//     discount: "30%",
//   },
//   {
//     id: 2,
//     name: "Leviosa",
//     description: "Stylish cafe chair",
//     price: { new: 2500000 },
//     image: "/chair.jpg",
//   },
//   {
//     id: 3,
//     name: "Lolito",
//     description: "Luxury big sofa",
//     price: { new: 7500000, old: 14000000 },
//     image: "/sofa.jpg",
//     discount: "50%",
//   },
//   {
//     id: 4,
//     name: "Respira",
//     description: "Outdoor bar table and stool",
//     price: { new: 5000000 },
//     image: "/room.jpg",
//     isNew: true,
//   },
//   {
//     id: 5,
//     name: "Grifo",
//     description: "Night lamp",
//     price: { new: 1500000 },
//     image: "/lamp.jpg",
//   },
//   {
//     id: 6,
//     name: "Muggo",
//     description: "Small mug",
//     price: { new: 150000 },
//     image: "/muggo.jpg",
//     isNew: true,
//   },
//   {
//     id: 7,
//     name: "Pingky",
//     description: "Cute bed set",
//     price: { new: 7000000, old: 14000000 },
//     image: "/sofaset.jpg",
//     discount: "50%",
//   },
//   {
//     id: 8,
//     name: "Potty",
//     description: "Minimalist flower pot",
//     price: { new: 500000 },
//     image: "/potty.jpg",
//     isNew: true,
//   },
// ];

// const Product: React.FC = () => {
//   const formatPrice = (price: number) => {
//     // Convert number to string and format it as X.XX.XXX
//     const priceStr = price.toString();
//     const formatted = priceStr.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
//     return formatted;
//   };

//   return (
//     <div className="p-0">
//       <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
//       <div className="px-6 sm:px-12 lg:px-24 justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="relative bg-white border p-4 group hover:bg-gray-300 transition-colors mx-auto w-full max-w-[270px] h-auto overflow-hidden"
//           >
//             {/* Discount or New Tag */}
//             {(product.discount || product.isNew) && (
//               <div
//                 className={`absolute top-2 right-2 px-2 py-1 text-white text-sm font-bold rounded-full ${
//                   product.discount ? "bg-red-500" : "bg-green-500"
//                 }`}
//               >
//                 {product.discount || "NEW"}
//               </div>
//             )}

//             {/* Product Image */}
//             <Image
//               src={product.image}
//               alt={product.name}
//               width={301}
//               height={301}
//               className="w-full h-[301px] object-cover mb-4"
//             />

//             {/* Product Info */}
//             <h2 className="text-xl text-[#3A3A3A] font-semibold mb-2">{product.name}</h2>
//             <p className="text-gray-700 text-sm mb-2">{product.description}</p>
//             <div className="text-sm font-medium mb-4">
//               <span className="text-[#3A3A3A] font-semibold">
//                 Rp{formatPrice(product.price.new)}
//               </span>
//               {!(product.isNew || product.discount) && product.price.old && (
//                 <span className="line-through text-gray-500 ml-2">
//                   Rp{formatPrice(product.price.old)}
//                 </span>
//               )}
//             </div>

//             {/* Hover Options */}
//             <Link href={''}>
//             <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-transform duration-200 ease-in-out">
//               {/* Add to Cart Button */}
//               <Link href={'/cart'}><button className="bg-white text-yellow-600 font-bold py-2 px-4 rounded shadow mb-2 hover:shadow-lg hover:bg-graay transition-shadow">
//                 Add to Cart
//               </button></Link>
//               {/* Icons Row */}
//               <div className="flex justify-center space-x-2 text-white text-sm mt-2">
//                 <button className="hover:text-black flex items-center">
//                   <IoShareSocialSharp /> Share
//                 </button>
//                 <button className="hover:text-black flex items-center">
//                   <GoArrowSwitch /> Compare
//                 </button>
//                 <button className="hover:text-black flex items-center">
//                   <FaHeart />
//                   Like
//                 </button>
//               </div>
//             </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//       {/* Button to show more Products */}
//       <div className="text-center mt-6">
//         <button className="bg-white text-[#B88E2F] border border-[#B88E2F] font-bold py-3 px-16 hover:bg-lime-200 transition-colors">
//           Show More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Product;

// import React from "react";
// import Image from "next/image";
// import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
// import { BsFillGridFill, BsViewList } from "react-icons/bs";
// import Link from "next/link";
// import CustomerCare from "@/components/customer-care";
// import Banner from "@/components/banner";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { FaHeart } from "react-icons/fa";
// import { GoArrowSwitch } from "react-icons/go";
// import { IoShareSocialSharp } from "react-icons/io5";
// import AddToCart from "@/components/addtocart2";
// import AddToList from "@/components/addtowishlist";

// const Shop = async () => {
// const data = await client.fetch(`*[_type == "product"]{
//   _id,
//   title,
//   description,
//   productImage {
//     asset->{
//       url
//     },
//   },
//   price,
//   tags,
//   dicountPercentage,
//   isNew
// }`);
//   const data = async () => {
//     const query = await client.fetch( `
//       *[_type == "product"] {
//         _id,
//         title,
//         description,
//         "imageUrl": productImage.asset->url,
//         price,
//         tags,
//         dicountPercentage,
//         isNew
//       }
//     `);
//   // console.log("Fetched Data:", data);
//   try {
//     const products = await client.fetch(query);
//     console.log('Fetched products:', products);
//     return products;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// };

// data();
//   const formatPrice = (price: number) => {
//     // Convert number to string and format it as X.XX.XXX
//     const priceStr = price.toString();
//     const formatted = priceStr.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
//     return formatted;
//   };

// import React from "react";
// import Image from "next/image";
// import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
// import { BsFillGridFill, BsViewList } from "react-icons/bs";
// import Link from "next/link";
// import CustomerCare from "@/components/customer-care";
// import Banner from "@/components/banner";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { FaHeart } from "react-icons/fa";
// import { GoArrowSwitch } from "react-icons/go";
// import { IoShareSocialSharp } from "react-icons/io5";
// import AddToCart from "@/components/addtocart2";
// import AddToList from "@/components/addtowishlist";

// const formatPrice = (price: number) => {
//   const priceStr = price.toString();
//   const formatted = priceStr.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
//   return formatted;
// };

// const Shop = async () => {
//   // Fetch products from Sanity
//   const query = `
//     *[_type == "product"] {
//       _id,
//       title,
//       "productImage": productImage.asset->url,
//       price,
//       tags,
//       discountPercentage,
//       isNew
//     }
//   `;
//   const products = await client.fetch(query);
//   return (
//     <>
//     <div className="min-h-screen">
//       {/* Header Section */}
//       <Banner name="Shop" title="Shop" logo="/logo.png" />
//       {/* Filter Section */}
//       <div className="flex flex-col items-center bg-peach py-10">
//         <div className="flex justify-between items-center w-full h-2 max-w-4xl p-4">
//           {/* Filters */}
//           <div className="lg:flex gap-3 space-x-4">
//             <HiMiniAdjustmentsHorizontal className="w-[20px] h-[20px]" />
//             <h1 className="font-[400px] text-[20px] leading-[30px] w-12 h-[30px] mt-[-9px]">
//               Filter
//             </h1>
//             <BsFillGridFill className="w-[18px] h-[18px]" />
//             <BsViewList className="w-[20px] h-[20px]" />
//           </div>

//           {/* Pagination Info */}
//           <div className="lg:w-[40px] border-[1px] rotate-90 text-black "></div>
//           <div className="text-center text-sm">
//             <span className=" lg:px-2 py-1 lg:ml-[-180px]">
//               Showing 1-16 of 32 results
//             </span>
//           </div>
//           {/* Sorting */}
//           <div className="lg:flex space-x-4 lg:mr-[-98px]">
//             <label className="flex items-center space-x-1">
//               <span>Show</span>
//               <select className="border lg:px-2 py-1">
//                 <option>10</option>
//                 <option>20</option>
//                 <option>50</option>
//               </select>
//             </label>

//             <label className="lg:flex lg:items-center lg:space-x-2  ">
//               <span>Sort By</span>
//               <select className="border lg:px-2 py-1">
//                 <option>Default</option>
//                 <option>Price: Low to High</option>
//                 <option>Price: High to Low</option>
//               </select>
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Product Grid */}

//       <div className="px-6 sm:px-12 mt-8 lg:px-24 justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//        {products.map((product: any) => (
//           <div
//             key={product._id}
//             className="relative bg-white border p-4 group hover:bg-gray-300 transition-colors mx-auto w-full max-w-[270px] h-auto overflow-hidden"
//           >
//             {/* Discount or New Tag */}
//             {(product.discount || product.isNew) && (
//               <div
//                 className={`absolute top-2 right-2 px-2 py-1 text-white text-sm font-bold rounded-full ${
//                   product.discountPercentage ? "bg-red-500" : "bg-green-500"
//                 }`}
//               >
//                 {product.discount || "NEW"}
//               </div>
//             )}

//             {/* Product Image */}
//             <Image
//               src={product.productImage || "/placeholder-image.jpg"}
//               alt={product.title}
//               width={301}
//               height={301}
//               className="w-full h-[301px] object-cover mb-4"
//             />

//             {/* Product Info */}
//             <h2 className="text-xl text-[#3A3A3A] font-semibold mb-2">{product.title}</h2>
//             <p className="text-gray-700 text-sm line-clamp-1 mb-2">{product.tags?.join(", ")}</p>
//             <div className="text-sm font-medium mb-4">
//               <span className="text-[#3A3A3A] font-semibold">
//                 Rs. {formatPrice(product.price)}
//               </span>
//             </div>

//             {/* Hover Options */}
//             <Link href={`/shop/${product._id}`}>
//               <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-transform duration-200 ease-in-out">
//                 <AddToCart
//                   product={{
//                     id: product._id,
//                     title: product.title,
//                     price: product.price,
//                     image: product.productImage,
//                   }}
//                 />
//                 <div className="flex justify-center space-x-2 text-white text-sm mt-2">
//                   <button className="hover:text-black flex items-center">
//                     <IoShareSocialSharp /> Share
//                   </button>
//                   <Link href={"/product-comparision"}>
//                     <button className="hover:text-black flex items-center">
//                       <GoArrowSwitch /> Compare
//                     </button>
//                   </Link>
//                   <AddToList
//                     product={{
//                       id: product._id,
//                       title: product.title,
//                       price: product.price,
//                       image: product.productImage,
//                     }}
//                   />
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>

//       <div className="flex gap-5 mt-10 mb-8 items-center justify-center text-center">
//         <h1 className="bg-peach hover:bg-brown rounded px-5 py-2">1</h1>
//         <h1 className="bg-peach hover:bg-brown rounded px-5 py-2">2</h1>
//         <h1 className="bg-peach hover:bg-brown rounded px-5 py-2">3</h1>
//         <h1 className="bg-peach hover:bg-brown rounded px-5 py-2">Next</h1>
//       </div>

//       {/* Pagination */}
//       <CustomerCare />
//     </div>
//     </>
//   );
// };

// export default Shop;
"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
          <h1 className="text-center text-red-600 items-center text-xl">
            Products not found
          </h1>
        )}
      </div>
      {/* Button to show more Products */}
      <div className="text-center mt-6">
        <button className="bg-white text-[#B88E2F] border border-[#B88E2F] font-bold py-3 px-16 hover:bg-lime-200 transition-colors">
          Show More
        </button>
      </div>
    </div>
    </div>
  );
};


