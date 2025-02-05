// import Banner from "@/components/banner";
// import React from "react";
// import { FaApple } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { IoIosCheckbox } from "react-icons/io";

// const page = () => {
//   return (
//     <div>
//       <Banner title="Sign-In" name="Sign-In" logo="/logo.png" />
//       <div className="container mt-7 mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
//         <h3 className="text-3xl font-bold mb-6 text-brown">Sign In</h3>
//         <form>
//           <div className="mb-4">
//             {/* <h1 className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300 flex gap-2">
//               <SlEnvolope className="text-xl" /> Email
//             </h1> */}
//             <input
//             type="email"
//             id="email"
//             name="email"
//             className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
//             placeholder={"Email address"}
//           />
//           </div>
//           <div className="mb-4">
//             {/* <h1 className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300 flex gap-2">
//               <MdLockOutline className="text-xl" /> Password
//             </h1> */}
//              <input
//             type="password"
//             id="password"
//             name="password"
//             className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
//             placeholder={"Password"}
//             />
//           </div>
//           <div className="flex gap-1 items-center mb-4">
//             <IoIosCheckbox className="text-bordercoloryello text-xl" />
//             <span>Remember me?</span>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-brown hover:bg- text-white font-bold py-2 "
//           >
//             Sign In
//           </button>
//           <p className="text-center mt-4">
//             <h1 className="text-gray-500 flex justify-end cursor-pointer">
//               Forgot password?
//             </h1>
//           </p>
//         </form>
//         <div className="text-center mt-8">
//           <p>or</p>
//           <button className="w-full gap-2 bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
//             <FcGoogle className="text-xl" />
//             Sign up with Google
//           </button>
//           <button className="w-full bg-gray-100 border gap-2 text-black py-2 rounded mt-2 flex items-center justify-center">
//             <FaApple className="text-xl" />
//             Sign up with Apple
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;


"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { SlEnvolope } from "react-icons/sl";
import { MdLockOutline } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from '@/components/banner';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from 'react-icons/fa';
export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const router = useRouter();

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/createUsers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        router.push('/signin');
      } else {
        toast.error(data.error || 'Failed to create account. Please try again.');
      }} catch (error) {
      console.error('Error:', error);
      toast.error('Failed to create account. Please try again.');
    }};
  return (
    <div className="min-h-screen bg-white">
      <Banner title="Sign-In" name="Sign-In" logo="/logo.png" />
      
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
        <h3 className="text-3xl font-bold mb-6 text-brown">Sign In</h3>
          <form onSubmit={handleSubmit}>
        <div className="relative w-full mb-4">
  <SlEnvolope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-black" />
 <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded px-10 py-2 focus:border-bordercoloryello focus:outline-none"
            onChange={handleChange}
            required
          />
</div>
          <div className="relative w-full mb-4">
  <MdLockOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-black" />
  <input
    type="password"
    name="password"
    placeholder="Password"
    className="w-full border border-gray-300 rounded px-10 py-2 focus:border-bordercoloryello focus:outline-none"
    onChange={handleChange}
    required
  />
</div>
<div className="relative w-full mb-4">
  <AiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-black" />
  <input
            type="text"
             name="userName"        
            placeholder="Name"
            className="w-full border border-gray-300 rounded px-10 py-2 focus:border-bordercoloryello focus:outline-none"
            onChange={handleChange}
            required
          />
</div>
        <button
          type="submit"
          className="w-full bg-brown text-white font-bold py-2 "
        >
         Sign Up
        </button>
          </form>
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
            <FcGoogle className="text-xl" />
              Sign up with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
            <FaApple className="text-xl" />
              Sign up with Apple
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}