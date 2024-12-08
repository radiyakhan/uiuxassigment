import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import log from "../../public/men.jpg";
import heart from "../../public/heart.jpg";
import search from "../../public/search.png";
import cart from "../../public/cart.jpg";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="w-full fixed z-10 top-0 bg-white">
  {/* Desktop Navbar */}
  <div className="w-full h-[61px] flex items-center justify-between px-6 lg:px-16">
    {/* Logo Section */}
    <div className="flex items-center gap-3">
      <div className="w-[50px] h-[32px]">
        <Image src={logo} alt="logo" />
      </div>
      <h1 className="font-bold text-[24px] lg:text-[34px] leading-tight">Furniro</h1>
    </div>

    {/* Links Section - Hidden on small screens */}
    <ul className="hidden lg:flex gap-10">
      <Link href={"/"} className="font-medium text-sm lg:text-base hover:text-gray-500">
        Home
      </Link>
      <Link href={"/shop"} className="font-medium text-sm lg:text-base hover:text-gray-500">
        Shop
      </Link>
      <Link href={"/"} className="font-medium text-sm lg:text-base hover:text-gray-500">
        Blog
      </Link>
      <Link href={"/contact"} className="font-medium text-sm lg:text-base hover:text-gray-500">
        Contact
      </Link>
    </ul>

    {/* Icons Section */}
    <div className="flex">
    <div className=" lg:block hidden items-center gap-4">
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
            <Link href={"/shop"}>
              <li className="text-black font-bold text-xl">Shop</li>
            </Link>
            <Link href={"/"}>
              <li className="text-black font-bold text-xl">Blog</li>
            </Link>
            <Link href={"/contact"}>
              <li className="text-black font-bold text-xl">Contact</li>
            </Link>
          </ul>
          <div className="flex items-center justify-center gap-6 mt-6">
            <Image src={log} alt="logo" className="w-6" />
            <Image src={search} alt="search" className="w-6" />
            <Image src={heart} alt="heart" className="w-6" />
          <Link href={"/cart"}><AiOutlineShoppingCart className="w-6" /></Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</div>
  );
};

export default Navbar;
