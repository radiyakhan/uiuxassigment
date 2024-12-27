// import Image from 'next/image'
// import React from 'react'
// import pic1 from '../../public/fur1.png'
// import pic2 from '../../public/fur2.png'
// import pic3 from '../../public/fur3.png'
// import pic4 from '../../public/fur4.png'
// import pic5 from '../../public/fur5.png'
// import pic6 from '../../public/fur6.png'
// import pic7 from '../../public/fur7.png'
// import pic8 from '../../public/fur8.png'

// const Furniture = () => {
//   return (
//     <div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//   <div className="overflow-hidden rounded-lg">
//     <Image src={pic1} alt="Image 1" className="w-full h-auto object-cover"/>
//   </div>
//   <div className="overflow-hidden rounded-lg">
//     <Image src={pic2} alt="Image 2" className="w-full h-auto object-cover"/>
//   </div>
//   <div className="overflow-hidden rounded-lg">
//     <Image src={pic3} alt="Image 3" className="w-full h-auto object-cover"/>
//   </div>
//   <div className="overflow-hidden rounded-lg">
//     <Image src={pic4} alt="Image 4" className="w-full h-auto object-cover"/>
//   </div>
//   <div className="overflow-hidden rounded-lg">
//     <Image src={pic5} alt="Image 5" className="w-full h-auto object-cover"/>
//   </div>
//   <div className="overflow-hidden rounded-lg">
//     <Image src={pic6} alt="Image 6" className="w-full h-auto object-cover"/>
//   </div>
//   <div className="overflow-hidden rounded-lg">
//     <Image src={pic7} alt="Image 7" className="w-full h-auto object-cover"/>
//   </div>
//   <div className="overflow-hidden rounded-lg">
//     <Image src={pic8} alt="Image 8" className="w-full h-auto object-cover"/>
//   </div>
// </div>
//     </div>
//   );
// };

// export default Furniture

import Image from 'next/image';
import React from 'react';
import pic1 from '../../public/fur1.png';
import pic2 from '../../public/fur2.png';
import pic3 from '../../public/fur3.png';
import pic4 from '../../public/fur4.png';
import pic5 from '../../public/fur5.png';
import pic6 from '../../public/fur6.png';
import pic7 from '../../public/fur7.png';
import pic8 from '../../public/fur8.png';
import imd from '../../public/Images.jpg';

const Furniture = () => {
  return (
    // <div className='mt-14'>
    //     <div>
    //         <p className='text-graay2 font-semibold text-[20px] leading-[30px] text-center'>
    //             Share your setup with
    //         </p>
    //     <h1 className='text-center pb-10 font-bold text-[40px] leading-[48px]'>
    //         #FuniroFurniture
    //     </h1>
    //   </div>
    //   <div className="grid grid-cols-6 p-4">
    //     <div className="col-span-3 row-span-2 overflow-hidden rounded-lg">
    //       <Image src={pic1} alt="Image 1" className="w-[450px] h-[312px] object-cover" />
    //     </div>
    //     <div className="col-span-2 row-span-2 overflow-hidden rounded-lg">
    //       <Image src={pic3} alt="Image 3" className="w-[295px] h-[392px] object-cover" />
    //     </div>
    //     <div className="col-span-2 row-span-1 overflow-hidden rounded-lg">
    //       <Image src={pic4} alt="Image 4" className="w-[290px] h-[348px] object-cover" />
    //     </div>
    //     <div className="col-span-3 row-span-1 overflow-hidden rounded-lg">
    //       <Image src={pic2} alt="Image 2" className="w-[344px] h-[242px] object-cover" />
    //     </div>
    //     <div className="col-span-2 row-span-1 overflow-hidden rounded-lg">
    //       <Image src={pic5} alt="Image 5" className="w-[178px] h-[242px] object-cover" />
    //     </div>
    //     <div className="col-span-3 row-span-1 overflow-hidden rounded-lg">
    //       <Image src={pic6} alt="Image 6" className="w-[425px] h-433px object-cover" />
    //     </div>
    //     <div className="col-span-3 row-span-1 overflow-hidden rounded-lg">
    //       <Image src={pic7} alt="Image 7" className="w-[258px] h-[196px] object-cover" />
    //     </div>
    //     <div className="col-span-6 row-span-1 overflow-hidden rounded-lg">
    //       <Image src={pic8} alt="Image 8" className="w-[381px] h-[323px] object-cover" />
    //     </div>
    //   </div>
    // </div>
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