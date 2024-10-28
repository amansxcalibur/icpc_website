export default function ImpDates(){
    return(
        <div id="important dates" className="text-black w-full flex flex-col items-center my-[5vw] mb-[15vw]">
            <div className="min-w-[70vw] text-[3vw] font-semibold">Agenda</div>
            <div className="min-w-[70vw] text-[1.5vw]">Some important dates to look out for...</div>
            <div className="min-w-screen flex justify-center items-center flex-col min-h-[14.3vw] mt-[3vw]">
                <div className="bg-black min-w-[100vw] min-h-[1vw]"></div>
                <div className="min-w-[80vw] flex absolute z-10 mt-[2vw]">
                    <div className="flex-1 flex flex-col justify-center items-center">
                        <div className="bg-gray-500 rounded-full min-h-[12vw] min-w-[12vw] flex justify-center items-center">
                            <div className="text-white m-[1vw]">
                                <div className=" flex justify-center items-end"><span className="text-[5.5vw] -mb-[1.7vw] -m-[1vw]">10</span></div>
                                <div className="text-[1.2vw]">Oct 2024</div>
                            </div>
                        </div>
                        <p className="text-black text-[1.5vw]">Registration opens</p>
                    </div>
                    <div className="flex-1 flex justify-center flex-col items-center">
                        <div className="bg-gray-500 rounded-full min-h-[12vw] min-w-[12vw] flex justify-center items-center">
                            <div className="text-white">
                                <div className="flex justify-center items-end"><span className="text-[5.5vw] -mb-[1.7vw] -m-[1vw]">30</span></div>
                                <div className="text-[1.2vw]">Oct 2024</div>
                            </div>
                        </div>
                        <p className="text-black text-[1.5vw]">Registration closes</p>
                    </div>
                    <div className="flex-1 flex justify-center flex-col items-center">
                        <div className="bg-gray-500 rounded-full min-h-[12vw] min-w-[12vw] flex justify-center items-center">
                            <div className="text-white">
                                <div className="flex justify-center items-end"><span className="text-[5.5vw] -mb-[1.7vw] -m-[1vw]">11</span></div>
                                <div className="text-[1.2vw]">Nov 2024</div>
                            </div>
                        </div>
                        <p className="text-black text-[1.5vw]">Contest Date</p>
                    </div>
                    <div className="flex-1 flex justify-center flex-col items-center">
                        <div className="text-white bg-gray-500 rounded-full min-h-[12vw] min-w-[12vw] flex justify-center items-center text-[3vw]">TBD</div>
                        <p className="text-black text-[1.5vw]">Onsite Date</p>
                    </div>
                </div>
            </div>
        </div>
    )
}