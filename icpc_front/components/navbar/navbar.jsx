'use client'
import Image from "next/image";
import Link from "next/link";
import SideMenu from "@/components/navbar/sidemenu/sidemenu";
import Bars from "../svg/bars-3";
import { useState } from "react";

export default function Navbar({ open, hero, darkSection }) {
    const [openMenu, setOpenMenu] = useState(false);
    // Use white text for hero section and dark sections, black text otherwise
    const textColor = (hero || darkSection) ? "text-white hover:text-gray-300" : "text-black hover:text-red-500";
    const locations = [
        { name: "Amritapuri", href: "/reach-us/amritapuri" },
        { name: "Bengaluru", href: "/reach-us/bengaluru" },
        { name: "Coimbatore", href: "/reach-us/coimbatore" }
      ];
    
    return (
        <>
        <nav className={`min-h-[5vw] z-50 sticky top-0 max-md:min-h-[15vw] backdrop-blur-md ${hero?"":"max-md:bg-black"} flex items-center text-[1vw] max-md:text-[5vw] w-full transition-transform ease-in-out duration-300 ${open ? "md:transform translate-y-0" : "md:transform -translate-y-full"}`}>
            <Image 
                src="/icpc_foundation.png" 
                width={1} 
                height={1} 
                className="mix-blend-normal h-[6vw] max-md:h-[15vw] max-md:pl-[2vw] w-auto -mr-[2vw] mx-[2vw]" 
                alt="Logo" 
                unoptimized
            />
            <div className="md:flex flex-1 justify-center items-center max-md:hidden">
                <Link 
                    href="/" 
                    className={`mx-[1vw] ${textColor} transition ease-in duration-300`}
                >
                    Home
                </Link>
                <Link 
                    href="/#perks" 
                    className={`mx-[1vw] ${textColor} transition ease-in duration-300`}
                >
                    Why Amrita
                </Link>
                <Link 
                    href="/halloffame" 
                    className={`mx-[1vw] ${textColor} transition ease-in duration-300`}
                >
                    Hall of Fame
                </Link>
                <div className="group">
                    <button
                        className={`mx-[1vw] ${textColor} transition ease-in duration-300 group`}
                    >
                        Reach Us
                    </button>
                    <div 
                    className="absolute -translate-x-[20%] bg-white shadow-lg rounded-md border border-gray-200 z-10 min-w-[8vw] group-hover:block hidden"
                    >
                    {locations.map((location, index) => (
                        <Link
                        href={location.href} 
                        key={index} 
                        className="py-2 hover:bg-gray-100 text-gray-800 hover:text-black flex justify-center"
                        >
                        {location.name}
                        </Link>
                    ))}
                    </div>
                </div>
                <Link 
                    href="/ranking-process" 
                    className={`mx-[1vw] ${textColor} transition ease-in duration-300`}
                >
                    Ranking Process
                </Link>
                <Link 
                    href="/team-selection-process" 
                    className={`mx-[1vw] ${textColor} transition ease-in duration-300`}
                >
                    Selection Process
                </Link>
                <Link 
                    href="/promote" 
                    className={`mx-[1vw] ${textColor} transition ease-in duration-300`}
                >
                    Promote
                </Link>
                <Link 
                    href="/gallery" 
                    className={`mx-[1vw] ${textColor} transition ease-in duration-300`}
                >
                    Gallery
                </Link>
            </div>
            <button className={`py-[0.5vw] px-[1vw] max-md:pr-[2vw] mx-[1vw] hover:bg-white hover:text-black rounded-full transition duration-300 ease max-md:hidden invisible ${textColor}`}>
                Login
            </button>
            <div className="flex justify-end items-center text-5xl px-5 md:hidden max-md:flex-1">
                <button className="text-[6vw]" onClick={()=>{setOpenMenu(true)}}>
                    <Bars/>
                </button>
            </div>
        </nav>
        <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} locations={locations}/>
        </>
    );
} 