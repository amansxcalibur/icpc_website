export default function ImpDates(){
    return(
        <div className="min-w-screen flex justify-center items-center flex-col min-h-[14.3vw] my-[5vw]">
            <div className="bg-black rounded-[2vw] min-w-[100vw] min-h-[1vw]"></div>
            <div className="min-w-[80vw] flex absolute z-10 mt-[2vw]">
                <div className="flex-1 flex flex-col justify-center items-center">
                    <div className="bg-gray-500 rounded-full min-h-[12vw] min-w-[12vw] flex justify-center items-center">
                        <div className=" m-[1vw]">
                            <div className=" flex justify-center items-end"><span className="text-[5.5vw] -mb-[1.7vw] -m-[1vw]">10</span></div>
                            <div className="text-[1.2vw]">Sept 2024</div>
                        </div>
                    </div>
                    <p className="text-black text-[1.5vw]">Registration opens</p>
                </div>
                <div className="flex-1 flex justify-center flex-col items-center">
                    <div className="bg-gray-500 rounded-full min-h-[12vw] min-w-[12vw] flex justify-center items-center">
                        <div className="">
                            <div className="flex justify-center items-end"><span className="text-[5.5vw] -mb-[1.7vw] -m-[1vw]">8</span></div>
                            <div className="text-[1.2vw]">Sept 2024</div>
                        </div>
                    </div>
                    <p className="text-black text-[1.5vw]">Registration closes</p>
                </div>
                <div className="flex-1 flex justify-center flex-col items-center">
                    <div className="bg-gray-500 rounded-full min-h-[12vw] min-w-[12vw] flex justify-center items-center">
                        <div className="bg-red-600">
                            <div className="bg-blue-500 flex justify-center items-end"><span className="text-[5.5vw] -mb-[1.7vw] -m-[1vw]">11</span></div>
                            <div className="text-[1.2vw]">Sept 2024</div>
                        </div>
                    </div>
                    <p className="text-black text-[1.5vw]">Contest Date</p>
                </div>
                <div className="flex-1 flex justify-center flex-col items-center">
                    <div className="bg-gray-500 rounded-full min-h-[12vw] min-w-[12vw] flex justify-center items-center text-[3vw]">TBD</div>
                    <p className="text-black text-[1.5vw]">Onsite Date</p>
                </div>
            </div>
        </div>
    )
}