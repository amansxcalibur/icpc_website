import Image from "next/image"

export default function WhatsICPC(){
    return(
        <div className="text-black bg-white flex pt-[5vw] min-w-[100vw] min-h-[50vw] justify-center items-center max-md:py-[12vw] max-md:pb-[17vw]">
            <div className="w-[70vw] max-md:w-[90vw] flex flex-col">
                
                <div className="flex-1 flex max-md:flex-col mb-[2vw]">
                    <div className="flex-1 text-[3vw] tracking-tighter font-semibold max-md:text-[6vw]">
                        What's ICPC?
                    </div>
                    <div className="flex-1 text-[1.3vw] max-md:text-[4vw]">
                    The International Collegiate Programming Contest (ICPC) is the world's oldest and most esteemed programming competition and is the ultimate stage for students passionate about coding and problem-solving.
                    ICPC sharpens <strong>creativity</strong>, <strong>teamwork</strong>, and <strong>resilience</strong>—qualities that make a real difference in software development, data science, and beyond. 
                    By joining ICPC, you'll experience the thrill of innovation, connect with passionate coders, and elevate your problem-solving abilities to new heights.
                    </div>
                </div>
                <div className="mb-[2vw]">
                    {/* <p className="text-[3vw] mb-[2vw] text-center font-semibold">Why Participate?</p> */}
                    <p className="text-[1.2vw] max-md:text-[4vw]">
                    Competitive programming is more than mastering algorithms—it's a comprehensive workout for your brain.
                        When you dive into CP/DSA (Competitive Programming/Data Structures and Algorithms), 
                        you don't just learn coding techniques; you cultivate a suite of invaluable skills that will serve you throughout your <strong>career</strong> and <strong>life</strong>. 
                    </p>
                </div>
                <div className="flex-1 flex mt-[1vw] flex-col gap-y-[2vw]">
                    <div className="flex-1 flex justify-start items-center">
                        <Image src="/guy_fix_server.webp" width={1} height={1} className="rounded-[2vw] h-[13vw] w-auto max-md:h-[40vw] mr-[5vw]" unoptimized></Image>
                        <div className="flex-1 mt-[1vw] text-[1.2vw] max-md:text-[4vw]">
                            <p className=" font-semibold">Sharpen Your Skills</p>
                            <p className="">Hone your problem-solving abilities, develop algorithmic thinking, and enhance your programming proficiency—key assets in both competition and the tech industry.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <Image src="/guy_learning.webp" width={1} height={1} className="rounded-[2vw] w-auto h-[13vw] max-md:h-[40vw] mr-[5vw]" unoptimized></Image>
                        <div className="flex-1 mt-[1vw] text-[1.2vw] max-md:text-[4vw]">
                            <p className=" font-semibold">Networking Opportunities:</p>
                            <p className="">Engage with like-minded individuals and expand your professional network as you take on challenges with the brightest in the field.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <Image src="/bagpack.png" width={1} height={1} className="rounded-[2vw] w-auto h-[13vw] max-md:h-[40vw] mr-[5vw]" unoptimized></Image>
                        <div className="flex-1 mt-[1vw] text-[1.2vw] max-md:text-[4vw]">
                            <p className=" font-semibold">Career Advancement</p>
                            <p className="">Success in the ICPC draws the attention of leading tech companies, enhancing your visibility to potential employers and boosting your career prospects.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <Image src="/trophy.webp" width={1} height={1} className="rounded-[2vw] w-auto h-[13vw] max-md:h-[40vw] mr-[5vw]" unoptimized></Image>
                        <div className="flex-1 mt-[1vw] text-[1.2vw] max-md:text-[4vw]">
                            <p className=" font-semibold">Compete with the Best</p>
                            <p className="">This platform offers students the chance to challenge themselves by competing with the brightest minds in the programming community.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}