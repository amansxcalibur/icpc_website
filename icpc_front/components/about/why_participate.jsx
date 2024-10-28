import Image from "next/image"

export default function WhyParticipate(){
    return(
        <div className="text-black bg-white flex pt-[5vw] min-w-[100vw] min-h-[50vw] justify-center items-center">
            <div className="w-[70vw] flex flex-col">
                <div className="flex-1 flex">
                    <div className="flex-1 text-[3vw] tracking-tighter font-semibold">Why Participate?</div>
                    <div className="flex-1 text-[1.3vw]">
                        Competitive programming is more than mastering algorithms—it's a comprehensive workout for your brain. When you dive into CP/DSA (Competitive Programming/Data Structures and Algorithms), 
                        you don't just learn coding techniques; you cultivate a suite of invaluable skills that will serve you throughout your career and life.
                    </div>
                </div>
                <div className="flex-1 flex mt-[4vw]">
                    <div className="flex-1 flex flex-col justify-center items-center min-h-[25vw]">
                        <Image src="/bagpack.png" width={1} height={1} className="rounded-[2vw] h-[13vw] w-auto"></Image>
                        <div className="flex-1 mt-[1vw]">
                            <p className="text-[1.3vw] text-center font-semibold">Systems Thinking</p>
                            <p className="text-[1.3vw] text-center"> Understand complex systems by seeing how different components interact.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center min-h-[25vw]">
                        <Image src="/bagpack.png" width={1} height={1} className="rounded-[2vw] w-auto h-[13vw]"></Image>
                        <div className="flex-1 mt-[1vw]">
                            <p className="text-[1.3vw] text-center font-semibold">Rapid Learning</p>
                            <p className="text-[1.3vw] text-center">Accelerate your ability to absorb new concepts and technologies.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center min-h-[25vw]">
                        <Image src="/bagpack.png" width={1} height={1} className="rounded-[2vw] w-auto h-[13vw]"></Image>
                        <div className="flex-1 mt-[1vw]">
                            <p className="text-[1.3vw] text-center font-semibold">Problem Deduction</p>
                            <p className="text-[1.3vw] text-center">Sharpen your skill in interpreting and dissecting problem statements to identify core challenges.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center min-h-[25vw]">
                        <Image src="/bagpack.png" width={1} height={1} className="rounded-[2vw] w-auto h-[13vw]"></Image>
                        <div className="flex-1 mt-[1vw]">
                            <p className="text-[1.3vw] text-center font-semibold">Algorithmic Thinking</p>
                            <p className="text-[1.3vw] text-center">Enhance your capability to devise efficient, logical solutions to intricate problems.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}