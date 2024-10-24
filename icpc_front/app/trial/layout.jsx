'use client'
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import SideMenu from "@/components/navbar/sidemenu/sidemenu";
import Logo from "../_assets/logo2.png";

export default function Layout({ children }) {
    const [open, setOpen] = useState(true);
    const scrollDir = useRef("scrolling down");

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;
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
            <nav className={`min-h-[5vw] sticky top-0 max-md:min-h-[15vw] flex backdrop-blur-md items-center text-[1vw] max-md:text-[5vw] w-full transition-transform ease-in-out duration-300 ${open ? "transform translate-y-0" : "transform -translate-y-full"}`}>
                <Image src={Logo} className="h-[3vw] max-md:h-[6vw] max-md:pl-[2vw] w-auto -mr-[2vw] mx-[1vw]" alt="Logo" />
                <div className="md:flex flex-1 justify-center items-center max-md:hidden">
                    <button className="mx-[1vw] hover:text-black transition ease-in duration-300">Home</button>
                    <button className="mx-[1vw] hover:text-black transition ease-in duration-300">ASPC</button>
                    <button className="mx-[1vw] hover:text-black transition ease-in duration-300">Important Dates</button>
                    <button className="mx-[1vw] hover:text-black transition ease-in duration-300">Contests</button>
                </div>
                <button className="py-[0.5vw] px-[1vw] max-md:pr-[2vw] mx-[1vw] hover:bg-white hover:text-black rounded-full transition duration-300 ease max-md:hidden">Login</button>
                <div className="flex justify-end items-center text-5xl px-5 md:hidden max-md:flex-1">
                    <SideMenu />
                </div>
            </nav>
            <div className="max-w-screen -mt-[3vw]">
                {children}
            </div>
        </div>
    );
}
