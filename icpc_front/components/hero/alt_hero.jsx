import Terminal from "../ui_elems/terminal/terminal";
import CustomButton from "../ui_elems/buttons/color_onhover_button";

export default function AltHero(){
    return(
        <>
        {/* <div className="rounded-bg-full absolute -z-10 top-[2.4vw]">
            <video
                id="background-video"
                loop
                autoPlay
                muted
                controls
                className="w-auto bg-white h-[50vw] rounded-b-[2vw] max-md:h-[90vw]"
            >
                <source src="/vid_sample.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div> */}
        <div className="min-h-screen flex flex-col justify-center items-center w-full max-md:mt-[15vw] max-md:min-h-[90vw] bg-red-300 bg-[url('/temp_bg.jpeg')] rounded-b-[2vw]">
            <div className="flex flex-col justify-center">
                <p className="text-center text-[5vw] max-md:text-[6vw] tracking-tighter max-w-[80vw] max-md:max-w-[90vw] text-white mb-[2vw]">
                    Welcome to<br/> ICPC 2024 Regionals
                </p>
                <p className="text-[1.4vw] -mt-[1vw] max-md:text-[4vw] max-w-[40vw] max-md:max-w-[90vw] text-center text-white font-medium mb-[2vw]">
                Join the brightest minds at <br/>Amrita Vishwa Vidyapeetham for ICPC 2024.
                </p>
                <div className="w-full flex justify-center">
                    <div className="max-w-[22vw] flex flex-1">
                        <div className="flex-1 flex justify-center">
                            <div className="bg-blue-500 rounded-[2vw] overflow-hidden">
                                <CustomButton>Join us</CustomButton>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                        <div className="bg-blue-500 rounded-[2vw] overflow-hidden">
                            <CustomButton>Terminal</CustomButton>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <p className="text-[3.5vw] max-md:text-[6vw] tracking-tighter max-w-[80vw] max-md:max-w-[90vw] text-[#4b82c4] font-semibold mb-[2vw]">
                Empower Your Coding Journey at ICPC 2024 Amritapuri Regionals
            </p>
            <div className="flex w-full max-w-[80vw]">
                <div className="flex justify-start flex-1">
                    <Terminal/>
                </div>
                <div className="flex justify-end flex-1">
                    <div className="flex flex-col justify-center items-center flex-1">
                        <p className="text-[1.4vw] max-md:text-[4vw] max-w-[40vw] max-md:max-w-[90vw] text-center text-black font-medium tracking-tighter mb-[2vw]">
                            Join the brightest minds from around the region at Amrita Vishwa Vidyapeetham for the ICPC 2024 Regional Contest. Challenge yourself, showcase your coding 
                            prowess, and take the first step toward global recognition.
                        </p>
                        <div className="flex">
                            <button className="bg-[#b02a1c] transition ease-in duration-100 hover:bg-[#6d2121] text-[2vw] max-md:text-[5vw] flex justify-center items-center h-[3.5vw] max-md:h-[8vw] w-[13vw] max-md:w-[25vw] rounded-[1vw] max-md:rounded-[2vw] font-semibold">
                                Join Us
                            </button>
                            <button className="ml-[1vw] bg-[#b02a1c] transition ease-in duration-100 hover:bg-[#6d2121] text-[2vw] max-md:text-[5vw] flex justify-center items-center h-[3.5vw] max-md:h-[8vw] w-[15vw] max-md:w-[25vw] rounded-[1vw] max-md:rounded-[2vw] font-semibold">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
        </>
    )
}