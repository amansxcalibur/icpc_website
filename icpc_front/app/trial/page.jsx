import Image from "next/image";
import Link from "next/link";
import ImageCarousal from "@/components/carousals/image_carousal";
import ContactUs from "@/components/footer/contact_us";
import LatestUpdates from "@/components/latest_updates/latest_updates";
import Hero from "@/components/hero/hero";
import HallOfFame from "@/components/tables/hall_of_fame";
import HowToRegister from "@/components/tables/how_register";
import ImpDates from "@/components/tables/important_dates";
import WhyParticipate from "@/components/about/why_participate";
import ExclusicePerks from "@/components/about/perks";
import AboutAmrita from "@/components/about/amrita_vv";
import AltHero from "@/components/hero/alt_hero";
import ExclusicePerks2 from "@/components/about/perks_2";

export default function Trial(){
    return(
        <div className="min-h-[100vh]">
            {/* <Hero/> */}
            <AltHero/>
            <WhyParticipate/>
            <ExclusicePerks2/>
            <div className="pt-[8vw] bg-white">
                {/* <div className="min-h-[20vw] flex flex-col justify-center items-center w-full max-md:mb-[10vw]">
                    <p className="text-[3vw] max-md:text-[6vw] max-w-[50vw] text-center text-[#fcba31] mb-[3vw]">About Us</p>
                    <p className="text-[1.5vw] max-md:text-[3.5vw] max-w-[60vw] max-md:max-w-[90vw] text-center text-black">The ICPC - International Collegiate Programming Contest is the premiere global programming competition conducted by and for the world's universities. For over four decades, the ICPC has grown to be a game-changing global competitive educational program.</p>
                    <p className="text-[1.5vw] max-md:text-[3.5vw] max-w-[60vw] max-md:max-w-[90vw] text-center text-black">The contest fosters creativity, teamwork, and innovation in building new software programs and enables students to test their ability to perform under pressure.</p>
                </div>
                <div className="min-w-screen min-h-[20vw] text-black flex justify-center items-center mb-[4vw] max-md:flex-col">
                    <div className="max-md:mb-[5vw] min-h-[10vw] max-md:min-h-[30vw] max-md:min-w-[90vw] min-w-[20vw] border-[2px] border-solid border-[#4b82c4] flex flex-col justify-center items-center font-[600] rounded-[1vw] shadow-[5px_5px_2px_rgba(75,_130,_196,_1)]">
                        <p className="text-[#4b82c4] text-[2vw] max-md:text-[6vw]">400K+</p>
                        <p className="text-[1vw] max-md:text-[3vw]">Alumni Worldwide</p>
                    </div>
                    <div className="max-md:mb-[5vw] min-h-[10vw] max-md:min-h-[30vw] max-md:min-w-[90vw] min-w-[20vw] border-[2px] border-solid border-[#fcba31] flex flex-col justify-center items-center font-[600] rounded-[1vw] mx-[3.2vw] shadow-[5px_5px_2px_rgba(253,_187,_50,_1)]">
                        <p className="text-[#fcba31] text-[2vw] max-md:text-[6vw]">60K+</p>
                        <p className="text-[1vw] max-md:text-[3vw]">Team Members</p>
                    </div>
                    <div className="max-md:mb-[5vw] min-h-[10vw] max-md:min-h-[30vw] max-md:min-w-[90vw] min-w-[20vw] border-[2px] border-solid border-[#b02a1c] flex flex-col justify-center items-center font-[600] rounded-[1vw] shadow-[5px_5px_2px_rgba(176,_42,_28,_1)]">
                        <p className="text-[#b02a1c] text-[2vw] max-md:text-[6vw]">111</p>
                        <p className="text-[1vw] max-md:text-[3vw]">Countries Participating</p>
                    </div>
                </div>
                <div className="min-h-[20vw] flex flex-col justify-center items-center w-full mb-[4vw]">
                    <p className="text-[3vw] max-md:text-[6vw] max-w-[50vw] max-md:max-w-[80vw] text-center text-[#b02a1c] font-semibold mb-[2vw] tracking-tighter">Why Amritapuri?</p>
                    <p className="text-[1.5vw] max-md:text-[4vw] max-w-[60vw] max-md:max-w-[90vw] text-center text-black">
                        Amritapuri is one of the most prestigious and competitive regions in India for the International Collegiate Programming Contest (ICPC). Hosted by Amrita Vishwa Vidyapeetham, it has built a strong legacy of nurturing top-tier coding 
                        talent. With a reputation for tough challenges, inclusivity, and producing world-class teams, Amritapuri has become a hub where India's brightest coders compete, excel, and gain global recognition. As the largest ICPC regional site 
                        in the country, it offers unmatched opportunities for aspiring programmers to test their skills on the national and international stage.
                    </p>
                </div>
                <div className="max-w-[100vw] overflow-hidden mb-[4vw]">
                    <ImageCarousal/>
                </div>
                <div className="min-h-[20vw] flex flex-col justify-center items-center w-full mb-[11vw]">
                    <p className="text-[3vw] max-md:text-[6vw] max-w-[50vw] max-md:max-w-[80vw] text-center text-[#fcba31] font-semibold tracking-tighter mb-[1vw]">Hear from your Peers!</p>
                    <p className="text-[1.5vw] max-md:text-[3vw] max-w-[60vw] text-center text-black mb-[2vw]">ICPC Amritapuri Through the Eyes of Competitors</p>
                    <div className="min-h-[50vw] min-w-[80vw] max-md:min-w-[90vw] bg-stone-600"></div>
                </div> */}
                <div className="bg-gradient-to-t from-white to-transparent absolute -mt-[15vw] w-screen min-h-[10vw]"></div>
                <ImpDates/>
                {/* <HallOfFame/> */}
                <HowToRegister/>
                <LatestUpdates/>
                {/* <section class="bg-gray-50 py-16">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Latest Updates</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                                <Image src="/api/placeholder/400/200" width={500} height={500} alt="Update 1" class="w-full"/>
                                <div class="p-6">
                                    <h3 class="font-semibold text-xl mb-2">Teams Selected for Asia West Championship</h3>
                                    <p class="text-gray-600">Check out the list of teams that made it to the championship.</p>
                                    <a href="#" class="text-blue-600 hover:text-blue-700 mt-4 inline-block">Read More →</a>
                                </div>
                            </div>
                            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                                <Image src="/api/placeholder/400/200" width={500} height={500} alt="Update 2" class="w-full"/>
                                <div class="p-6">
                                    <h3 class="font-semibold text-xl mb-2">How to Reach Amrita Campuses</h3>
                                    <p class="text-gray-600">Detailed guide for reaching different contest venues.</p>
                                    <a href="#" class="text-blue-600 hover:text-blue-700 mt-4 inline-block">Read More →</a>
                                </div>
                            </div>
                            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                                <Image src="/api/placeholder/400/200" width={500} height={500} alt="Update 3" class="w-full"/>
                                <div class="p-6">
                                    <h3 class="font-semibold text-xl mb-2">Important Dates Announced</h3>
                                    <p class="text-gray-600">Mark your calendar with these crucial competition dates.</p>
                                    <a href="#" class="text-blue-600 hover:text-blue-700 mt-4 inline-block">Read More →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <AboutAmrita/>
                <ContactUs/>
            </div>
        </div>
    )
}