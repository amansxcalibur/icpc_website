import Link from "next/link"

export default function HowToRegister(){
    return(
        <>
            <div className="absolute text-white min-h-[10vw] flex justify-center items-center w-full h-full -z-10 bg-[url('/temp_bg.jpeg')]"></div>
            <div className="absolute bg-blue-950 opacity-50 min-h-[10vw] flex justify-center items-center w-full h-full -z-[5]"></div>
            <div id="register" className="min-w-screen min-h-screen flex justify-center items-center bg-blue-950 py-[5vw] max-md:py-[8vw]">
                <div className="w-[90vw] flex flex-col">
                    {/* How to Register Section */}
                    <div className="mb-[4vw] max-md:mb-[6vw]">
                        <p className="text-[2.5vw] mb-[2vw] max-md:text-[5vw] max-md:mb-[3vw] font-semibold text-white">How to Register?</p>
                        <div className="grid grid-cols-2 gap-x-[5vw] gap-y-[2vw] max-md:grid-cols-1 max-md:gap-y-[3vw]">
                            <div className="group">
                                <p className="text-[1.8vw] mb-[0.5vw] max-md:text-[4vw] max-md:mb-[1vw] text-white">1. Form a team</p>
                                <p className="text-[1vw] max-md:text-[3vw] text-wrap max-w-[40vw] max-md:max-w-[90vw] text-gray-300">Create a team of three eligible students from your institution.</p>
                            </div>
                            <div className="group">
                                <p className="text-[1.8vw] mb-[0.5vw] max-md:text-[4vw] max-md:mb-[1vw] text-white">2. Create an ICPC Account</p>
                                <p className="text-[1vw] max-md:text-[3vw] text-wrap max-w-[40vw] max-md:max-w-[90vw] text-gray-300">Visit the <Link href="https://icpc.global/" className="underline hover:text-blue-300">official ICPC website</Link> and create individual accounts</p>
                            </div>
                            <div className="group">
                                <p className="text-[1.8vw] mb-[0.5vw] max-md:text-[4vw] max-md:mb-[1vw] text-white">3. Register for the Contest</p>
                                <p className="text-[1vw] max-md:text-[3vw] text-wrap max-w-[40vw] max-md:max-w-[90vw] text-gray-300">Ask Coach to register by selecting Amritapuri as your preferred region</p>
                            </div>
                            <div className="group">
                                <p className="text-[1.8vw] mb-[0.5vw] max-md:text-[4vw] max-md:mb-[1vw] text-white">4. Pay Registration Fee</p>
                                <p className="text-[1vw] max-md:text-[3vw] text-wrap max-w-[40vw] max-md:max-w-[90vw] text-gray-300">Complete the payment process</p>
                            </div>
                        </div>
                    </div>

                    {/* Important Dates Section */}
                    <div>
                        <p className="text-[2.5vw] mb-[4vw] max-md:text-[5vw] max-md:mb-[4vw] font-semibold text-white">Important Dates</p>
                        <div className="flex justify-center gap-[3vw] px-[5vw] max-md:flex-col max-md:items-center max-md:gap-[4vw] max-md:px-0">
                            {/* Registration Opens */}
                            <div className="flex flex-col items-center">
                                <div className="bg-blue-500 rounded-full h-[8vw] w-[8vw] max-md:h-[18vw] max-md:w-[18vw] flex justify-center items-center mb-[1vw] max-md:mb-[1.5vw]">
                                    <div className="text-white text-center">
                                        <div className="text-[3vw] max-md:text-[7vw] font-bold leading-none">08</div>
                                        <div className="text-[1vw] max-md:text-[2.5vw] mt-[0.2vw]">OCT 2024</div>
                                    </div>
                                </div>
                                <p className="text-[1.2vw] max-md:text-[3.5vw] text-white text-center">Registration Opens</p>
                            </div>
                            
                            {/* Registration Deadline */}
                            <div className="flex flex-col items-center">
                                <div className="bg-yellow-500 rounded-full h-[8vw] w-[8vw] max-md:h-[18vw] max-md:w-[18vw] flex justify-center items-center mb-[1vw] max-md:mb-[1.5vw]">
                                    <div className="text-white text-center">
                                        <div className="text-[3vw] max-md:text-[7vw] font-bold leading-none">12</div>
                                        <div className="text-[1vw] max-md:text-[2.5vw] mt-[0.2vw]">NOV 2024</div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-[1.2vw] max-md:text-[3.5vw] text-white">Registration Deadline</p>
                                    <p className="text-[1vw] max-md:text-[2.5vw] text-gray-300">5:00 PM</p>
                                </div>
                            </div>

                            {/* Online Round */}
                            <div className="flex flex-col items-center">
                                <div className="bg-red-700 rounded-full h-[8vw] w-[8vw] max-md:h-[18vw] max-md:w-[18vw] flex justify-center items-center mb-[1vw] max-md:mb-[1.5vw]">
                                    <div className="text-white text-center">
                                        <div className="text-[3vw] max-md:text-[7vw] font-bold leading-none">16</div>
                                        <div className="text-[1vw] max-md:text-[2.5vw] mt-[0.2vw]">NOV 2024</div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-[1.2vw] max-md:text-[3.5vw] text-white">Online Round</p>
                                    <p className="text-[1vw] max-md:text-[2.5vw] text-gray-300">4:00 PM - 6:00 PM</p>
                                </div>
                            </div>

                            {/* Onsite Round */}
                            <div className="flex flex-col items-center">
                                <div className="bg-blue-600 rounded-full h-[8vw] w-[8vw] max-md:h-[18vw] max-md:w-[18vw] flex justify-center items-center mb-[1vw] max-md:mb-[1.5vw]">
                                    <div className="text-white text-[2.5vw] max-md:text-[6vw] font-bold">TBD</div>
                                </div>
                                <p className="text-[1.2vw] max-md:text-[3.5vw] text-white text-center">Onsite Round</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}