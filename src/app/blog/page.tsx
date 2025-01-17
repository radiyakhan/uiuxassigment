import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import laptop from "../../../public/post.png";
import admin from "../../../public/admin.png";
import date from "../../../public/calender.png";
import tag from "../../../public/tag.png";
import post from "../../../public/post-2.png"
import handwritting from "../../../public/handwritting.png"
import CustomerCare from "@/components/customer-care";
import Banner from "@/components/banner";

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
      <Banner name="Blog" title="Blog" logo="/logo.png" />

      {/* Main Content */}
      <div className="lg:flex px-4">
      <div className="max-w-6xl mx-auto  px-4 py-12 font-poppins">
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

              <div className="lg:flex items-center gap-6 text-gray-500 text-sm">
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
              <p className="text-gray-600 leading-relaxed line-clamp-3">
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

              <div className="lg:flex items-center gap-6 text-gray-500 text-sm">
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
              <p className="text-gray-600 leading-relaxed line-clamp-3">
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

              <div className="lg:flex items-center gap-6 text-gray-500 text-sm">
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
              <p className="text-gray-600 leading-relaxed line-clamp-3">
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

      <div className="space-y-8 px-4 mt-12  ">
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
     <CustomerCare/>
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