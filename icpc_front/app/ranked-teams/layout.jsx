'use client'
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/navbar/navbar";
import Script from "next/script";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const [open, setOpen] = useState(true);
    const scrollDir = useRef("scrolling down");
    const [hero, setHero] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;
            if (scrollY>window.innerHeight || (window.innerWidth<680 && scrollY>window.innerWidth) || pathname=='/promote' || pathname=='/ranked-teams'){
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
            <Navbar open={open} hero={hero} darkSection={false} />
            <div className="max-w-screen bg-stone-300">
                {children}
            </div>
        </div>
    );
}
