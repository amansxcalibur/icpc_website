import React from 'react'
import { Gallery } from 'next-gallery'

const images = [
    { src: '/ICPC_Photos/Day_2/1.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_2/2.jpg', aspect_ratio: 3 / 2 },
    { src: '/ICPC_Photos/Day_2/3.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_2/4.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_2/5.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_2/6.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_2/7.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_2/8.jpg', aspect_ratio: 21 / 9 },
    { src: '/ICPC_Photos/Day_2/9.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_2/10.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_2/11.jpg', aspect_ratio: 3 / 2 },
    { src: '/ICPC_Photos/Day_2/12.jpg', aspect_ratio: 21 / 9 },
    { src: '/ICPC_Photos/Day_2/13.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_2/14.jpg', aspect_ratio: 21 / 9 },
    { src: '/ICPC_Photos/Day_2/15.jpg', aspect_ratio: 21 / 9 },
    { src: '/ICPC_Photos/Day_2/16.jpg', aspect_ratio: 10 / 9 },
    { src: '/ICPC_Photos/Day_1/1.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_1/2.jpg', aspect_ratio: 3 / 2 },
    { src: '/ICPC_Photos/Day_1/3.jpg', aspect_ratio: 3 / 2 },
    { src: '/ICPC_Photos/Day_1/4.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/5.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/6.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_1/7.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/8.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_1/9.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/10.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_1/11.jpg', aspect_ratio: 3 / 2 },
    { src: '/ICPC_Photos/Day_1/12.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/13.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_1/14.jpg', aspect_ratio: 21 / 9 },
    { src: '/ICPC_Photos/Day_1/15.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/16.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_1/17.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/18.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/19.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_1/20.jpg', aspect_ratio: 21 / 9 },
    { src: '/ICPC_Photos/Day_1/21.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/22.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_1/23.jpg', aspect_ratio: 3 / 2 },
    { src: '/ICPC_Photos/Day_1/24.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/25.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_1/26.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/27.jpg', aspect_ratio: 21 / 9 },
    { src: '/ICPC_Photos/Day_1/28.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/29.jpg', aspect_ratio: 3 / 2 },
    { src: '/ICPC_Photos/Day_1/30.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_1/31.jpg', aspect_ratio: 21 / 9 },
    { src: '/ICPC_Photos/Day_1/32.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/33.jpg', aspect_ratio: 3 / 2 },
    { src: '/ICPC_Photos/Day_1/34.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/35.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_1/36.jpg', aspect_ratio: 21 / 9 },
    { src: '/ICPC_Photos/Day_1/37.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/38.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_1/39.jpg', aspect_ratio: 21 / 9 },
    { src: '/ICPC_Photos/Day_1/40.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_1/41.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/42.jpg', aspect_ratio: 4 / 3 },
    //{ src: '/ICPC_Photos/Day_1/43.jpg', aspect_ratio: 3 / 2 }
]



const widths = [500, 1000, 1600]
const ratios = [2.2, 4, 6, 8]

export default function GalleryPage() {
    return (
        <div className="bg-white text-black mt-[5vw] min-h-screen">
                        <p className="font-semibold text-[3vw] max-md:text-[6vw] justify-center flex mb-[2vw] max-md:mb-[4vw] max-md:mt-[8vw]">Event Gallery</p>
                        <div className="flex flex-col gap-10  mx-[7vw]">
                <Gallery {...{ widths, ratios, images }} lastRowBehavior="match-previous" />
            </div>
        </div>
    )
}