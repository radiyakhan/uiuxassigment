"use client";
import Image from "next/image";
import CustomerCare from "@/components/customer-care";
import Banner from "@/components/banner";
import { useState, useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const Page = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
    setCartItems(cart);
    calculateTotal(cart);
  }, []);

  const calculateTotal = (cart: CartItem[]) => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    console.log("Total Price:", total);
  };

  const handleRemoveItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleIncreaseQuantity = (id: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleDecreaseQuantity = (id: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Banner name="Cart" title="Cart" logo="/logo.png" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-0 my-5">
  <div className="flex flex-col xl:flex-row justify-between gap-6">
    {/* Product List */}
    <div className="w-full xl:w-[817px] bg-white rounded-lg p-4 overflow-x-auto">
      <div className="h-[55px] bg-[#F9F1E7] flex items-center px-4 lg:px-10 gap-4 min-w-[600px]">
        <p className="font-medium text-sm lg:text-base flex-1">Product</p>
        <p className="font-medium text-sm lg:text-base w-20 text-center">Price</p>
        <p className="font-medium text-sm lg:text-base w-24 text-center">Quantity</p>
        <p className="font-medium text-sm lg:text-base w-20 text-center">Subtotal</p>
      </div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b py-4 min-w-[600px]">
            {/* Product Details */}
            <div className="flex items-center gap-4 flex-1">
              {item.image && (
                <Image src={item.image} alt={item.title} width={80} height={80} className="rounded-md" />
              )}
              <div>
                <h1 className="font-semibold text-black text-sm md:text-base">{item.title}</h1>
                <div className="flex text-yellow-500 text-xs md:text-sm">
                  {[...Array(5)].map((_, i) => (
                    <IoIosStar key={i} />
                  ))}
                </div>
              </div>
            </div>

            <h1 className="w-20 text-center text-xs md:text-base">Rs. {item.price}</h1>

            {/* Quantity Controls */}
            <div className="flex items-center border border-gray-200 w-20 md:w-24 h-8 rounded-xl text-xs md:text-sm justify-center">
              <button className="px-2" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button className="px-2" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            </div>

            {/* Subtotal */}
            <h1 className="w-20 text-center text-xs md:text-base">Rs. {item.price * item.quantity}</h1>

            {/* Remove Button */}
            <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:text-red-700 font-bold">X</button>
          </div>
        ))
      ) : (
        <p className="text-center py-10 text-gray-500">Your cart is empty</p>
      )}
    </div>

    {/* Cart Totals */}
    <div className="bg-[#F9F1E7] py-8 px-6 rounded-lg w-full xl:w-[350px] mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">Cart Totals</h2>
      <div className="flex justify-between mb-5">
        <span className="font-medium">Subtotal</span>
        <span className="text-gray-500">Rs. {totalAmount}</span>
      </div>
      <div className="flex justify-between font-medium mb-5">
        <span className="font-medium">Total</span>
        <span className="text-xl text-[#B88E2F] font-semibold">Rs. {totalAmount}</span>
      </div>

      <Link href="/checkout">
        <button className="w-full rounded-xl border border-black text-black py-3 text-lg hover:bg-[#fae9d3a6] transition">Check Out</button>
      </Link>
    </div>
  </div>
</div>


      {/* Customer Care */}
      <div className="mt-10">
        <CustomerCare />
      </div>
    </div>
  );
};

export default Page;
