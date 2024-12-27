import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import bg from "../../../public/shop.png";
import logo from "../../../public/logo.png";
import laptop from "../../../public/post.png";
import admin from "../../../public/admin.png";
import date from "../../../public/calender.png";
import tag from "../../../public/tag.png";
import post from "../../../public/post-2.png"
import handwritting from "../../../public/handwritting.png"

import { GoVerified } from "react-icons/go";
import { HiOutlineTrophy } from "react-icons/hi2";

export default function BlogPage() {
  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  const recentPosts = [
    {
      title: "Going all-in with millennial design",
      date: "03 Aug 2022",
      image: "/pen.png",
    },
    {
      title: "Exploring new ways of decorating",
      date: "03 Aug 2022",
      image: "/read-more.png",
    },
    {
      title: "Hand made pieces that took time to make",
      date: "03 Aug 2022",
      image: "/book.png",
    },
    {
      title: "Modern name in Milan",
      date: "03 Aug 2022",
      image: "/pot.png",
    },
    {
      title: "Colorful office redesign design",
      date: "03 Aug 2022",
      image: "/tea.png",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="relative h-[300px] w-full">
        <Image
          src={bg}
          alt="Comparison background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
          <Image
            src={logo}
            alt="Logo"
            width={70}
            height={70}
            quality={100}
            className="mb-2"
          />
          <h1 className="text-4xl font-semibold text-black mb-4">Blog</h1>
          <div className="flex items-center gap-2 text-sm text-black">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Blog</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
      <div className="max-w-6xl mx-auto  px-6 py-12 font-poppins">
        <div className="grid grid-cols-1 lg:grid-cols-[650px]  gap-12">
          {/* Blog Posts */}
          <div>
            <div className="space-y-8">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={laptop}
                  alt="Featured blog post"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>

              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src={admin}
                    alt="Admin"
                    width={16}
                    height={16}
                  />
                  <span>Admin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={date}
                    alt="Date"
                    width={16}
                    height={16}
                  />
                  <span>14 Oct 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={tag}
                    alt="Tag"
                    width={16}
                    height={16}
                  />
                  <span>Wood</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-medium">
                Going all-in with millennial design
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
              </p>
              <Link
                href="#"
                className="text-black underline underline-offset-4 hover:text-gray-600"
              >
                Read more
              </Link>
            </div>
          </div>
          <div>
            <div className="space-y-8">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={post}
                  alt="Featured blog post"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>

              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src={admin}
                    alt="Admin"
                    width={16}
                    height={16}
                  />
                  <span>Admin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={date}
                    alt="Date"
                    width={16}
                    height={16}
                  />
                  <span>14 Oct 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={tag}
                    alt="Tag"
                    width={16}
                    height={16}
                  />
                  <span>Handmade</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-medium">
                Going all-in with millennial design
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
              </p>
              <Link
                href="#"
                className="text-black underline underline-offset-4 hover:text-gray-600"
              >
                Read more
              </Link>
            </div>
          </div>
          <div>
            <div className="space-y-8">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={handwritting}
                  alt="Featured blog post"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>

              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src={admin}
                    alt="Admin"
                    width={16}
                    height={16}
                  />
                  <span>Admin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={date}
                    alt="Date"
                    width={16}
                    height={16}
                  />
                  <span>14 Oct 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={tag}
                    alt="Tag"
                    width={16}
                    height={16}
                  />
                  <span>wood</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-medium">
                Going all-in with millennial design
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
              </p>
              <Link
                href="#"
                className="text-black underline underline-offset-4 hover:text-gray-600"
              >
                Read more
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          
        </div>
      </div>

      <div className="space-y-8 mt-12 pr-16 ">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-4  border border-gray-300 rounded-lg"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li
                    key={category.name}
                    className="flex justify-between items-center text-gray-800"
                  >
                    <Link href="#" className="hover:underline">
                      {category.name}
                    </Link>
                    <span className="text-gray-500">{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Recent Posts</h3>
              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="relative w-20 h-20">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        <Link
                          href="#"
                          className="hover:underline hover:text-gray-600"
                        >
                          {post.title}
                        </Link>
                      </h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>

      {/* Pagination */}
      <div className="flex gap-5 mt-10 mb-8 items-center justify-center text-center">
        <h1 className="bg-peach hover:bg-brown rounded px-5 py-2">1</h1>
        <h1 className="bg-peach hover:bg-brown rounded px-5 py-2">2</h1>
        <h1 className="bg-peach hover:bg-brown rounded px-5 py-2">3</h1>
        <h1 className="bg-peach hover:bg-brown rounded px-5 py-2">Next</h1>
      </div>

      {/* Features Section */}
     <div className="h-auto lg:h-[270px] flex flex-col lg:flex-row items-center justify-center bg-[#FAF3EA] px-4 py-6">
                 <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                   {/* High Quality */}
                   <div className="h-auto lg:h-[70px] w-full sm:w-[337px] flex items-center gap-2">
                     <HiOutlineTrophy className="w-12 h-12 text-gray-800" />
                     <div>
                       <h2 className="text-[20px]/[30px] sm:text-[25px]/[37.5px] font-semibold font-poppins text-[#242424]">
                         High Quality
                       </h2>
                       <p className="text-base/[24px] sm:text-xl/[30px] font-poppins font-medium text-[#898989]">
                         crafted from top materials
                       </p>
                     </div>
                   </div>
           
                   {/* Warranty Protection */}
                   <div className="h-auto lg:h-[70px] w-full sm:w-[338px] flex items-center gap-2">
                     <GoVerified className="w-12 h-12 text-gray-800" />
                     <div>
                       <h2 className="text-[20px]/[30px] sm:text-[25px]/[37.5px] font-semibold font-poppins text-[#242424]">
                         Warranty Protection
                       </h2>
                       <p className="text-base/[24px] sm:text-xl/[30px] font-poppins font-medium text-[#898989]">
                         Over 2 years
                       </p>
                     </div>
                   </div>
           
                   {/* Free Shipping */}
                   <div className="h-auto lg:h-[70px] w-full sm:w-[244px] flex items-center gap-2">
                     <Image
                       src={"/hand.png"}
                       alt="Free Shipping"
                       height={60}
                       width={60}
                     />
                     <div>
                       <h2 className="text-[20px]/[30px] sm:text-[25px]/[37.5px] font-semibold font-poppins text-[#242424]">
                         Free Shipping
                       </h2>
                       <p className="text-base/[24px] sm:text-xl/[30px] font-poppins font-medium text-[#898989]">
                         Order over 150 $
                       </p>
                     </div>
                   </div>
           
                   {/* 24/7 Support */}
                   <div className="h-auto lg:h-[70px] w-full sm:w-[249px] flex items-center gap-2">
                     <Image
                       src={"/head.png"}
                       alt="Customer Support"
                       height={60}
                       width={60}
                     />
                     <div>
                       <h2 className="text-[20px]/[30px] sm:text-[25px]/[37.5px] font-semibold font-poppins text-[#242424]">
                         24 / 7 Support
                       </h2>
                       <p className="text-base/[24px] sm:text-xl/[30px] font-poppins font-medium text-[#898989]">
                         Dedicated support
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
    </>
  );
}







// {/* <div className="space-y-8">
//             {/* Search Bar */}
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full p-4 pr-12 border border-gray-300 rounded-lg"
//               />
//               <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//             </div>

//             {/* Categories */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-medium">Categories</h3>
//               <ul className="space-y-3">
//                 {categories.map((category) => (
//                   <li
//                     key={category.name}
//                     className="flex justify-between items-center text-gray-800"
//                   >
//                     <Link href="#" className="hover:underline">
//                       {category.name}
//                     </Link>
//                     <span className="text-gray-500">{category.count}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Recent Posts */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-medium">Recent Posts</h3>
//               <div className="space-y-6">
//                 {recentPosts.map((post, index) => (
//                   <div key={index} className="flex gap-4">
//                     <div className="relative w-20 h-20">
//                       <Image
//                         src={post.image}
//                         alt={post.title}
//                         fill
//                         className="object-cover rounded-lg"
//                       />
//                     </div>
//                     <div>
//                       <h4 className="font-medium">
//                         <Link
//                           href="#"
//                           className="hover:underline hover:text-gray-600"
//                         >
//                           {post.title}
//                         </Link>
//                       </h4>
//                       <p className="text-sm text-gray-500">{post.date}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div> */}