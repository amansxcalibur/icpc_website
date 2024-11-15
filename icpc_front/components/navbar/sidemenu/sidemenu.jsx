'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Bars from "../../svg/bars-3"
import Logo from "../../../app/_assets/logo2.png"

export default function SideMenu({openMenu, setOpenMenu}){
    // const [open, setOpen]=useState(false)
    return(
        <>
            {/* <button className="text-[6vw]" onClick={()=>{setOpen(true)}}>
                <Bars/>
            </button> */}
            <div className={`fixed z-[1000] bg-[rgba(20,20,20,0.5)] backdrop-blur-sm h-[100vh] w-full left-0 top-0 flex justify-end ${openMenu?'':'hidden'}`}>
                <div className="bg-[#4b82c4] w-[60vw] p-4 rounded-l-[2vw]">
                    <button className="text-5xl" onClick={()=>{setOpenMenu(false)}}>X</button>
                    <div className="flex flex-col flex-1 justify-center items-start text-[6vw]">
                        <Link href="/" className="mx-[1vw] my-[1.5vw] mt-[4vw]">Home</Link>
                        <Link href="/#perks" className="mx-[1vw] my-[1.5vw] mt-[4vw]">Why Amrita</Link>
                        <Link href="/#register" className="mx-[1vw] my-[1.5vw] mt-[4vw]">How to register</Link>
                        <Link href="/halloffame" className="mx-[1vw] my-[1.5vw] mt-[4vw]">Hall of Fame</Link>
                        <Link href="/registered-teams" className="mx-[1vw] my-[1.5vw] mt-[4vw]">Registered Teams</Link>
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