import { useState } from "react"
import Link from "next/link";
import X from "@/components/svg/x";

export default function RankCriteria(){
    const [open, setOpen] = useState(true);
    return(
        <div className={`${open?'':'hidden'} min-w-full min-h-full fixed inset-0 z-40 bg-black/5 backdrop-blur-sm`}>
        <div className="fixed z-50 bottom-1/2 max-md:min-w-[90vw] left-1/2 -translate-x-1/2 translate-y-1/2 border-[2px] bg-white border-solid border-gray-500 backdrop-blur-lg text-black min-w-[38vw] rounded-[1vw] m-[1vw] max-md:rounded-[4vw] max-md:p-[5vw] p-[1.5vw] flex flex-col justify-center">
            <div className="text-[1.5vw] max-md:text-[7vw] flex">
                <p className="font-semibold flex items-center">Notice<span className="text-gray-500 text-[1.2vw] max-md:text-[5vw] font-medium">&nbsp;(01-12-2024)</span></p>
                <div className="flex-1 flex justify-end">
                    <button onClick={()=>{setOpen(false)}}><X/></button>
                </div>
            </div>
            <div className="text-[1.2vw] flex flex-col">
                <p className="max-w-[35vw] max-md:max-w-[80vw] max-md:text-[4vw]">
                When things go wrong during a contest, ensuring fairness for everyone becomes incredibly challenging. Unfortunately this time, we faced issues twice, and we sincerely apologise for that.
                To address this, we have increased the number of slots and included as many affected teams as possible. This decision wasn’t easy and has significantly increased our onsite seat requirements beyond initial estimates. However, we are doing our best to accommodate most of the affected teams.
                </p>
                <p>What we are doing</p>
                <p>
                    <span className="font-semibold">"Yet Another GCD Problem" Adjustments:</span>
                    <span className="">We rejudged all non-accepted submissions after removing the K=0 case.
                    Penalties were adjusted based on the first accepted submission.
                    This produced, say, Ranklist R1.</span>
                </p>
                <p>
                    <span className="font-semibold">"Small Indices" Problem Removal:</span>
                    <span className="">After the "Yet Another GCD Problem" rejudge, we then removed the "Small Indices" problem completely and recalculated the ranklist.
                    This produced, say, Ranklist R2.</span>
                </p>
                <p>
                    <span className="font-semibold">Final Selection:</span>
                    <span className="">For each site, we select N teams from R1 and N teams from R2, where N is the original number of teams announced for that site.
                    We take the union of these two lists of teams and invite them all to the finals.</span>
                </p>
                {/* <button className="bg-white rounded-[1vw] flex-1">Click</button> */}
            </div>
        </div>
        </div>
    )
}