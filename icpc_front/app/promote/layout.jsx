'use client'
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/navbar/navbar";

export default function Layout({ children }) {
    const [open, setOpen] = useState(true);
    const scrollDir = useRef("scrolling down");
    const [hero, setHero] = useState(false);

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
        <div className="w-full bg-white">
            <Navbar open={open} hero={hero} darkSection={false} />
            <div className="max-w-screen bg-stone-300">
                {children}
            </div>
        </div>
    );
}
