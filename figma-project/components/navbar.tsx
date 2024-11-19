'use client';
import Image from 'next/image';
import React from 'react';
import { IoSearchSharp, IoPerson } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { FaWindowClose } from "react-icons/fa";

export const Navbar = () => {

  return (
    <>
      <header className="min-w-full h-[115px] bg-[#A29875] flex justify-evenly items-center ">
        <span className="text-[#FFFFFF] ">
          <Image src={"/logo.svg"} width={235} height={65} alt="This is the web logo" />
        </span>

        <div className="relative lg:block hidden">
          <input
            type="text"
            placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"
            className="rounded-lg w-[550px] h-[45px] px-2 font-[Nunito Sans] text-[#6C757D] "
          />
          <IoSearchSharp className="absolute right-3 top-[12px] text-xl text-gray-600" />
        </div>
        <span className="w-[177px] h-[33px] text-3xl lg:flex items-center gap-4 text-white hidden ">
          <CiHeart />
          <IoPerson />
          <FaCartShopping />
        </span>
        <span className="lg:hidden block text-3xl"  onClick={() => {
    gsap.to(".menudiv", { right: 0, duration:0.5,display:"flex"  });
    gsap.from(".navLink",{x:100,duration:1,stagger:0.3 ,opacity:0})
  }}>
          <CgMenuRightAlt />
        </span>
      </header>

      <div className="menudiv w-full flex flex-col justify-center items-center z-50">
      <div className="w-full relative">
          <FaWindowClose
            className="text-black absolute top-[-11rem] left-[2rem] rounded-lg text-2xl"
            onClick={() => {
              gsap.to(".menudiv", { right: "-80%", duration:0.5,display:"none" })
            }}
          />
        </div>
        <nav className="flex flex-col mx-auto gap-3 text-3xl item-start h-[30%] text-black">
          <Link href={'/'} className="flex gap-3 items-center border-b-2 border-gray-300 navLink">
            <span>Favourite</span> <CiHeart />
          </Link>
          <Link href={'/'} className="flex gap-3 items-center border-b-2 border-gray-300 navLink">
            <span>Account</span> <IoPerson />
          </Link>
          <Link href={'/'} className="flex gap-3 items-center border-b-2 border-gray-300 navLink">
            <span>Special Offers</span> <FaCartShopping />
          </Link>
          <Link href={'/'} className="flex gap-3 items-center border-b-2 border-gray-300 navLink">
            <span>Search</span> <IoSearchSharp />
          </Link>
        </nav>
      </div>
    </>
  );
};
