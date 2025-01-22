"use client";
import Banner from "@/components/banner";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
interface WishItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}
const Page = () => {
  const [wishItems, setWishItems] = useState<WishItem[]>([]);
 

  useEffect(() => {
    const wishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    ) as WishItem[];
    setWishItems(wishlist);
    calculateTotal(wishlist);
  }, []);

  const calculateTotal = (cart: WishItem[]) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    console.log("Total Price:", total);
  };

  const handleRemoveItem = (id: number) => {
    const updatedList = wishItems.filter((item) => item.id !== id);
    setWishItems(updatedList);
    localStorage.setItem("List", JSON.stringify(updatedList));
    calculateTotal(updatedList);
  };

  return (
    <div>
      <Banner title="Wishlist " name="Wishlist" logo="/logo.png" />
      <div className="mb-16 gap-2 flex flex-col mt-16 justify-between">
        <div className="h-[55px] mb-16  bg-[#F9F1E7] flex items-center px-4 lg:px-96 gap-4 lg:gap-36">
          <p className="font-poppins font-medium text-sm lg:text-base">
            Product
          </p>
          <p className="font-poppins font-medium text-sm lg:text-base">Price</p>
        </div>
        {wishItems.length > 0 ? (
          wishItems.map((item) => (
            <div key={item.id} className="mb-3">
              <div className="h-auto pl-12 flex flex-col  lg:flex-row items-center gap-4 lg:gap-[220px] py-4 lg:py-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={105}
                  width={108}
                  className="object-contain "
                />

                <div className="h-auto lg:h-[25px] flex lg:flex-row gap-4 lg:gap-24 ">
                  <p className="font-poppins text-sm lg:text-base font-normal text-[#9F9F9F]">
                    {item.title}
                  </p>
                  <p className="font-poppins text-sm lg:text-base font-normal text-[#9F9F9F]">
                    Rs. {item.price}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="w-full md:w-1/5 text-center text-red-500 hover:text-red-700 font-bold mt-2 md:mt-0"
                >
                  <MdDelete className="text-2xl hover:text-red-700" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Page;

