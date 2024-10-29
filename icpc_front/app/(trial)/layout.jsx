'use client'
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import SideMenu from "@/components/navbar/sidemenu/sidemenu";
import Logo from "../_assets/logo2.png";
import Terminal from "@/components/ui_elems/terminal/terminal_2";
import LiveNow from "@/components/carousals/live_now";
import Link from "next/link";

export default function Layout({ children }) {
    const [open, setOpen] = useState(true);
    const scrollDir = useRef("scrolling down");
    const [hero, setHero] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;
            if (scrollY>window.innerHeight || (window.innerWidth<680 && scrollY>window.innerWidth)){
                setHero(false);
            }else{
                setHero(true);
            }
            if (scrollY < lastScrollY) {
                setOpen(true);
            }
            else if (scrollY > lastScrollY && scrollY > window.innerHeight) {
                setOpen(false);
            }

            scrollDir.current = scrollY > lastScrollY ? "scrolling down" : "scrolling up";
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="w-full">
            {/* <div className="backdrop-blur-lg absolute top-0 z-20">
                <LiveNow/>
            </div>
            <div className="backdrop-blur-lg invisible">
                <LiveNow/>
            </div> */}
            <nav className={`min-h-[5vw] z-50 sticky top-0 max-md:min-h-[15vw] ${hero?"backdrop-blur-md":"max-md:bg-black"} flex items-center text-[1vw] max-md:text-[5vw] w-full transition-transform ease-in-out duration-300 ${open ? "md:transform translate-y-0" : "md:transform -translate-y-full"}`}>
                <Image src="/icpc_foundation.png" width={1} height={1} className="mix-blend-normal h-[6vw] max-md:h-[15vw] max-md:pl-[2vw] w-auto -mr-[2vw] mx-[2vw]" alt="Logo" unoptimized/>
                <div className="md:flex flex-1 justify-center items-center max-md:hidden">
                    <button className={`mx-[1vw] ${hero?"hover:text-black text-white":"text-black hover:text-red-500"} transition ease-in duration-300`} onClick={()=>{scrollTo(0,0)}}>Home</button>
                    <button className={`mx-[1vw] ${hero?"hover:text-black text-white":"text-black hover:text-red-500"} transition ease-in duration-300`} onClick={()=>{document.getElementById('perks').scrollIntoView()}}>Exclusive Perks</button>
                    <button className={`mx-[1vw] ${hero?"hover:text-black text-white":"text-black hover:text-red-500"} transition ease-in duration-300`} onClick={()=>{document.getElementById('important dates').scrollIntoView()}}>Important Dates</button>
                    <button className={`mx-[1vw] ${hero?"hover:text-black text-white":"text-black hover:text-red-500"} transition ease-in duration-300`} onClick={()=>{document.getElementById('register').scrollIntoView()}}>How to register</button>
                    <Link href="/halloffame" className={`mx-[1vw] ${hero?"hover:text-black text-white":"text-black hover:text-red-500"} transition ease-in duration-300`}>Hall of Fame</Link>
                    <Link href="/promote" className={`mx-[1vw] ${hero?"hover:text-black text-white":"text-black hover:text-red-500"} transition ease-in duration-300`}>Promote</Link>
                </div>
                <button className="py-[0.5vw] px-[1vw] max-md:pr-[2vw] mx-[1vw] hover:bg-white hover:text-black rounded-full transition duration-300 ease max-md:hidden invisible">Login</button>
                <div className="flex justify-end items-center text-5xl px-5 md:hidden max-md:flex-1">
                    <SideMenu />
                </div>
            </nav>
            <div className="max-w-screen md:-mt-[6vw] max-md:-mt-[-9vw] bg-stone-30 bg-white">
                {children}
                <Terminal/>
            </div>
        </div>
    );
}
