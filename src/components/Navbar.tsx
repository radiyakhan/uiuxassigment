'use client'

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { RxCrossCircled } from 'react-icons/rx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Meubel House Logo" width={45} height={45} />
          <span className="text-3xl font-bold text-black">Furniro</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-20">
          <Link href="/" className="text-black hover:text-yellow-600 transition">
            Home
          </Link>
          <Link href="/shop" className="text-black hover:text-yellow-600 transition">
            Shop
          </Link>
          <Link href="/blog" className="text-black hover:text-yellow-600 transition">
            Blog
          </Link>
          <Link href="/contact" className="text-black hover:text-yellow-600 transition">
            Contact
          </Link>
        </nav>

        {/* Icons Section */}
        <div className="hidden md:flex justify-evenly items-center space-x-16">
          <button className="hover:text-yellow-600">
            <Image src="/men.jpg" alt="User" width={20} height={20} />
          </button>
          <button className="hover:text-yellow-600">
            <Image src="/search.png" alt="Search" width={20} height={20} />
          </button>
          <button className="hover:text-yellow-600">
            <Image src="/heart.jpg" alt="Wishlist" width={20} height={20} />
          </button>
          <div>
          
            <div className=" ">
            <Sheet>
              <SheetTrigger>
              <Image src="/cart.jpg" alt="Cart" width={20} height={20} className='mt-1'/>
              </SheetTrigger>
              <SheetContent>
              <SheetTitle className='font-semibold text-2xl'>
                Shopping Cart
                <div className='border-b-[1px] mt-4'/></SheetTitle>
                <SheetHeader>
                  <SheetDescription>
                    <div>
                      <div className='flex mt-4 gap-4'>
                        <Image width={100} height={100} src={'/chairset.png'} alt='chair'/>
                        <div className='flex flex-col mt-6'>
                          <h1 className='font-[400] text-base'>
                            Asgaard sofa
                          </h1>
                          <div className='flex gap-2'>
                            <h1>
                              1
                            </h1>
                            <h1>
                              X
                            </h1>
                            <h1 className='text-brown'>
                              Rs. 250,000.00
                            </h1>
                          </div>
                        </div>
                        <div className='mt-7 ml-8 text-xl cursor-pointer'>
                        <RxCrossCircled />
                        </div>
                      </div>
                      <div className='flex mt-4 gap-4'>
                        <Image width={100} height={100} src={'/living.png'} alt='chair'/>
                        <div className='flex flex-col mt-6'>
                          <h1 className='font-[400] text-base'>
                            Casaliving Wood
                          </h1>
                          <div className='flex gap-2'>
                            <h1>
                              1
                            </h1>
                            <h1>
                              X
                            </h1>
                            <h1 className='text-brown'>
                              Rs. 270,000.00
                            </h1>
                          </div>
                        </div>
                        <div className='mt-7 ml-8 text-xl cursor-pointer'>
                        <RxCrossCircled />
                        </div>
                      </div>
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
            <Link href="/" className="text-black hover:text-yellow-600 transition" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/shop" className="text-black hover:text-yellow-600 transition" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link href="/blog" className="text-black hover:text-yellow-600 transition" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className="text-black hover:text-yellow-600 transition" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex flex-col items-center space-y-4">
              <button className="hover:text-yellow-600" onClick={() => setIsMenuOpen(false)}>
                <Image src="/men.jpg" alt="User" width={20} height={20} />
              </button>
              <button className="hover:text-yellow-600" onClick={() => setIsMenuOpen(false)}>
                <Image src="/search.png" alt="Search" width={20} height={20} />
              </button>
              <button className="hover:text-yellow-600" onClick={() => setIsMenuOpen(false)}>
                <Image src="/heart.jpg" alt="Wishlist" width={20} height={20} />
              </button>
              <Link href="/cart" onClick={() => setIsMenuOpen(false)}>
                <Image src="/cart.jpg" alt="Cart" width={20} height={20} />
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

