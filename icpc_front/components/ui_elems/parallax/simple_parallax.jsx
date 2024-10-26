'use client'

import SimpleParallax from "simple-parallax-js";
import Image from "next/image";

export default function SimpleParllx(){
    return(
    <SimpleParallax delay={0}>
        <Image src="/temp_bg.jpeg" alt="image" unoptimized className="w-screen absolute -z-10" width={1024} height={1920} />
    </SimpleParallax>
    )
}