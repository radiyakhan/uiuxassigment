import Image from 'next/image';
import React from 'react';
import imd from '../../public/Images.jpg';

const Furniture = () => {
  return (
    <div>
      <div className='mt-14'>
           <p className='text-graay2 font-semibold text-[20px] leading-[30px] text-center'>
                 Share your setup with
        </p>
         <h1 className='text-center pb-10 font-bold text-[40px] leading-[48px]'>
             #FuniroFurniture
         </h1>
       </div>
      <Image src={imd} alt='ok'/>
    </div>
  );
};

export default Furniture;