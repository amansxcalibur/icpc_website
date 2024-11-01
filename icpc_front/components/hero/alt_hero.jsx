import Terminal from "../ui_elems/terminal/terminal";
import CustomButton from "../ui_elems/buttons/color_onhover_button";
import Image from "next/image";
import Link from "next/link";

export default function AltHero(){
    return(
        <>
        <div className="rounded-bg-full max-md:-mt-[24vw]">
            <Image 
                src="/amrita_hq.jpg" 
                className="md:min-h-screen max-md:min-h-[90vw] max-md:w-auto md:min-w-[100vw]" 
                width={1} 
                height={1} 
                unoptimized
                alt="Amrita Campus"
            />
        </div>
        <div className="md:min-h-screen min-w-[100vw] max-md:min-h-[90vw] bg-black opacity-50 absolute z-[5] top-0 mix-blend-multiply"></div>
        <div className="md:min-h-screen flex flex-col justify-center items-center w-full max-md:min-h-[90vw] absolute z-10 top-0">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-center text-[5vw] max-md:text-[9vw] max-md:leading-[12vw] tracking-tighter max-w-[80vw] max-md:max-w-[90vw] text-white mb-[2vw] font-semibold">
                    Welcome to<br/> ICPC 2024 Regionals
                </h1>
                <p className="text-[1.4vw] -mt-[1vw] max-md:text-[4vw] max-w-[40vw] max-md:max-w-[90vw] text-center text-white font-medium mb-[4vw]">
                    Join the brightest minds at <br/>Amrita Vishwa Vidyapeetham for ICPC 2024.
                </p>
                <a 
                    href="https://icpc.global" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white text-[1.2vw] max-md:text-[4vw] py-[1vw] px-[3vw] rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Register Now
                </a>
            </div>
        </div>
        </>
    )
}