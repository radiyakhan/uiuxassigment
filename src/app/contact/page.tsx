import React from "react";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import CustomerCare from "@/components/customer-care";
import Banner from "@/components/banner";

const page = () => {
  return (
    <div>
  {/* Background Section */}
   <Banner name="Contact" title="Contact" logo="/logo.png" />

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
  <CustomerCare/>
</div>
  );
};

export default page;
