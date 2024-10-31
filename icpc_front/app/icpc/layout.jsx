'use client'
import { useEffect, useState, useRef } from "react";
import Terminal from "@/components/ui_elems/terminal/terminal_2";
import Navbar from "@/components/navbar/navbar";

export default function Layout({ children }) {
    const [open, setOpen] = useState(true);
    const scrollDir = useRef("scrolling down");
    const [hero, setHero] = useState(true);
    const [darkSection, setDarkSection] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const checkDarkSections = () => {
            // Get all potential dark sections
            const registerSection = document.getElementById('register');
            const amritaSection = document.getElementById('about_amrita');
            const why_participateSection = document.getElementById('why_participate');
            //const heroSection = document.querySelector('video');  // Assuming hero has a video element
            
            // Get the current scroll position
            const scrollPosition = window.scrollY;
            const navbarPosition = 50; // Approximate navbar height

            // Check if navbar overlaps with any dark section
            const isDark = [registerSection, amritaSection, why_participateSection].some(section => {
                if (!section) return false;
                const rect = section.getBoundingClientRect();
                return rect.top <= navbarPosition && rect.bottom >= navbarPosition;
            });

            setDarkSection(isDark);
        };

        const updateScrollDir = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Check dark sections
            checkDarkSections();

            // Hero section check
            if (scrollY > windowHeight || (window.innerWidth < 680 && scrollY > window.innerWidth)) {
                setHero(false);
            } else {
                setHero(true);
            }

            // Navbar hide/show logic
            if (scrollY < lastScrollY) {
                setOpen(true);
            }
            else if (scrollY > lastScrollY && scrollY > windowHeight) {
                setOpen(false);
            }

            scrollDir.current = scrollY > lastScrollY ? "scrolling down" : "scrolling up";
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateScrollDir();
                    checkDarkSections(); // Check on every scroll
                });
                ticking = true;
            }
        };

        // Initial check
        checkDarkSections();

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="w-full">
            <Navbar open={open} hero={hero} darkSection={darkSection} />
            <div className="max-w-screen md:-mt-[6vw] max-md:-mt-[-9vw] bg-stone-30 bg-white">
                {children}
                <Terminal/>
            </div>
        </div>
    );
}
