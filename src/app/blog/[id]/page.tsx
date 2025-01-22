import Image from "next/image";
import React from "react";
import products from "../../../../Data/data";
import admin from "../../../../public/admin.png";
import date from "../../../../public/calender.png";
import tag from "../../../../public/tag.png";
import Banner from "@/components/banner";

interface Paramsin {
  params: { id: string };
}

const page = ({ params }: Paramsin) => {
  const paramid = Number(params.id);
  const data = products.find((item) => item.id === paramid);
  return (
    <div>
      <Banner name="Blog" title="Blog" logo="/logo.png" />
      <div className=" mt-5 px-28">
        
        {/* Blog Posts */}
        <div>
          <div className="space-y-8">
            <div className="">
              <Image
                src={data?.image || "/"}
                alt="Featured blog post"
                className="object-cover w-full h-full rounded-lg"
                width={400}
                height={40}
              />
            </div>

            <div className="lg:flex items-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Image src={admin} alt="Admin" width={16} height={16} />
                <span>Admin</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={date} alt="Date" width={16} height={16} />
                <span>14 Oct 2022</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={tag} alt="Tag" width={16} height={16} />
                <span>Wood</span>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-medium">{data?.title}</h2>
            <p className="text-gray-600 leading-relaxed">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
