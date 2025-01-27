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

      <div className="h-auto lg:h-[525px] flex justify-center items-center px-4 md:px-6 lg:px-0 xl:my-0 my-5">
        <div className="h-auto lg:h-[390px] w-full lg:w-[1240px] flex flex-col xl:flex-row justify-between gap-6">
          {/* Product List */}
          <div className="w-full lg:w-[817px] h-auto lg:h-[215px] flex flex-col justify-between">
            <div className="h-[55px] bg-[#F9F1E7] flex items-center px-4 lg:px-40 gap-4 lg:gap-28">
              <p className="font-poppins font-medium text-sm lg:text-base">
                Product
              </p>
              <p className="font-poppins font-medium text-sm lg:text-base">
                Price
              </p>
              <p className="font-poppins font-medium text-sm lg:text-base lg:-ml-8">
                Quantity
              </p>
              <p className="font-poppins font-medium lg:-ml-14 text-sm lg:text-base">
                Subtotal
              </p>
            </div>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex  md:flex-row items-start md:items-center gap-4 justify-between text-gray-700 py-4 border-b"
                >
                  {/* Product Details */}
                  <div className="flex items-center gap-4 w-full md:w-2/5">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                    )}
                    <div className="lg:ml-16">
                      <h1 className="font-semibold text-black">{item.title}</h1>
                      <div className="flex text-yellow-500 text-sm">
                        {[...Array(5)].map((_, i) => (
                          <IoIosStar key={i} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <h1 className="w-full md:w-1/5 text-center text-sm lg:text-base lg:ml-0 ml-12 mt-2 md:mt-0">
                    Rs. {item.price}
                  </h1>

                  {/* Quantity Controls */}
                  <div className="flex justify-center items-center gap-2 border border-gray-200 w-[100px] h-[30px] text-[16px] font-medium text-center rounded-2xl mt-2 md:mt-0">
                    <button
                      className="px-2 py-1 rounded"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="text-sm lg:text-base font-medium">
                      {item.quantity}
                    </span>
                    <button
                      className="px-2 py-1 rounded"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  {/* Price */}
                  <h1 className="w-full md:w-1/5 text-center mt-2 md:mt-0">
                    Rs. {item.price * item.quantity}
                  </h1>
                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="w-full md:w-1/5 text-center text-red-500 hover:text-red-700 font-bold mt-2 md:mt-0"
                  >
                    X
                  </button>
                </div>
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>

          {/* Cart Totals (only rendered once) */}
          <div className="bg-[#F9F1E7] py-8 px-11 sm:p-8 rounded-sm shadow-lg w-auto sm:w-1/2 lg:w-full mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-16">
              Cart Totals
            </h2>
            <div className="flex justify-between mb-5">
              <span className="text-base font-semibold">Subtotal</span>
              <span className="text-base text-[#9F9F9F]">
                Rs. {totalAmount}
              </span>
            </div>
            <div className="flex justify-between font-medium mb-5">
              <span className="text-base font-semibold">Total</span>
              <span className="text-xl text-[#B88E2F] font-semibold">
                Rs. {totalAmount}
              </span>
            </div>

            <Link href="/checkout">
              <button className="block mx-auto w-[200px] rounded-xl border border-black text-black px-2 py-3 text-xl hover:bg-[#fae9d3a6] transition my-10">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>

      <CustomerCare />
    </div>
  );
};

export default Page;
