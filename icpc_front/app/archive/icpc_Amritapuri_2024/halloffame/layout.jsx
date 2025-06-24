'use client'
import { useEffect, useState, useRef } from "react";
import Terminal from "@/app/components/ui_elems/terminal/terminal_2";
import Navbar from "@/app/components/navbar/navbar";

import Script from "next/script";

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
        <div className="w-full">
            {/* Google Analytics */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-XQF50KFS2B"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XQF50KFS2B');
                `}
            </Script>
            <Navbar open={open} hero={hero} darkSection={true} />
            <div className="max-w-screen md:-mt-[6vw] max-md:-pt-[-9vw] bg-stone-30 bg-white">
                {children}
                <Terminal/>
            </div>
        </div>
    );
}
