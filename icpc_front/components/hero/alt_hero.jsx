import Image from "next/image";
import Link from "next/link";

export default function AltHero(){
    return(
        <>
            <div className="bg-gray-100 md:min-h-screen max-md:min-h-[90vw] rounded-bg-full max-md:-mt-[24vw]">
                {/* Optional: Add content here if needed */}
            </div>
            {/* <div className="md:min-h-screen min-w-full max-md:min-h-[90vw] bg-black opacity-50 absolute z-[5] top-0 mix-blend-multiply"></div> */}
            <div className="md:min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center w-full max-md:min-h-[100vw] absolute z-10 top-0 px-4 md:px-5 pt-[10vw] md:pt-[8vw] lg:pt-[6vw] max-md:pt-[20vw]">
                <div className="flex flex-col justify-center items-center md:items-center w-full md:w-1/2 lg:w-3/5">
                    <h1 className="text-[8vw] md:text-[5vw] lg:text-[4vw] xl:text-[3.5vw] max-md:text-center max-md:leading-[10vw] md:leading-[6vw] lg:leading-[5vw] tracking-tighter max-w-[95vw] md:max-w-[80vw] lg:max-w-[70vw] text-blue-500 mb-[2vw] md:mb-[1vw] font-semibold text-center md:text-left">
                        ICPC 2025 Regionals
                    </h1>
                    <p className="text-[4vw] md:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.2vw] -mt-[1vw] md:-mt-[1vw] max-w-[90vw] md:max-w-[50vw] lg:max-w-[40vw] text-center md:text-left text-black font-medium mb-[4vw] md:mb-[2vw] [&>*]:duration-300">
                        <Link href={'/reach-us/bengaluru'} className="hover:text-blue-400">Bengaluru</Link> | <Link href={'/reach-us/coimbatore'} className="hover:text-blue-400">Coimbatore</Link> | <Link href={'/reach-us/amritapuri'} className="hover:text-blue-400">Kollam</Link>
                    </p>
                    {/* <div className="gap-x-[1vw] flex max-md:flex-col max-md:justify-center max-md:items-center">
                        <Link
                            href="/final-rank-list"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-600 text-white text-[1.2vw] max-md:text-[4vw] py-[1vw] px-[3vw] rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            View Final Rank List
                        </Link>
                        <p className="md:hidden mt-[1vw]"></p>
                        <Link
                            href="/problem-set"
                            rel="noopener noreferrer"
                            className="bg-blue-500 ml-[1vw] hover:bg-blue-600 text-white text-[1.2vw] max-md:text-[4vw] py-[1vw] px-[3vw] rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            View Problem Set
                        </Link>
                        <p className="md:hidden mt-[1vw]"></p>
                        <Link
                            href="/directors-report"
                            rel="noopener noreferrer"
                            className="bg-blue-500 ml-[1vw] hover:bg-blue-600 text-white text-[1.2vw] max-md:text-[4vw] py-[1vw] px-[3vw] rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            View Director&apos;s Report
                        </Link>
                    </div> */}
                </div>

                <div className="flex flex-col items-center md:items-start justify-center mt-[4vw] md:mt-0 w-full md:w-1/2 lg:w-2/5">
                    <Image
                        src="/3df2.png"
                        alt="ICPC 2025 Logo"
                        width={1}
                        height={1}
                        className="w-[50vw] h-[50vw] md:w-[45vw] md:h-[45vw] lg:w-[40vw] lg:h-[40vw] xl:w-[35vw] xl:h-[35vw] 2xl:w-[30vw] 2xl:h-[30vw] object-contain mb-[2vw] md:-mr-[5vw]"
                        unoptimized
                    />
                    {/* <p className="text-[1.4vw] max-md:text-[4vw] text-black font-medium mb-[2vw]">
                        ICPC 2025 Regionals, Amritapuri
                    </p>
                    <Link
                        href="/register"
                        className="bg-blue-500 hover:bg-blue-600 text-white text-[1.2vw] max-md:text-[4vw] py-[1vw] px-[3vw] rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Register Now
                    </Link> */}
                </div>
            </div>
        </>
    )
}