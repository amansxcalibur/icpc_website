import Image from "next/image";
import Link from "next/link";

export default function Sponsors(){
    return(
        <div className="text-blue-950 flex justify-center flex-col items-center relative overflow-hidden py-[5vw] pb-[6vw]">
            <div className="min-w-[85vw] max-md:flex-1 flex relative flex-col justify-center">
                <div className="text-[2.5vw] max-md:text-[6vw] font-semibold w-full max-md:h-[10vw] flex justify-center items-center pointer-events-none mb-[2vw]">
                    <div className="max-w-[85vw] flex-1">Sponsors</div>
                </div>
                <div className="flex w-full justify-center max-w-[100vw] overflow-hidden items-center py-[1vw] max-md:w-[90vw] max-md:px-[1.5vw]">
                    <div className="flex-1 flex max-md:flex-col max-w-[65vw] md:gap-x-[8vw] max-md:gap-y-[2vh] max-md:min-w-full min-h-[15vw] justify-center">
                        <div className="flex-1 max-md:py-[2vw] md:max-w-[30vw] rounded-[1vw] max-md:min-h-[15vh] border-blue-950 border-[.25vw] border-solid hover:scale-105 hover:bg-yellow-100 shadow-[5px_5px_0px_0px_rgba(23,_37,_84,_1)] transition flex justify-center items-center">
                            <Image src="jetbrains-logo.jpg" className="h-[11vw] max-md:h-[18vw] w-auto" width={1} height={1} unoptimized />
                        </div>
                    </div>
                    {/* Transparent Gradient Overlay */}
                    {/* <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent from-50% to-white via-transparent bg-opacity-60" />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-l from-transparent from-50% to-white via-transparent bg-opacity-60" />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent from-50% to-white via-transparent bg-opacity-60" />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent from-50% to-white via-transparent bg-opacity-60" /> */}
                </div>
            </div>
        </div>
    )
}