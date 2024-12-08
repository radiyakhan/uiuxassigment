import Image from "next/image";
import React from "react";
import bg from "../../../public/shop.png";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { HiOutlineTrophy } from "react-icons/hi2";
import hand from '../../../public/hand.png'
import head from '../../../public/head.png'

const page = () => {
  return (
    <div>
  {/* Background Section */}
  <div className="relative w-full h-[400px]">
    <Image
      src={bg}
      alt="Shop Background"
      layout="fill"
      objectFit="cover"
      className="absolute inset-0"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black">
      <p className="font-medium text-3xl sm:text-4xl md:text-5xl">Contact</p>
      <h1 className="font-light text-sm sm:text-base mt-2">Home &gt; Contact</h1>
    </div>
  </div>

  {/* Contact Section */}
  <div className="flex flex-wrap justify-center gap-16 px-4 py-10">
    {/* Contact Details */}
    <div className="flex flex-col space-y-14 lg:space-y-16">
      <div className="flex items-start gap-3">
        <FaLocationDot className="w-6 h-6 text-gray-800" />
        <div>
          <h1 className="text-lg sm:text-xl font-semibold">Address</h1>
          <p className="text-sm lg:w-[250px] sm:text-base">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <FaPhoneAlt className="w-6 h-6 text-gray-800" />
        <div>
          <h1 className="text-lg sm:text-xl font-semibold">Phone</h1>
          <p className="text-sm sm:text-base">
            Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <FaClock className="w-6 h-6 text-gray-800" />
        <div>
          <h1 className="text-lg sm:text-xl font-semibold">Working Time</h1>
          <p className="text-sm sm:text-base">
            Monday-Friday: 9:00 - 22:00 <br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>

    {/* Contact Form */}
    <div className="w-full lg:w-1/3 mt-14 lg:mt-0">
      <div className="bg-white p-6 rounded-lg">
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
            defaultValue={"Abc"}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
            defaultValue={"Abc@def.com"}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <textarea
            id="subject"
            name="subject"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
            defaultValue={"This is an optional"}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
            defaultValue={"Hi! I'd like to ask about"}
          />
        </div>
        <button className="w-full bg-brown text-white py-2 px-4 rounded focus:outline-none focus:ring-1 focus:ring-gray-400">
          Submit
        </button>
      </div>
    </div>
  </div>

  {/* Features Section */}
  <div className="bg-peach py-10">
    <div className="container mx-auto flex flex-wrap justify-around">
      {/* Feature Item */}
      <div className="flex items-center space-x-4 mb-6 md:mb-0">
        <HiOutlineTrophy className="w-12 h-12 text-gray-800" />
        <div>
          <h1 className="text-lg font-semibold">High Quality</h1>
          <p className="text-sm text-gray-700">Crafted from top materials</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 mb-6 md:mb-0">
        <GoVerified className="w-12 h-12 text-gray-800" />
        <div>
          <h1 className="text-lg font-semibold">Warranty Protection</h1>
          <p className="text-sm text-gray-700">Over 2 years</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 mb-6 md:mb-0">
        <Image src={hand} alt="hand" className="w-12 h-12" />
        <div>
          <h1 className="text-lg font-semibold">Free Shipping</h1>
          <p className="text-sm text-gray-700">Order over 150 $</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Image src={head} alt="hand" className="w-12 h-12" />
        <div>
          <h1 className="text-lg font-semibold">24/7 Support</h1>
          <p className="text-sm text-gray-700">Dedicated support</p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default page;
