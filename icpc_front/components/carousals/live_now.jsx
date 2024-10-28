import Smiley from "../svg/smily";

export default function LiveNow(){
    const iter = [1,2,3,4,5,6, 7, 8, 9]
    return(
        <div className="flex animate-infinite-scroll-x min-h-[3vw] items-center gap-[0.5vw] max-w-[100vw]">
            {iter.map((index)=>(
                <div className="flex items-center gap-[0.5vw]">
                    <p className="text-[1.2vw]">Register Now</p>
                    <Smiley/>
                </div>
            ))}
        </div>
    )
}