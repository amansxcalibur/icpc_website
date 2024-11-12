import Image from "next/image";
import Link from "next/link";
import ImageCarousal from "@/components/carousals/image_carousal";
import ContactUs from "@/components/footer/contact_us";
import LatestUpdates from "@/components/latest_updates/latest_updates";
import Hero from "@/components/hero/hero";
import HallOfFame from "@/components/tables/hall_of_fame";
import HowToRegister from "@/components/tables/how_register";
import WhyParticipate from "@/components/about/why_participate";
import ExclusicePerks from "@/components/about/perks";
import AboutAmrita from "@/components/about/amrita_vv";
import AltHero from "@/components/hero/alt_hero";
import ExclusicePerks2 from "@/components/about/perks_2";
import WhatsICPC from "@/components/about/icpc";
import OutreachPartners from "@/components/tables/partners";

export default function Trial(){
    return(
        <div className="min-h-[100vh]">
            {/* <Hero/> */}
            <AltHero/>
            <WhatsICPC/>
            <WhyParticipate/>
            <ExclusicePerks2/>
            <div className="pt-[8vw] bg-white">
                <HowToRegister/>
                <OutreachPartners/>
                <AboutAmrita/>
            </div>
        </div>
    )
}