import React from 'react'
import pic1 from '../../public/sylthe.jpg'
import pic2 from '../../public/chair.jpg'
import pic3 from '../../public/sofa.jpg'
import pic4 from '../../public/room.jpg'
import pic5 from '../../public/lamp.jpg'
import pic6 from '../../public/muggo.jpg'
import pic7 from '../../public/sofaset.jpg'
import pic8 from '../../public/potty.jpg'
import Image from 'next/image'


const Product = () => {
  return (
    <div className='mt-14 ml-24'>
      <div>
        <h1 className='text-center pb-10 font-bold text-[40px] leading-[48px]'>
            Our Products
        </h1>
      </div>
      <div className="flex flex-wrap gap-[30px] items-center w-full">
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic1} alt="game" className="" />
          <div className="gap-3 ml-2 w-[201px] h-6 ">
          <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">Syltherine</h2>
            <h2 className='font-[500px] mt-2 text-graay2 text-base'>Stylish cafe chair</h2>
            <div className='flex w-[502px] gap-5 h-6'>
                <h2 className='font-semibold leading-[30px] text-[20px]'>Rp 2.500.000</h2>
                <h2 className='font-[400px] text-base text-graay3 line-through'>Rp 3.500.000</h2>
            </div>
            
          </div>
        </div>
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic2} alt="chair" className="" />
          <div className="gap-3 ml-2  w-[201px] h-6 ">
          <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">Leviosa</h2>
            <h2 className='font-[500px] mt-2 text-graay2 text-base'>Stylish cafe chair</h2>
            <div className='flex w-[502px] gap-5 h-6'>
                <h2 className='font-semibold leading-[30px] text-[20px]'>Rp 2.500.000</h2>
                
            </div>
            
          </div>
        </div>
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic3} alt="sofa" className="" />
          <div className="gap-3 ml-2 w-[201px] h-6 ">
          <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">Lolito</h2>
            <h2 className='font-[500px] mt-2 text-graay2 text-base'>Luxury big sofa</h2>
            <div className='flex w-[502px] gap-5 h-6'>
                <h2 className='font-semibold leading-[30px] text-[20px]'>Rp 7.000.000</h2>
                <h2 className='font-[400px] text-base text-graay3 line-through'>Rp 14.000.000</h2>
            </div>
            
          </div>
        </div>
        <div className="card bg-base-100 bg-graay h-[390px] gap-4 w-[270px]">
          <Image src={pic4} alt="keyboard" className="" />
          <div className="gap-3 ml-2 w-[] h-6 ">
          <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">Respira</h2>
            <h2 className='font-[500px] mt-2 text-graay2 text-base'>Outdoor bar table</h2>
            <div className='flex w-[] gap-5 h-6'>
                <h2 className='font-semibold leading-[30px] text-[20px]'>Rp 2.500.000</h2>
               
            </div>
            
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-12 gap-[30px] items-center w-full">
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic5} alt="lamp" className="" />
          <div className="gap-3 ml-2 w-[201px] h-6 ">
          <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">Grifo</h2>
            <h2 className='font-[500px] mt-2 text-graay2 text-base'>Night lamp</h2>
            <div className='flex w-[502px] gap-5 h-6'>
                <h2 className='font-semibold leading-[30px] text-[20px]'>Rp 1.500.000</h2>
               
            </div>
            
          </div>
        </div>
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic6} alt="mug" className="" />
          <div className="gap-3 ml-2  w-[201px] h-6 ">
          <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">Muggo</h2>
            <h2 className='font-[500px] mt-2 text-graay2 text-base'>Small mug</h2>
            <div className='flex w-[502px] gap-5 h-6'>
                <h2 className='font-semibold leading-[30px] text-[20px]'>Rp 150.000</h2>
                
            </div>
            
          </div>
        </div>
        <div className="card bg-base-100 gap-4 bg-graay h-[390px] w-[270px]">
          <Image src={pic7} alt="game" className="" />
          <div className="gap-3 ml-2 w-[201px] h-6 ">
          <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">Pingky</h2>
            <h2 className='font-[500px] mt-2 text-graay2 text-base'>Cute bed set</h2>
            <div className='flex w-[502px] gap-5 h-6'>
                <h2 className='font-semibold leading-[30px] text-[20px]'>Rp 7.000.000</h2>
                <h2 className='font-[400px] text-base text-graay3 line-through'>Rp 14.000.000</h2>
            </div>
            
          </div>
        </div>
        <div className="card bg-base-100 bg-graay h-[390px] gap-4 w-[270px]">
          <Image src={pic8} alt="keyboard" className="" />
          <div className="gap-3 ml-2 w-[] h-6 ">
          <h2 className=" text-[28px] mt-2 leading-[28.8px] font-semibold">Potty</h2>
            <h2 className='font-[500px] mt-2 text-graay2 text-base'>Minimalist flower pot</h2>
            <div className='flex w-[] gap-5 h-6'>
                <h2 className='font-semibold leading-[30px] text-[20px]'>Rp 500.000</h2>
               
            </div>
            
          </div>
        </div>
      </div>
      <button className='w-[245px] h-[48px] border-[1px] border-brown mt-8 lg:ml-[550px] font-semibold text-base text-brown'>
        Show More
      </button>
    </div>
  )
}

export default Product