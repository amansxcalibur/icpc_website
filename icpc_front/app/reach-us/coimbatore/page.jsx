'use client'

import Image from "next/image"
import Data from "@/components/json/how_to_reach_us.json"
import ContactUs2 from "@/components/footer/contact_us_2";

export default function ReachUs() {
    return (
        <div className="bg-white text-black pt-[3vw] flex items-center min-h-screen flex-col">
            <div className="min-w-[80vw] max-w-[80vw] max-md:min-w-[90vw]">
            <p className="font-semibold text-[3vw] max-md:text-[6vw] flex justify-center mb-[2vw] text-blue-950">Reach Us</p>
                <div className="w-full flex">
                    <div className="flex-1">
                        <div className="">
                            <p className="text-[1.5vw] max-md:text-[4vw] font-bold mb-[0.5vw] text-blue-950">
                                Directions to arrive at the campus from the North
                            </p>
                            {Object.keys(Data.Kayamkulam.directions.North).map((key, value)=>(
                                <>
                                    <p className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[0.5vw] text-blue-950 mt-[2vw]">{key}</p>
                                    <p className="text-[1vw] max-md:text-[3vw] text-gray-600">{Data.Kayamkulam.directions.North[key]}</p>
                                </>
                            ))}
                        </div>
                        <div className="mt-[3vw]">
                            <p className="text-[1.5vw] max-md:text-[4vw] font-bold mb-[0.5vw] text-blue-950">
                                Directions to arrive at the campus from the South
                            </p>
                            {Object.keys(Data.Kayamkulam.directions.South).map((key, value)=>(
                                <>
                                    <p className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[0.5vw] text-blue-950 mt-[2vw]">{key}</p>
                                    <p className="text-[1vw] max-md:text-[3vw] text-gray-600">{Data.Kayamkulam.directions.South[key]}</p>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="sticky top-[10vw] w-full px-[2vw]">
                        <iframe 
                            width="100%" 
                            height="700px" 
                            className=""
                            title="map" 
                            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1%20North%20Bridge%20Road%20%2318-03%20High%20Street%20Centre%20Singapore%20179094&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                            // style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
                        />
                        </div>
                        {/* <div className="bg-blue-600 sticky top-[10vw] w-full">HELlo</div> */}
                    </div>
                </div>
            </div>
            <div className="w-full bg-blue-950 text-white mt-[5vw] flex justify-center py-[5vw]">
                <div className="max-w-[80vw] min-w-[80vw]">
                    <div className="w-full text-[1.5vw] max-md:text-[4vw] font-semibold mb-[0.5vw] flex justify-center">Trains to Kayamkulam</div>
                    <div>
                        {Object.keys(Data.Kayamkulam.Trains).map((key, index)=>(
                            <p className="text-[1.4vw] max-md:text-[3vw] my-[1vw]">
                                <span className="font-semibold text-yellow-500">{key}</span> : <span className="font-light">{Data.Kayamkulam.Trains[key]}</span>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            {/* Hotels */}
            <div className="w-full mt-[5vw] flex justify-center py-[5vw]">
                <div className="max-w-[80vw] min-w-[80vw]">
                    <div className="w-full text-[1.5vw] max-md:text-[4vw] font-semibold mb-[0.5vw] flex justify-center">Hotels Near Us</div>
                    <div className="flex w-full">
                        {Object.keys(Data.Kayamkulam.Hotels).map((key, index)=>(
                            <div className="text-[1.4vw] flex-1 max-md:text-[3vw] my-[1vw]">
                                <p className="font-semibold text-blue-950">{key}</p>
                                <ul>
                                    {Data.Kayamkulam.Hotels[key].map((key, index)=>(
                                        <li key={index} className="font-light">{key}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Restaurants */}
            <div className="w-full bg-blue-950 text-white mt-[5vw] flex justify-center py-[7vw]">
                <div className="max-w-[80vw] min-w-[80vw]">
                    <div className="w-full text-[1.5vw] max-md:text-[4vw] font-semibold mb-[0.5vw] flex justify-center">Restaurants Near Us</div>
                    <div className="flex w-full">
                        {Object.keys(Data.Kayamkulam.Restaurants).map((key, index)=>(
                            <div className="text-[1.4vw] flex-1 max-md:text-[3vw] my-[1vw]">
                                <p className="font-semibold text-yellow-500">{key}</p>
                                <ul>
                                    {Data.Kayamkulam.Restaurants[key].map((key, index)=>(
                                        <li key={index} className="font-light">{key}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col bg-[#92133b]">
                <ContactUs2/>
            </div>
        </div>
    );
}
