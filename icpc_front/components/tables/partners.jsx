import Image from "next/image";
import Link from "next/link";

export default function OutreachPartners(){
    return(
        <div className="text-black flex justify-center flex-col items-center relative overflow-hidden">
            <div className="min-w-[90vw] flex relative">
                <div className="text-[2.5vw] max-md:text-[6vw] font-semibold absolute z-10 w-full h-[20vw] max-md:h-[60vw] flex justify-center items-center pointer-events-none">
                    <div className="max-w-[90vw] flex-1">Outreach Partners</div>
                </div>
                <div className="grid grid-rows-3 max-md:grid-rows-4 grid-flow-col justify-center min-h-screen max-w-[100vw] overflow-hidden relative">
                    <div className="grid grid-cols-4 max-md:grid-cols-3 min-w-[130vw]">
                        <div className="h-full w-full border-[#1c1c1c] border-[1px] hover:bg-yellow-100 border-solid flex items-end"></div>
                        <div className="h-full w-full border-[#1c1c1c] border-[1px] hover:bg-yellow-100 border-solid transition"></div>
                        <div className="h-full w-full border-[#1c1c1c] border-[1px] hover:bg-yellow-100 border-solid"></div>
                        <div className="h-full w-full border-[#1c1c1c] border-[1px] hover:bg-yellow-100 border-solid max-md:hidden"></div>
                    </div>
                    <div className="grid grid-cols-4 max-md:grid-cols-3 min-w-[130vw] max-md:min-w-[230vw]">
                        <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid hover:bg-yellow-100 flex items-end"></div>
                        <Link href="https://www.codechef.com/" className="h-full w-full border-[#1c1c1c] border-[1px] border-solid hover:bg-yellow-100 transition flex justify-center items-center">
                            <Image src="https://cdn.codechef.com/images/cc-logo.svg" className="min-h-[6vw] w-auto" width={1} height={1} unoptimized />
                        </Link>
                        <div className="h-full w-full border-[#1c1c1c] border-[1px] hover:bg-yellow-100 border-solid md:hidden"></div>
                        <Link href="https://www.geeksforgeeks.org/" className="h-full w-full max-md:hidden border-[#1c1c1c] border-[1px] border-solid hover:bg-yellow-100 flex justify-center items-center">
                            <Image src="/geeks-for-geeks.png" className="min-h-[3vw] w-auto" width={1} height={1} unoptimized />
                        </Link>
                        <div className="h-full w-full border-[#1c1c1c] border-[1px] hover:bg-yellow-100 border-solid max-md:hidden"></div>
                    </div>
                    <div className="grid grid-cols-4 max-md:grid-cols-3 min-w-[130vw]">
                        <div className="h-full w-full border-[#1c1c1c] border-[1px] hover:bg-yellow-100 border-solid flex items-end"></div>
                        <Link href="https://www.geeksforgeeks.org/" className="h-full w-full md:hidden border-[#1c1c1c] border-[1px] border-solid hover:bg-yellow-100 flex justify-center items-center">
                            <Image src="/geeks-for-geeks.png" className="min-h-[3vw] w-auto max-md:h-[10vw]" width={1} height={1} unoptimized />
                        </Link>
                        <div className="h-full w-full border-[#1c1c1c] border-[1px] hover:bg-yellow-100 border-solid hover:bg-[#1c1c1c73] transition max-md:hidden"></div>
                        <div className="h-full w-full border-[#1c1c1c] border-[1px] hover:bg-yellow-100 border-solid"></div>
                        <div className="h-full w-full border-[#1c1c1c] border-[1px] hover:bg-yellow-100 border-solid max-md:hidden"></div>
                    </div>
                    <div className="grid grid-cols-4 max-md:grid-cols-3 min-w-[130vw] md:hidden">
                        <div className="h-full w-full border-[#1c1c1c] border-[1px] hover:bg-yellow-100 border-solid flex items-end"></div>
                        <div className="h-full w-full border-[#1c1c1c] border-[1px] hover:bg-yellow-100 border-solid hover:bg-[#1c1c1c73] transition"></div>
                        <div className="h-full w-full border-[#1c1c1c] border-[1px] hover:bg-yellow-100 border-solid"></div>
                        <div className="h-full w-full border-[#1c1c1c] border-[1px] hover:bg-yellow-100 border-solid max-md:hidden"></div>
                    </div>

                    {/* Transparent Gradient Overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent from-50% to-white via-transparent bg-opacity-60" />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-l from-transparent from-50% to-white via-transparent bg-opacity-60" />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent from-50% to-white via-transparent bg-opacity-60" />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent from-50% to-white via-transparent bg-opacity-60" />
                </div>
            </div>
        </div>
    )
}
