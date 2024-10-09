export default function HallOfFame(){
    return(
        <div className="min-w-screen bg-black flex flex-col invert mb-[6vw]">
            <p className="text-[3vw] px-[4vw] text-center mb-[1vw]">Hall of Fame</p>
            <div className="flex-1 flex flex-col px-[2vw] text-[1.2vw]">
                <div className="flex flex-1 min-h-[4vw] items-center text-[1vw]">
                    <div className="flex-1">Year</div>
                    <div className="flex-1">Name</div>
                    <div className="flex-1">College</div>
                </div>
                <div className="bg-dotted-gradient-line bg-dotted-size bg-dotted-pos h-[5px] bg-repeat-x"></div>
                <div className="flex flex-1 min-h-[7vw] items-center">
                    <div className="flex-1">2023-24</div>
                    <div className="flex-1"><strong>DunderMifflin</strong></div>
                    <div className="flex-1">Indian Institute of Technology - Kharagpur</div>
                </div>
                <div className="bg-dotted-gradient-line bg-dotted-size bg-dotted-pos h-[5px] bg-repeat-x"></div>
                <div className="flex flex-1 min-h-[7vw] items-center">
                    <div className="flex-1">2022-23</div>
                    <div className="flex-1"><strong>Paradigm Shift</strong></div>
                    <div className="flex-1">Indian Institute of Technology - Indore</div>
                </div>
                <div className="bg-dotted-gradient-line bg-dotted-size bg-dotted-pos h-[5px] bg-repeat-x"></div>
            </div>
        </div>
    )
}