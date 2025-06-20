import HowToRegister from "@/app/components/tables/how_register";
import WhyParticipate from "@/app/components/about/why_participate";
import AboutAmrita from "@/app/components/about/amrita_vv";
import AltHero from "@/app/components/hero/alt_hero";
import ExclusicePerks2 from "@/app/components/about/perks_2";
import WhatsICPC from "@/app/components/about/icpc";
import OutreachPartners from "@/app/components/tables/partners";
import Sponsors from "@/app/components/tables/sponsors";

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
                <Sponsors/>
                <OutreachPartners/>
                <AboutAmrita/>
            </div>
        </div>
    )
}