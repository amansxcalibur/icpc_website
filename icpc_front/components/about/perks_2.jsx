'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ExclusivePerks2() {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div 
            className="flex w-screen justify-center items-center flex-col py-[5vw] pb-[10vw] text-black bg-white relative max-md:py-[12vw]"
            style={{
                backgroundImage: `
                    linear-gradient(#e5e7eb 1px, transparent 1px),
                    linear-gradient(to right, #e5e7eb 1px, transparent 1px)
                `,
                backgroundSize: '2vw 2vw'
            }}
        >
            <div
                className="absolute z-50 bg-white h-full"
                style={{
                    //transform: `translate(${Math.sin(scrollPos * 0.01) * 20}px,${(scrollPos * 0.01) * 20}px)`,
                }}
            >
                {/* <img
                    src="/api/placeholder/400/320"
                    alt="sphere"
                    className="h-[10vw] w-auto"
                /> */}
            </div>
            <p id="perks" className="text-[3vw] font-semibold max-md:text-[6vw]">Exclusive Perks</p>
            <div className="flex justify-center min-w-[80vw] mt-[2vw] flex-col">
                <div className="flex-1 min-h-[10vw] flex items-center mt-[5vw] max-md:flex-col">
                    <div className="flex-1 flex justify-center">
                        <Image src="/more_people_icpc.jpg" width={1} height={1} unoptimized className="min-h-[20vw] w-auto max-md:min-h-[60vw] max-md:min-w-[90vw] min-w-[30vw] bg-gray-500 rounded-[2vw]"></Image>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <p className="text-[1.5vw] text-center font-semibold max-md:text-[4vw]">Expanded On-Site Participation</p>
                        <p className="text-[1.5vw] text-center max-w-[30vw] max-md:max-w-[90vw] max-md:text-[4vw]">We have increased our on-site capacity, offering more students the chance to get selected for the regionals.</p>
                    </div>
                </div>
                <div className="flex-1 min-h-[10vw] flex items-center mt-[10vw] max-md:flex-col-reverse">
                    <div className="flex-1 flex flex-col items-center">
                        <p className="text-[1.5vw] text-center font-semibold max-md:text-[4vw]">Exclusive Webinar</p>
                        <p className="text-[1.5vw] text-center max-w-[30vw] max-md:max-w-[90vw] max-md:text-[4vw]">Participants will gain access to an exclusive webinar led by an ICPC World Finalist, offering invaluable tips and strategies to enhance their ICPC performance.</p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image src="/webinar.jpg" width={1} height={1} unoptimized className="min-h-[20vw] max-md:min-h-[60vw] max-md:min-w-[90vw] min-w-[30vw] bg-gray-500 rounded-[2vw] w-auto"></Image>
                    </div>
                </div>
                <div className="flex-1 min-h-[10vw] flex items-center mt-[10vw] max-md:flex-col">
                    <div className="flex-1 flex justify-center">
                        <Image src="/winner_icpc.jpg" width={1} height={1} unoptimized className="min-h-[20vw] w-auto min-w-[30vw] max-md:min-h-[60vw] max-md:min-w-[90vw] bg-gray-500 rounded-[2vw]"></Image>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <p className="text-[1.5vw] text-center font-semibold max-md:text-[4vw]">Noteworthy Certificates</p>
                        <p className="text-[1.5vw] text-center max-w-[30vw] max-md:max-w-[90vw] max-md:text-[4vw]">All teams who submit at least one solution successfully will receive a certificate of participation.</p>
                    </div>
                </div>
                <div className="flex-1 min-h-[10vw] flex items-center mt-[10vw] max-md:flex-col-reverse">
                    <div className="flex-1 flex flex-col items-center">
                        <p className="text-[1.5vw] text-center font-semibold max-md:text-[4vw]">Coach Recognitions</p>
                        <p className="text-[1.5vw] text-center max-w-[30vw] max-md:max-w-[90vw] max-md:text-[4vw]">Coaches who get 5 or more teams registered get a special certificate in recognition for their efforts in fostering young talent.</p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image src="/smart_india.jpg" unoptimized width={1} height={1} className="min-h-[20vw] min-w-[30vw] max-md:min-h-[60vw] max-md:min-w-[90vw] bg-gray-500 rounded-[2vw]"></Image>
                    </div>
                </div>
            </div>
        </div>
    );
}
