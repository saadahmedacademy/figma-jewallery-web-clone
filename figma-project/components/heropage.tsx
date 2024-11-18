'use client';
import React, { useEffect } from 'react'
import gsap from 'gsap';
import Image from 'next/image';


export const Heropage = () => {

  useEffect(() => {
      gsap.from(".gsapheading", {
        opacity: 0,
        duration: 1,
        x:-30,
        stagger:0.5
      });
  }, []);


  return (
   <section className="text-white body-font">
  <div className="container mx-auto flex px-7 py-24  md:flex-row flex-col items-center">

    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <div className="title-font flex flex-col gap-1 sm:text-4xl text-3xl mb-4 font-medium text-white libre-bodoni">
      <h1 className='gsapheading'> IMPECCABLE</h1> 
      <h1 className='gsapheading'>CRAFTSMANSHIP AND</h1>
      <h1 className='gsapheading'> FINESSE</h1>
      </div>
      <p className="mb-8 leading-relaxed libre-bodoni">
      An example of intricate workmanship and detail,<br/>
      elegant necklaces and long and short chains form 
      a part of our desirable collection.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#A29875] border-0 py-2 px-6 rounded-lg text-lg">
          Explain Now 
        </button>
      </div>
    </div>
    <div className='md:w-1/2 flex justify-center items-center '>
    <div className=" relative ">
    <div className='md:w-[95%] md:h-[95%] w-[90%] h-[92%] top-[4%] left-[5%] absolute md:top-3 md:left-2' id='imageBorder'></div>
      <Image
        className=" w-[320px] h-[420px]  object-cover object-center rounded"
        alt="hero"
        src="/girls ⏵ girl.svg"    
        width='0'
        height="0"
      />
    </div>
    </div>
  </div>

</section>

  )
}
