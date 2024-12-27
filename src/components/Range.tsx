import Image from 'next/image'
import React from 'react'

const BrowseRange = () => {
  return (
    <div className='flex flex-col justify-center mt-10 py-16'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[#333333] font-bold text-2xl sm:text-3xl md:text-4xl'>Browse The Range</h1>
        <p className='text-[#666666] text-sm sm:text-base mx-2 md:text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center py-12 gap-6 sm:gap-12">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center bg-white p-4 w-full  sm:w-[300px] md:w-[381px]">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] mb-4">
            <Image
              src="/Image-living room.jpg"
              alt="Dinning Area Furniture"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-lg text-[#333333] font-semibold">Dinning</h3>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-center items-center bg-white p-4 w-full sm:w-[300px] md:w-[381px]">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] mb-4">
            <Image
              src="/Mask Group.jpg"
              alt="Living Room Furniture"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-lg text-[#333333] font-semibold">Living</h3>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center bg-white p-4 w-full sm:w-[300px] md:w-[381px]">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] mb-4">
            <Image
              src="/Mask Group1.jpg"
              alt="Bedroom Furniture"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-lg text-[#333333] font-semibold">Bedroom</h3>
        </div>
      </div>
    </div>
  );
};

export default BrowseRange;