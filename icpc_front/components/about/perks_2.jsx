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
        <div className="flex w-screen justify-center items-center flex-col my-[5vw] text-black relative">
            <div
                className="absolute z-50 bg-black h-full"
                style={{
                    transform: `translate(${Math.sin(scrollPos * 0.01) * 20}px,${(scrollPos * 0.01) * 20}px)`,
                }}
            >
                <Image
                    src="/sphere.png"
                    width={1}
                    height={1}
                    className="h-[10vw] w-auto"
                    unoptimized
                />
            </div>
            <p className="text-[3vw] font-semibold">Exclusive Perks</p>
            <div className="flex justify-center min-w-[80vw] mt-[2vw] bg-black flex-col">
                <div className="bg-red-500 flex-1 min-h-[10vw] flex items-center">
                    <div className="flex-1 flex justify-center">
                        <div className="min-h-[20vw] min-w-[30vw] bg-gray-500 rounded-[2vw]"></div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <p className="text-[1.5vw] text-center font-semibold">Expanded On-Site Participation</p>
                        <p className="text-[1.5vw] text-center max-w-[30vw]">We have increased our on-site capacity, offering more students the chance to get selected for the regionals.</p>
                    </div>
                </div>
                <div className="bg-red-500 flex-1 min-h-[10vw] flex items-center">
                    <div className="flex-1 flex flex-col items-center">
                        <p className="text-[1.5vw] text-center font-semibold">Exclusive Webinar</p>
                        <p className="text-[1.5vw] text-center max-w-[30vw]">Participants will gain access to an exclusive webinar led by an ICPC World Finalist, offering invaluable tips and strategies to enhance their ICPC performance.</p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="min-h-[20vw] min-w-[30vw] bg-gray-500 rounded-[2vw]"></div>
                    </div>
                </div>
                <div className="bg-red-500 flex-1 min-h-[10vw] flex items-center">
                    <div className="flex-1 flex justify-center">
                        <div className="min-h-[20vw] min-w-[30vw] bg-gray-500 rounded-[2vw]"></div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <p className="text-[1.5vw] text-center font-semibold">Noteworthy Certificates</p>
                        <p className="text-[1.5vw] text-center max-w-[30vw]">All teams who submit at least one solution successfully will receive a certificate of participation.</p>
                    </div>
                </div>
                <div className="bg-red-500 flex-1 min-h-[10vw] flex items-center">
                    <div className="flex-1 flex flex-col items-center">
                        <p className="text-[1.5vw] text-center font-semibold">Coach Recognitions</p>
                        <p className="text-[1.5vw] text-center max-w-[30vw]">Coaches who get 5 or more teams registered get a special certificate in recognition for their efforts in fostering young talent.</p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="min-h-[20vw] min-w-[30vw] bg-gray-500 rounded-[2vw]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
