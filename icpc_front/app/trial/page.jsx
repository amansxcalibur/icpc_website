import Image from "next/image";
import Link from "next/link";

export default function Trial(){
    return(
        <div className="min-h-[100vh]">
            
            <div className="min-h-[50vw] flex flex-col justify-center items-center w-full">
                <p className="text-[3.5vw] tracking-tighter max-w-[50vw] text-center text-[#4b82c4] font-semibold mb-[2vw]">Breaking Barriers in<br/> Competitive Programming</p>
                <p className="text-[1.4vw] max-w-[50vw] text-center text-black font-medium tracking-tighter mb-[2vw]">Representing Indias brightest minds,<br/>ICPC Amritapuri is a powerhouse in the world of competitive coding.</p>
                <button className="bg-[#b02a1c] transition ease-in duration-100 hover:bg-[#6d2121] text-[2vw] flex justify-center items-center h-[3.5vw] w-[13vw] rounded-[1vw] font-semibold">Join Us</button>
            </div>
            <div className="min-h-[20vw] flex flex-col justify-center items-center w-full">
                <p className="text-[3vw] max-w-[50vw] text-center text-[#fcba31] mb-[3vw]">About Us</p>
                <p className="text-[1.9vw] max-w-[80vw] text-center text-black">The ICPC - International Collegiate Programming Contest is the premiere global programming competition conducted by and for the world's universities. For over four decades, the ICPC has grown to be a game-changing global competitive educational program.</p>
                <p className="text-[1.9vw] max-w-[80vw] text-center text-black">The contest fosters creativity, teamwork, and innovation in building new software programs and enables students to test their ability to perform under pressure.</p>
            </div>
            <div className="min-w-screen min-h-[20vw] text-black flex justify-center items-center mb-[4vw]">
                <div className="min-h-[10vw] min-w-[20vw] border-[2px] border-solid border-[#4b82c4] flex flex-col justify-center items-center font-[600] rounded-[1vw] shadow-[5px_5px_2px_rgba(75,_130,_196,_1)]">
                    <p className="text-[#4b82c4] text-[2vw]">400K+</p>
                    <p className="text-[1vw]">Alumni Worldwide</p>
                </div>
                <div className="min-h-[10vw] min-w-[20vw] border-[2px] border-solid border-[#fcba31] flex flex-col justify-center items-center font-[600] rounded-[1vw] mx-[3.2vw] shadow-[5px_5px_2px_rgba(253,_187,_50,_1)]">
                    <p className="text-[#fcba31] text-[2vw]">60K+</p>
                    <p className="text-[1vw]">Team Members</p>
                </div>
                <div className="min-h-[10vw] min-w-[20vw] border-[2px] border-solid border-[#b02a1c] flex flex-col justify-center items-center font-[600] rounded-[1vw] shadow-[5px_5px_2px_rgba(176,_42,_28,_1)]">
                    <p className="text-[#b02a1c] text-[2vw]">111</p>
                    <p className="text-[1vw]">Countries Participating</p>
                </div>
            </div>
            <div className="min-h-[20vw] flex flex-col justify-center items-center w-full mb-[8vw]">
                <p className="text-[3vw] max-w-[50vw] text-center text-[#b02a1c] font-semibold mb-[3vw] tracking-tighter">Why Amritapuri?</p>
                <p className="text-[1.9vw] max-w-[80vw] text-center text-black">
                    Amritapuri is one of the most prestigious and competitive regions in India for the International Collegiate Programming Contest (ICPC). Hosted by Amrita Vishwa Vidyapeetham, it has built a strong legacy of nurturing top-tier coding 
                    talent. With a reputation for tough challenges, inclusivity, and producing world-class teams, Amritapuri has become a hub where India's brightest coders compete, excel, and gain global recognition. As the largest ICPC regional site 
                    in the country, it offers unmatched opportunities for aspiring programmers to test their skills on the national and international stage.
                </p>
            </div>
            <div className="min-h-[20vw] flex flex-col justify-center items-center w-full mb-[11vw]">
                <p className="text-[3vw] max-w-[50vw] text-center text-[#fcba31] font-semibold tracking-tighter mb-[1vw]">Hear from your Peers!</p>
                <p className="text-[1.9vw] max-w-[80vw] text-center text-black mb-[2vw]">ICPC Amritapuri Through the Eyes of Competitors</p>
                <div className="min-h-[50vw] min-w-[80vw] bg-stone-600"></div>
            </div>
            <div className="min-h-[20vw] flex flex-col justify-center items-center w-full text-black mb-[10vw]">
                <p className="text-[3vw] max-w-[50vw] text-center mb-[4vw]">Latest Updates</p>
                <div className="min-w-[100vw] min-h-[20vw] flex justify-center items-center">
                    <div className="min-h-[35vw] min-w-[23vw] border-[1px] border-solid border-black flex flex-col shadow-[5px_5px_10px_rgba(0,_0,_0,_0.4)]">
                        <div className="tracking-tighter flex-1 bg-gray-600"></div>
                        <div className="bg-white min-h-[11vw] flex justify-center font-semibold items-start flex-col">
                            <p className="text-[1.6vw] px-[2vw] mb-[1vw] max-w-[28vw]">Teams selected for Asia West Championship</p>
                            <button className="text-red-700 px-[2vw] text-[1.6vw]">Read More</button>
                        </div>
                    </div>
                    <div className="min-h-[35vw] min-w-[28vw] border-[1px] border-solid border-black flex flex-col mx-[3vw] shadow-[5px_5px_10px_rgba(0,_0,_0,_0.4)]">
                        <div className="tracking-tighter flex-1 bg-gray-600"></div>
                        <div className="bg-white min-h-[11vw] flex justify-center font-semibold items-start flex-col">
                            <p className="text-[1.6vw] px-[2vw] mb-[1vw] max-w-[28vw]">Teams selected for Asia West Championship</p>
                            <button className="text-red-700 px-[2vw] text-[1.6vw]">Read More</button>
                        </div>
                    </div>
                    <div className="min-h-[35vw] min-w-[28vw] border-[1px] border-solid border-black flex flex-col shadow-[5px_5px_10px_rgba(0,_0,_0,_0.4)]">
                    <div className="tracking-tighter flex-1 bg-gray-600"></div>
                        <div className="bg-white min-h-[11vw] flex justify-center font-semibold items-start flex-col">
                            <p className="text-[1.6vw] px-[2vw] mb-[1vw] max-w-[28vw]">Teams selected for Asia West Championship</p>
                            <button className="text-red-700 px-[2vw] text-[1.6vw]">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-w-screen min-h-[30vw] bg-[#4b82c4] flex justify-center items-center">
                <div className="flex">
                    <div className="min-w-[60vw] max-w-[50vw] pr-[5vw]">
                        <p className="text-[2.5vw] font-semibold tracking-tighter">ICPC Asia Amritapuri</p>
                        <p className="text-[1.6vw]">The premiere programming competition for university students worldwide.</p>
                    </div>
                    <div className="w-full min-h-full flex min-w-[25vw]">
                        <div className="flex-1">
                            <p className="text-[2vw] font-semibold tracking-tighter">Quick Links</p>
                            <ul className="text-[1.6vw]">
                                <li className="mb-[0.7vw]"><Link href='#'>Home</Link></li>
                                <li className="mb-[0.7vw]"><Link href='#'>About</Link></li>
                                <li className="mb-[0.7vw]"><Link href='#'>Registration</Link></li>
                                <li className="mb-[0.7vw]"><Link href='#'>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="">
                            <p className="text-[2vw] font-semibold tracking-tighter">Connect</p>
                            <ul className="text-[1.6vw]">
                                <li className="mb-[0.7vw]"><Link href="#">Twitter</Link></li>
                                <li className="mb-[0.7vw]"><Link href="#">Linkedin</Link></li>
                                <li className="mb-[0.7vw]"><Link href="#">Facebook</Link></li>
                                <li className="mb-[0.7vw]"><Link href="#">Instagram</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-black">&copy;2024 ICPC Asia Amritapuri Regional Contest. All rights reserved.</div>
        </div>
    )
}