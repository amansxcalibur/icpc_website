'use client'
import Image from "next/image";
import Link from "next/link";
import Logo from "../_assets/logo2.png"
import { useState } from "react";

export default function Layout({ children }) {
    const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
        <nav className="min-h-[5vw] flex mb-[3vw] bg-[#4b82c4] to-transparent top-0 items-center text-[1vw] max-md:text-[5vw] fixed z-20 w-full transition ease-in duration-300">
            <Image src={Logo} className="h-[3vw] max-md:pl-[2vw] w-auto -mr-[2vw] mx-[1vw]"></Image>
            {/* <button className="py-[1vw] max-md:py-[2vw] px-[2vw] max-md:flex-1 max-md:flex">BunkMate</button> */}
            <div className="flex flex-1 justify-center items-center max-md:hidden">
            <button className="mx-[1vw] hover:text-black transition ease-in duration-300" >Home</button>
            <button className="mx-[1vw] hover:text-black transition ease-in duration-300" >ASPC</button>
            <button className="mx-[1vw] hover:text-black transition ease-in duration-300" >Important Dates</button>
            <button onMouseEnter={()=>{setOpen(true)}} onMouseLeave={()=>{setOpen(true)}} className="mx-[1vw] hover:text-black transition ease-in duration-300" >Contests</button>
            </div>
            <button className="py-[0.5vw] px-[1vw] max-md:pr-[2vw] mx-[1vw] hover:bg-white hover:text-black rounded-full transition duration-300 ease">Login</button>
        </nav>
        <div className={`flex-col ${open?"flex":"hidden"}`}>
            <button>Online</button>
            <button>Onsite</button>
        </div>
        <div className="max-w-screen">
            {/* <ReactLenis root options={{ lerp: 0.06, duration: 1.5, smoothTouch: true, smoothWheel:true }}> */}
            {children}
            {/* </ReactLenis> */}
        </div>
    </div>
  );
}
