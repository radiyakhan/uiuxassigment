import Image from 'next/image'
import React from 'react'
import pic1 from '../../public/Image-living room.jpg'
import pic2 from '../../public/Mask Group.jpg'
import pic3 from '../../public/Mask Group1.jpg'


const Range = () => {
  return (
    <div className='mt-[150px] '>
      <div className=' h-[76.71px] text-center'>
        <h1 className='h-12 font-bold text-[32px] leading-48px'>
            Browse The Range
        </h1>
        <p className='font-[400px] text-[20px] leading-[30px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className='flex flex-wrap mt-14 gap-5 ml-[75px]'>
        <div>
        <Image src={pic1} alt='room'/>
        <h1 className='h-[36px] mt-4 text-center font-[600] text-[24px] leading-[36px]'>Dining</h1>
        </div>
        <div>
        <Image src={pic2} alt='room'/>
        <h1 className='text-center mt-4 h-[36px] font-[600] text-[24px] leading-[36px]'>
            Living
        </h1>
        </div>
        <div>
        <Image src={pic3} alt='room'/>
        <h1 className='text-center mt-4 h-[36px] font-[600] text-[24px] leading-[36px]'>Bedroom</h1>
        </div>
      </div>
    </div>
  )
}

export default Range 
