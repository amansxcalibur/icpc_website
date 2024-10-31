import Link from "next/link"

export default function HowToRegister(){
    return(
        <>
            <div className="absolute text-white min-h-[10vw] flex justify-center items-center w-full h-full -z-10 bg-[url('/temp_bg.jpeg')]"></div>
            <div className="absolute bg-blue-950 opacity-50 min-h-[10vw] flex justify-center items-center w-full h-full -z-[5]"></div>
            <div id="register" className="min-w-screen flex justify-center py-[5vw] bg-blue-950 max-md:py-[12vw]">
                <div className="min-w-[70vw] max-md:min-w-[90vw]">
                    <p className="text-[3vw] mb-[3vw] max-md:text-[6vw] font-semibold">How to Register?</p>
                    <div className="text-[2vw] md:pl-[10vw] max-md:pl-[5vw]">
                        <div className="group mb-[2vw]">
                            <p className="mb-[0.3vw] max-md:text-[5vw]">1. Form a team</p>
                            <p className="md:hidden max-md:text-[3vw] text-wrap max-w-[80vw] text-[1.5vw] ml-[2.5vw] max-md:ml-[5vw] group-hover:block">Create a team of three eligible students from your institution.</p>
                        </div>
                        <div className="group mb-[2vw]">
                            <p className="mb-[0.3vw] max-md:text-[5vw]">2. Create an ICPC Account</p>
                            <p className="md:hidden max-md:text-[3vw] text-wrap max-w-[80vw] text-[1.5vw] ml-[2.5vw] max-md:ml-[5vw] group-hover:block">Visit the <Link href="https://icpc.global/"><u>official ICPC website</u></Link> and create individual accounts</p>
                        </div>
                        <div className="group mb-[2vw]">
                            <p className="mb-[0.3vw] max-md:text-[5vw]">3. Register Your Team</p>
                            <p className="md:hidden max-md:text-[3vw] text-wrap max-w-[80vw] text-[1.5vw] ml-[2.5vw] max-md:ml-[5vw] group-hover:block">Create a team of three eligible students from your institution.</p>
                        </div>
                        <div className="group mb-[2vw]">
                            <p className="mb-[0.3vw] max-md:text-[5vw]">4. Complete Payment</p>
                            <p className="md:hidden max-md:text-[3vw] text-wrap max-w-[80vw] text-[1.5vw] ml-[2.5vw] max-md:ml-[5vw] group-hover:block">Create a team of three eligible students from your institution.</p>
                        </div>
                        <div className="group mb-[2vw]">
                            <p className="mb-[0.3vw] max-md:text-[5vw]">5. Confirmation</p>
                            <p className="md:hidden max-md:text-[3vw] text-wrap max-w-[80vw] text-[1.5vw] ml-[2.5vw] max-md:ml-[5vw] group-hover:block">Create a team of three eligible students from your institution.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}