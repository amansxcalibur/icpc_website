'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Bars from "../../svg/bars-3"
import Logo from "../../../app/_assets/logo2.png"

export default function SideMenu(){
    const pathname=usePathname();
    const [open, setOpen]=useState(false)
    return(
        <>
            <button className="text-[6vw]" onClick={()=>{setOpen(true)}}>
                <Bars/>
            </button>
            <div className={`absolute z-10 bg-[rgba(20,20,20,0.5)] backdrop-blur-sm h-[100vh] w-full left-0 top-0 flex justify-end ${open?'':'hidden'}`}>
                <div className="bg-[#4b82c4] w-[60vw] p-4 rounded-l-[2vw]">
                    <button className="text-5xl" onClick={()=>{setOpen(false)}}>X</button>
                    <div className="flex flex-col flex-1 justify-center items-start text-[6vw]">
                        {pathname=='/icpc'?
                        <>
                            <button className="mx-[1vw] my-[1.5vw] mt-[4vw]" onClick={()=>{scrollTo(0,0)}}>Home</button>
                            <Link href="#perks">
                                <div className="text-[1.2vw] max-md:text-[4vw] hover:text-blue-500">
                                    Why Amrita
                                </div>
                            </Link>
                            <button className="mx-[1vw] my-[1.5vw]" onClick={()=>{document.getElementById('important dates').scrollIntoView()}}>Important Dates</button>
                            <button className="mx-[1vw] my-[1.5vw]" onClick={()=>{document.getElementById('register').scrollIntoView()}}>How to Register</button>
                        </>
                        :
                        <>
                            <Link href="/icpc" className="mx-[1vw] my-[1.5vw] mt-[4vw]">Home</Link>
                            <Link href="/icpc" className="mx-[1vw] my-[1.5vw] mt-[4vw]">Why Amrita</Link>
                            <Link href="/icpc" className="mx-[1vw] my-[1.5vw] mt-[4vw]">Important Dates</Link>
                            <Link href="/icpc" className="mx-[1vw] my-[1.5vw] mt-[4vw]">How to register</Link>
                        </>
                        }
                        <Link href="/halloffame" className="mx-[1vw] my-[1.5vw] mt-[4vw]">Hall of Fame</Link>
                        <Link href="/promote" className="mx-[1vw] my-[1.5vw] mt-[4vw]">Promote</Link>
                    </div>
                    {/* <ul className="flex justify-center flex-col text-4xl mt-3">
                        {options.map(option=>
                            <li key={option.id} className="mt-1">
                                <Link onClick={()=>setOpen(false)} href={option.href}>{option.option}</Link>
                            </li>
                        )}
                    </ul> */}
                    <ul className="absolute bottom-0 mb-4">
                        <li>
                            {/* <button className="text-[6vw]">Login</button> */}
                            <Image src={Logo} className="h-[15vw] max-md:pl-[2vw] w-auto -mr-[2vw] mx-[1vw]"></Image>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}