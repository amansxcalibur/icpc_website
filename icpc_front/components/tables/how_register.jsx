import Link from "next/link"

export default function HowToRegister(){
    return(
        <div className="bg-black min-w-screen flex justify-center py-[5vw]">
            <div className="min-w-[60vw]">
                <p className="text-[3vw] mb-[3vw]">How to Register?</p>
                <div className="text-[2vw]">
                    <div className="group mb-[2vw]">
                        <p className="mb-[0.3vw]">1. Form a team</p>
                        <p className="hidden text-[1.5vw] ml-[2.5vw] group-hover:block">Create a team of three eligible students from your institution.</p>
                    </div>
                    <div className="group mb-[2vw]">
                        <p className="mb-[0.3vw]">2. Create an ICPC Account</p>
                        <p className="hidden text-[1.5vw] ml-[2.5vw] group-hover:block">Visit the <Link href="#"><u>official ICPC website</u></Link> and create individual accounts</p>
                    </div>
                    <div className="group mb-[2vw]">
                        <p className="mb-[0.3vw]">3. Register Your Team</p>
                        <p className="hidden text-[1.5vw] ml-[2.5vw] group-hover:block">Create a team of three eligible students from your institution.</p>
                    </div>
                    <div className="group mb-[2vw]">
                        <p className="mb-[0.3vw]">4. Complete Payment</p>
                        <p className="hidden text-[1.5vw] ml-[2.5vw] group-hover:block">Create a team of three eligible students from your institution.</p>
                    </div>
                    <div className="group mb-[2vw]">
                        <p className="mb-[0.3vw]">5. Confirmation</p>
                        <p className="hidden text-[1.5vw] ml-[2.5vw] group-hover:block">Create a team of three eligible students from your institution.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}