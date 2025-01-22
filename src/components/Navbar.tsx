"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { IoCartSharp, IoSearch } from "react-icons/io5";
import { client } from "@/sanity/lib/client";
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const Header = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
    setCartItems(cart);
    calculateTotal(cart);
  }, []);

  const calculateTotal = (cart: CartItem[]) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    console.log("Total Price:", total);
  };

  const handleRemoveItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartItems);
    // Fetch wishlist items from localStorage
    const wishlistItems = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(wishlistItems);

    const fetchProducts = async () => {
      const data = await client.fetch(`*[_type == "product"]{
        _id,
        title,
        description,
        productImage {
          asset->{
            url
            },
            },
            price,
        tags,
        dicountPercentage,
        isNew
        }`);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(updatedCart);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Meubel House Logo"
            width={45}
            height={45}
          />
          <span className="lg:text-3xl text-xl font-bold text-black">
            <h1>
              <Link href={"/"}> Furniro</Link>
            </h1>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-20">
          <Link
            href="/"
            className="text-black hover:text-yellow-600 transition"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-black hover:text-yellow-600 transition"
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className="text-black hover:text-yellow-600 transition"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-black hover:text-yellow-600 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Icons Section */}
        <div className="hidden md:flex justify-evenly items-center space-x-16">
          <button className="hover:text-yellow-600">
            <Link href={"/signin"}>
              <Image src="/men.jpg" alt="User" width={20} height={20} />
            </Link>
          </button>
          <div>
            <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-bordercoloryello rounded-2xl">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="bg-transparent outline-none text-whitetext text-[14px] placeholder:text-whitetext w-full"
              />
              <IoSearch className="text-whitetext w-[20px] h-[20px]" />
            </div>

            {/* Dropdown for filtered products */}
            {searchQuery && filteredProducts.length > 0 && (
              <div className="absolute bg-white w-[100px] mt-1 border border-gray-300 rounded-md shadow-lg z-10">
                <ul>
                  {filteredProducts.map((product: any) => (
                    <li
                      key={product._id}
                      className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"
                    >
                      {product.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link href={"/wishlist"}>
            <div className="mb-7">
              <FaRegHeart className="text-2xl  cursor-pointer absolute" />
              {wishlist.length > 0 && (
                <span className="absolute right-[86px] mt-[-5px] items-center justify-center px-[6px] w-5 h-5 text-xs font-bold text-brown bg-white border border-gray-300 rounded-full shadow-md">
                  {wishlist.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </div>
          </Link>

          <div>
            <div className=" ">
              <Sheet>
                <SheetTrigger>
                  <div className="mb-5">
                    <div className="relative">
                      <IoCartSharp className="text-2xl  cursor-pointer absolute" />
                      {cart.length > 0 && (
                        <span className="absolute -right-[32px] mt-[-5px] items-center justify-center w-5 h-5 text-xs font-bold text-brown bg-white border border-gray-300 rounded-full shadow-md">
                          {cart.reduce(
                            (total, item) => total + item.quantity,
                            0
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                </SheetTrigger>
                <SheetContent>
                  <SheetTitle className="font-semibold text-2xl">
                    Shopping Cart
                    <div className="border-b-[1px] mt-4" />
                  </SheetTitle>
                  <SheetHeader>
                    <SheetDescription>
                      <div>
                        {cartItems.length > 0 ? (
                          cartItems.map((item) => (
                            <div key={item.id}>
                              <div className="flex mt-4 gap-4">
                                {item.image && (
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={80}
                                    height={80}
                                    className="rounded-md"
                                  />
                                )}
                                <div className="flex flex-col mt-6">
                                  <h1 className="font-[400] text-base">
                                    {item.title}
                                  </h1>
                                  <div className="flex gap-2">
                                    <h1>{item.quantity}</h1>
                                    <h1>X</h1>
                                    <h1 className="text-brown">
                                      Rs. {item.price}
                                    </h1>
                                  </div>
                                </div>
                                <div
                                  className="mt-7 ml-8 text-xl cursor-pointer"
                                  onClick={() => handleRemoveItem(item.id)}
                                >
                                  <RxCrossCircled className="hover:text-red-600" />
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p>Your cart is empty</p>
                        )}
                      </div>
                      <div className="flex gap-5 px-5 pt-3 ">
                        <Link href={"/cart"}>
                          <h1 className="h-12 w-20 border-2 hover:border-x-[3px] hover:border-y-[3px] border-black rounded-2xl flex items-center justify-center">
                            Cart
                          </h1>
                        </Link>
                        <Link href={"/product-comparision"}>
                          <h1 className="h-12 w-24 border-2 hover:border-x-[3px] hover:border-y-[3px] border-black rounded-2xl flex items-center justify-center">
                            Comparision
                          </h1>
                        </Link>
                        <Link href={"/checkout"}>
                          <h1 className="h-12 w-24 border-2 hover:border-x-[3px] hover:border-y-[3px] border-black rounded-2xl flex items-center justify-center">
                            Check-Out
                          </h1>
                        </Link>
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AiOutlineMenu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              className="text-black hover:text-yellow-600 transition"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-black hover:text-yellow-600 transition"
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className="text-black hover:text-yellow-600 transition"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-black hover:text-yellow-600 transition"
            >
              Contact
            </Link>
            <div className="flex flex-col items-center space-y-4">
              <h1 className="hover:text-yellow-600">
                <Link href="/signin">
                  <Image src="/men.jpg" alt="User" width={20} height={20} />
                </Link>
              </h1>
              <button className="hover:text-yellow-600">
                <Image src="/search.png" alt="Search" width={20} height={20} />
              </button>
              <Link href={"/wishlist"}>
                <FaRegHeart className="text-2xl mt-[-10px] ml-[-10px] cursor-pointer absolute" />
                {wishlist.length > 0 && (
                  <span className="absolute  mt-[-13px] items-center justify-center px-[6px] w-5 h-5 text-xs font-bold text-brown bg-white border border-gray-300 rounded-full shadow-md">
                    {wishlist.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Link>
              <Link href="/cart">
                <div className="relative">
                  <IoCartSharp className="text-whitetext text-[24px] cursor-pointer" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-white shadow-xl text-brown text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
