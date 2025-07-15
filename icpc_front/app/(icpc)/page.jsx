import HowToRegister from "../../components/tables/how_register";
import WhyParticipate from "../../components/about/why_participate";
import AboutAmrita from "../../components/about/amrita_vv";
import AltHero from "../../components/hero/alt_hero";
import ExclusicePerks2 from "../../components/about/perks_2";
import WhatsICPC from "../../components/about/icpc";
import OutreachPartners from "../../components/tables/partners";
import Sponsors from "../../components/tables/sponsors";
import Pastsponsors from "@/components/tables/past_sponsors";

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