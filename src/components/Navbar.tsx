"use client";

import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import log from "../../public/men.jpg";
import heart from "../../public/heart.jpg";
import search from "../../public/search.png";
import cart from "../../public/cart.jpg";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

const [isMenuOpen, setIsMenuOpen] = useState(false);
const Header = () => {
  return (
    <div className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 lg:px-7 px-6 overflow-x-hidden">
        {/* Logo */}
        <div className="flex items-center lg:space-x-2">
          <Image
            src="/logo.png"
            alt="Meubel House Logo"
            width={45}
            height={45}
          />
          <span className="text-3xl font-bold text-black">Furniro</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-20">
          <Link
            href="/SingleProduct"
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
        <div className="hidden md:flex justify-evenly items-center lg:space-x-16">
          <button className="hover:text-yellow-600">
            <Image src="/men.jpg" alt="User" width={20} height={20} />
          </button>
          <button className="hover:text-yellow-600">
            <Image src="/search.png" alt="Search" width={20} height={20} />
          </button>
          <button className="hover:text-yellow-600">
            <Image src="/heart.jpg" alt="Wishlist" width={20} height={20} />
          </button>
          <Link href="/cart">
            <Image src="/cart.jpg" alt="Cart" width={20} height={20} />
          </Link>
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
      isMenuOpen &&
      <nav className="md:hidden bg-white border-t border-gray-200">
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link
            href="/"
            className="text-black hover:text-yellow-600 transition"
            onClick={() => setIsMenuOpen(false)}
          />
          Home
          {/* Links Section - Hidden on small screens */}
          <ul className="hidden lg:flex gap-10">
            <Link
              href={"/"}
              className="font-medium text-sm lg:text-base hover:text-gray-500"
            >
              Home
            </Link>
            <Link
              href={"/shop"}
              className="font-medium text-sm lg:text-base hover:text-gray-500"
            >
              Shop
            </Link>
            <Link
              href={"/"}
              className="font-medium text-sm lg:text-base hover:text-gray-500"
            >
              Blog
            </Link>
            <Link
              href={"/contact"}
              className="font-medium text-sm lg:text-base hover:text-gray-500"
            >
              Contact
            </Link>
          </ul>
          {/* Icons Section */}
          <div className="flex">
            <div className=" lg:block md:hidden hidden items-center gap-4">
              <Image src={log} alt="logo" className="w-5 lg:w-6" />
              <Image src={search} alt="search" className="w-5 lg:w-6" />
              <Image src={heart} alt="heart" className="w-5 lg:w-6" />
              <Image src={cart} alt="cart" className="w-5 lg:w-6" />
            </div>
          </div>
          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <GiHamburgerMenu className="text-2xl" />
              </SheetTrigger>
              <SheetContent>
                <ul className="space-y-4">
                  <Link href={"/"}>
                    <li className="text-black font-bold text-xl">Home</li>
                  </Link>
                  <Link
                    href="/shop"
                    className="text-black hover:text-yellow-600 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Shop
                  </Link>
                  <Link
                    href="/blog"
                    className="text-black hover:text-yellow-600 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="text-black hover:text-yellow-600 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="flex flex-col items-center space-y-4">
                    <button
                      className="hover:text-yellow-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Image
                        src="/user-icon.jpg"
                        alt="User"
                        width={20}
                        height={20}
                      />
                    </button>
                    <button
                      className="hover:text-yellow-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Image
                        src="/search-icon.jpg"
                        alt="Search"
                        width={20}
                        height={20}
                      />
                    </button>
                    <button
                      className="hover:text-yellow-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Image
                        src="/heart-icon.jpg"
                        alt="Wishlist"
                        width={20}
                        height={20}
                      />
                    </button>
                    <Link href="/cart" onClick={() => setIsMenuOpen(false)}>
                      <Image
                        src="/cart-icon.jpg"
                        alt="Cart"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
