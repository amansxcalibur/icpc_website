import React from 'react'
import { Gallery } from 'next-gallery'

const images = [
    { src: '/ICPC_Photos/Day_2/4O1A7818.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_2/4O1A7828.jpg', aspect_ratio: 3 / 2 },
    { src: '/ICPC_Photos/Day_1/4O1A6931.jpg', aspect_ratio: 3 / 2 },
    { src: '/ICPC_Photos/Day_2/4O1A7842.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/4O1A6967.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/4O1A6985.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_1/4O1A6998.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/4O1A7034.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_1/4O1A7041.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/4O1A7069.jpg', aspect_ratio: 3 / 2 },
    { src: '/ICPC_Photos/Day_1/4O1A7091.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/4O1A7146.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_1/4O1A7149.jpg', aspect_ratio: 21 / 9 },
    { src: '/ICPC_Photos/Day_1/4O1A7150.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_1/4O1A7151.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_2/4O1A7426.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_2/4O1A7476.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_2/4O1A7484.jpg', aspect_ratio: 3 / 2 },
    { src: '/ICPC_Photos/Day_2/4O1A7560.jpg', aspect_ratio: 21 / 9 },
    { src: '/ICPC_Photos/Day_2/4O1A7568.jpg', aspect_ratio: 16 / 9 },
    { src: '/ICPC_Photos/Day_2/4O1A7582.jpg', aspect_ratio: 4 / 3 },
    { src: '/ICPC_Photos/Day_2/4O1A7605.jpg', aspect_ratio: 3 / 2 },
    { src: '/ICPC_Photos/Day_2/4O1A7609.jpg', aspect_ratio: 21 / 9 },
    { src: '/ICPC_Photos/Day_2/4O1A7717.jpg', aspect_ratio: 21 / 9 },
    { src: '/ICPC_Photos/Day_2/4O1A7734.jpg', aspect_ratio: 21 / 9 },
    { src: '/ICPC_Photos/Day_2/4O1A7770.jpg', aspect_ratio: 21 / 9 },
    { src: '/ICPC_Photos/Day_2/4O1A7794.jpg', aspect_ratio: 21 / 9 },
    { src: '/ICPC_Photos/Day_2/4O1A7111.jpg', aspect_ratio: 10/9},
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