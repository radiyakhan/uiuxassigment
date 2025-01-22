import Image from "next/image";
import Link from "next/link";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaChevronRight, FaFacebook, FaLinkedin } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import AddToCart from "@/components/addtocart";

const Page = async ({ params }: { params: { id: string } }) => {
  const data =
    await client.fetch(`*[_type == "product" && _id == "${params.id}"]{
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
  console.log("Fetched Data:", data);
  const relatedImages = [
    "/Product-1.png",
    "/product-2.png",
    "/product-3.png",
    "/product-4.png",
  ];
  return (
    <div>
      <div className="bg-[#F9F1E7]">
        <div className="h-[100px] max-w-[1400px] pl-2 gap-4 md:gap-8 flex items-center xl:pl-12 mx-auto">
          <div className="flex gap-4 items-center">
            <p className="font-poppins text-base font-normal text-[#9F9F9F]">
              Home
            </p>
            <FaChevronRight />
          </div>
          <div className="flex gap-4 items-center">
            <p className="font-poppins text-base font-normal text-[#9F9F9F]">
              Shop
            </p>
            <FaChevronRight />
          </div>
          {data.map((product: any) => (
            <div key={product._id} className="border-l items-center h-[40px] w-[120px] flex justify-end border-gray-700 pt-2 lg:pt-0">
              <p className="text-sm md:text-base text-center lg:text-left">
                {product.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Section */}
      <div className="mx-auto max-w-[1400px] gap-6 lg:gap-16 px-10 py-6 flex md:flex-row flex-col">
        {/* Image Section */}
        <div className=" w-auto h-auto flex flex-col lg:flex-row lg:gap-5">
          <div className="flex lg:flex-col gap-2 mb-2 lg:gap-8">
            {relatedImages.map((img, index) => (
              <span
                key={index}
                className="w-[76px] h-[80px] rounded-md flex items-center bg-[#F9F1E7]"
              >
                <Image
                  src={img}
                  alt={`related image ${index + 1}`}
                  height={80}
                  width={76}
                />
              </span>
            ))}
          </div>
          {data.map((product: any) => (
            <div key={product._id} className="lg:flex">
              <div className="lg:h-[300px] lg:w-[423px] lg:flex justify-center items-center">
                <Image
                  src={
                    product.productImage
                      ? urlFor(product.productImage).url()
                      : "/placeholder-image.jpg"
                  }
                  alt="Single Product Image"
                  className="lg:h-[500px] lg:w-full lg:mt-48 w-[200px] h-[200px]"
                  height={40}
                  width={481}
                />
              </div>
              <div className="h-auto lg:ml-10 flex flex-col gap-1">
                <h2 className="font-semibold text-[42px]/[63px]">
                  {product.title}
                </h2>
                <p className="text-[#9F9F9F] font-poppins font-medium text-2xl">
                  Rs.{product.price}
                </p>

                {/* Reviews and Description */}
                <div className="flex gap-2 items-center">
                  <Image
                    src="/stars.png"
                    alt="rating"
                    width={124}
                    height={20}
                  />
                  <div className="border-l h-[30px] flex items-center pl-4">
                    <p className="text-[#9F9F9F] text-sm font-poppins">
                      5 Customer Reviews
                    </p>
                  </div>
                </div>
                <p className="text-sm lg:w-[500px] font-poppins text-[#9F9F9F]">
                  {product.description}
                </p>

                {/* Quantity and Actions */}
                <div className="flex flex-col xl:flex-row gap-5 mt-4">
                  <AddToCart
                    product={{
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.productImage,
                    }}
                  />
                  <Link href="/product-comparision">
                    <button
                      type="button"
                      className="h-16 w-[215px] border-2 hover:border-x-[3px] hover:border-y-[3px] border-black rounded-2xl flex items-center justify-center"
                    >
                      + Compare
                    </button>
                  </Link>
                </div>

                <div>
                  <div>
                    <Image
                      alt="line"
                      src="/line 7.png"
                      width={605.01}
                      height={5}
                      className="mt-16"
                    />
                  </div>
                  <div className="mt-9 flex flex-col gap-4 text-graay2">
                    <div>
                      <ul className="flex gap-4">
                        <li>SKU</li>
                        <li>:</li>
                        <li>SS001</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="flex gap-4">
                        <li>Category</li>
                        <li>:</li>
                        <li>Sofas</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="flex gap-4">
                        <li>Tags</li>
                        <li>:</li>
                        <li>Sofa, Chair, Home, Shop</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="flex gap-4">
                        <li>SKU</li>
                        <li>:</li>
                        <li className="flex gap-6 text-2xl text-black">
                          <Link
                            href={
                              "https://www.facebook.com/profile.php?id=100083278800324&mibextid=ZbWKwL"
                            }
                            target="_blank"
                          >
                            <FaFacebook />
                          </Link>
                          <Link
                            href={
                              '"https://www.linkedin.com/in/radiya-khan-133b112ba'
                            }
                            target="_blank"
                          >
                            <FaLinkedin />
                          </Link>
                          <AiFillTwitterCircle />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* line */}
      <Image
        src={"/line 8.png"}
        alt="line"
        width={5}
        height={5}
        className="mt-16 w-full"
      />
      {/* discription */}
      {data.map((product: any) => (
        <div key={product._id}>
          <div className="lg:flex gap-12 mt-12 justify-center mb-6 ml-5">
            <h1 className="text-[24px] leading-[36px] font-medium">
              Description
            </h1>
            <h1 className="text-[24px] leading-[36px] font-[400] text-graay3">
              Additional Information
            </h1>
            <h1 className="text-[24px] leading-[36px] font-[400] text-graay3">
              Review[5]
            </h1>
          </div>
          <div className="flex-col justify-center font-[400] lg:text-base text-sm text-[#9F9F9F] lg:px-[220px] px-5">
            {product.description}
          </div>
          <div className="mt-5  lg:ml-20 lg:flex h-full px-2 gap-4">
            <Image
              src={
                product.productImage
                  ? urlFor(product.productImage).url()
                  : "/placeholder-image.jpg"
              }
              alt="sofa set"
              className="w-[600px] mb-2 "
              width={500}
              height={4}
            />
            <Image
              src={
                product.productImage
                  ? urlFor(product.productImage).url()
                  : "/placeholder-image.jpg"
              }
              alt="sofa set"
              className="w-[600px] mb-2"
              width={500}
              height={4}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
