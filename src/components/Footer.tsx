import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span className="ml-3 text-xl">Furniro</span>
      </a>
      <p className="mt-16 ml-3 w-[285px] h-[72px] text-base text-gray-500">
      400 University Drive Suite 200 Coral Gables, FL 33134 USA
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-graay2 tracking-widest text-base mb-3">
          Links
        </h2>
        <nav className="list-none font-medium text-black text-base mb-10">
          <li className='mb-6'>
            <a >Home</a>
          </li>
          <li className='mb-6'>
            <a>Shop</a>
          </li>
          <li className='mb-6'>
            <a>About</a>
          </li>
          <li>
            <a >Contact</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-graay2 tracking-widest text-base mb-3">
          Help
        </h2>
        <nav className="list-none font-medium  text-black text-base mb-10">
          <li className='mb-6'>
            <a >Payment Options</a>
          </li>
          <li className='mb-6'>
            <a >Returns</a>
          </li>
          <li>
            <a >Privacy Policies</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-graay2 tracking-widest text-base mb-3">
          Newsletter
        </h2>
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
  <div className="flex md:flex-nowrap flex-wrap justify-center ml-[-20px] items-end md:justify-start">
    <div className="relative sm:w-64 w-40 mt-[-22px] sm:mr-4 mr-2">
      <h1 className='underline opacity-40'>Enter Your Email Adress</h1>
    </div>
    <button className="inline-flex mt-[-20px] text-black py-2 px-6 hover:underline ">
      SUBSCRIBE
    </button>
  </div>
</div>

      </div>
      
    </div>
  </div>
  <div>
  <div className='scroll-m-20 border-b font-semibold tracking-tight transition-colors first:mt-0 pt-[20px]'/>
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-black text-base text-center sm:text-left">
      2023 furino. All rights reverved
      </p>
     
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
