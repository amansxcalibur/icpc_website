'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Bars from "../../svg/bars-3"
import Logo from "../../../app/_assets/logo2.png"
import X from "../../svg/x"

export default function SideMenu({openMenu, setOpenMenu, locations}){
    // const [open, setOpen]=useState(false)
    return(
        <>
            {/* <button className="text-[6vw]" onClick={()=>{setOpen(true)}}>
                <Bars/>
            </button> */}
            <div className={`fixed z-[1000] bg-[rgba(20,20,20,0.5)] backdrop-blur-sm h-full w-full left-0 top-0 flex justify-end ${openMenu?'':'hidden'}`}>
                <div className={`
                ${/*bg-[#4b82c4]*/ true}
                bg-blue-600
                 w-[70vw] p-4 rounded-l-[2vw] text-white`}>
                    <button className="text-5xl" onClick={()=>{setOpenMenu(false)}}>
                        <p className="text-white"><X/></p>
                    </button>
                    <div className="flex flex-col flex-1 justify-center items-start text-[6vw]">
                        <Link href="/" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Home</Link>
                        <Link href="/#perks" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Why Amrita</Link>
                        <Link href="/halloffame" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Hall of Fame</Link>
                        <div className="group">
                            <p
                                className={`mx-[1vw] transition ease-in duration-300 group`}
                            >
                                Reach Us
                            </p>
                            <div 
                            className="ml-[5vw] flex flex-col gap-y-[1.5vw]"
                            >
                            {locations.map((location, index) => (
                                <Link
                                href={location.href} 
                                key={index} 
                                className="hover:text-blue-400"
                                >
                                {location.name}
                                </Link>
                            ))}
                            </div>
                        </div>
                        <Link href="/ranking-process" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Ranking Process</Link>
                        <Link href="/team-selection-process" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Selection Process</Link>
                        <Link href="/promote" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Promote</Link>
                        <Link href="/gallery" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Gallery</Link>
                        <Link href="/archive/icpc_Amritapuri_2024" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Archive</Link>


                    </div>
                    {/* <ul className="flex justify-center flex-col text-4xl mt-3">
                        {options.map(option=>
                            <li key={option.id} className="mt-1">
                                <Link onClick={()=>setOpen(false)} href={option.href}>{option.option}</Link>
                            </li>
                        )}
                    </ul> */}
                    <ul className="absolute bottom-0 mb-4 flex justify-center w-[60vw]">
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