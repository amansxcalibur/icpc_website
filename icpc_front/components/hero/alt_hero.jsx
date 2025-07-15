// import Image from "next/image";
// import Link from "next/link";

// export default function AltHero(){
//     return(
//         <div className="relative w-full min-h-screen overflow-hidden bg-gray-100">
//             {/* Optional Background Pattern or Images */}
//             {/* You can add background images here when you have the actual image sources */}
            
//             {/* Main Content Container */}
//             <div className="relative z-10 flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
                
//                 {/* Text Content */}
//                 <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 xl:w-3/5 mb-8 lg:mb-0">
//                     <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold text-blue-500 text-center lg:text-left leading-tight tracking-tighter mb-4 sm:mb-6 md:mb-8 max-w-full">
//                         ICPC 2025 Regionals
//                     </h1>
                    
//                     <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center lg:text-left text-black font-medium mb-6 sm:mb-8 md:mb-10 max-w-full">
//                         <Link href={'/reach-us/bengaluru'} className="hover:text-blue-400 transition-colors duration-300">
//                             Bengaluru
//                         </Link> | <Link href={'/reach-us/coimbatore'} className="hover:text-blue-400 transition-colors duration-300">
//                             Coimbatore
//                         </Link> | <Link href={'/reach-us/amritapuri'} className="hover:text-blue-400 transition-colors duration-300">
//                             Kollam
//                         </Link>
//                     </p>
                    
//                     <Link
//                         href=""
//                         className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl py-3 sm:py-4 md:py-5 lg:py-6 px-6 sm:px-8 md:px-10 lg:px-12 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
//                     >
//                         Registration coming soon!
//                     </Link>
//                 </div>

//                 {/* Image Content */}
//                 <div className="flex flex-col items-center lg:items-end justify-center w-full lg:w-1/2 xl:w-2/5 mt-8 lg:mt-0">
//                     <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-square">
//                         <Image
//                             src="/3df2.png"
//                             alt="ICPC 2025 Logo"
//                             fill
//                             className="object-contain"
//                             unoptimized
//                             priority
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// 'use client';
// import Image from "next/image";
// import Link from "next/link";

// export default function AltHero() {
//     const images = [
//         { id: '1', src: '/ICPC_Photos/Latest_pic/1.jpg', alt: 'ICPC 2025 Regionals - Image 1' },
//         { id: '2', src: '/ICPC_Photos/Latest_pic/2.jpg', alt: 'ICPC 2025 Regionals - Image 2' },
//         { id: '3', src: '/ICPC_Photos/Latest_pic/3.jpg', alt: 'ICPC 2025 Regionals - Image 3' },
//         { id: '4', src: '/ICPC_Photos/Latest_pic/4.jpg', alt: 'ICPC 2025 Regionals - Image 4' },
//         { id: '5', src: '/ICPC_Photos/Latest_pic/5.jpg', alt: 'ICPC 2025 Regionals - Image 5' },
//     ];

//     return (
//         <div className="relative w-full min-h-screen overflow-hidden">
//             {/* Hide scrollbar with custom CSS */}
//             <style jsx>{`
//                 .scrollbar-hide {
//                     -ms-overflow-style: none;
//                     scrollbar-width: none;
//                 }
//                 .scrollbar-hide::-webkit-scrollbar {
//                     display: none;
//                 }
//             `}</style>
//             {/* Background Image Carousel */}
//             <div className="absolute inset-0 w-full h-full">
//                 {images.length > 0 ? (
//                     <>
//                         <div className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide">
//                             {images.map((image) => (
//                                 <div key={image.id} className="relative flex-shrink-0 w-full h-full snap-start">
//                                     <Image
//                                         id={image.id}
//                                         src={image.src}
//                                         alt={image.alt}
//                                         fill
//                                         className="object-cover"
//                                         priority={image.id === '1'}
//                                     />
//                                 </div>
//                             ))}
//                         </div>
                        
//                         {/* Navigation Dots */}
//                         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
//                             {images.map((image) => (
//                                 <a
//                                     key={image.id}
//                                     href={`#${image.id}`}
//                                     className="w-4 h-4 rounded-full bg-white/60 hover:bg-white transition-all duration-300 shadow-lg border-2 border-white/30"
//                                 />
//                             ))}
//                         </div>
//                     </>
//                 ) : (
//                     <div className="flex items-center justify-center w-full h-full bg-gray-200">
//                         <p className="text-gray-500">Loading images...</p>
//                     </div>
//                 )}
//             </div>

//             {/* Dark Overlay for better text readability */}
//             <div className="absolute inset-0 bg-black/40 z-5"></div>
            
//             {/* Main Content Container */}
//             <div className="relative z-10 flex flex-col justify-center items-center w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
                
//                 {/* Text Content */}
//                 <div className="flex flex-col justify-center items-center text-center max-w-4xl">
//                     <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold text-white mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tighter">
//                         ICPC 2025 Regionals
//                     </h1>
                    
//                     <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-medium mb-6 sm:mb-8 md:mb-10">
//                         <Link href={'/reach-us/bengaluru'} className="hover:text-blue-300 transition-colors duration-300">
//                             Bengaluru
//                         </Link> | <Link href={'/reach-us/coimbatore'} className="hover:text-blue-300 transition-colors duration-300">
//                             Coimbatore
//                         </Link> | <Link href={'/reach-us/amritapuri'} className="hover:text-blue-300 transition-colors duration-300">
//                             Kollam
//                         </Link>
//                     </p>
                    
//                     <Link
//                         href=""
//                         className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl py-3 sm:py-4 md:py-5 lg:py-6 px-6 sm:px-8 md:px-10 lg:px-12 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
//                     >
//                         Registration coming soon!
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function AltHero() {
    // const images = [
    //     { id: '1', src: '/ICPC_Photos/Latest_pic/1.jpg', alt: 'ICPC 2025 Regionals - Image 1' },
    //     { id: '2', src: '/ICPC_Photos/Latest_pic/2.jpg', alt: 'ICPC 2025 Regionals - Image 2' },
    //     { id: '3', src: '/ICPC_Photos/Latest_pic/3.jpg', alt: 'ICPC 2025 Regionals - Image 3' },
    //     { id: '4', src: '/ICPC_Photos/Latest_pic/4.jpg', alt: 'ICPC 2025 Regionals - Image 4' },
    //     { id: '5', src: '/ICPC_Photos/Latest_pic/5.jpg', alt: 'ICPC 2025 Regionals - Image 5' },
    // ];

    
 const IMAGE_PATH = '/ICPC_Photos/Latest_pic/';
    const IMAGE_COUNT = 12;
    const IMAGE_EXTENSION = '.jpg';
    
    // Generate images array dynamically
    const images = Array.from({ length: IMAGE_COUNT }, (_, index) => ({
        id: String(index + 1),
        src: `${IMAGE_PATH}${index + 1}${IMAGE_EXTENSION}`,
        alt: `ICPC 2025 Regionals - Image ${index + 1}`
    }));


    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-change images every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Background Image Carousel with Auto-Change */}
            <div className="absolute inset-0 w-full h-full">
                {images.length > 0 ? (
                    <>
                        {/* Image Container */}
                        <div className="relative w-full h-full">
                            {images.map((image, index) => (
                                <div
                                    key={image.id}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                        </div>
                        
                        {/* Navigation Dots */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                            {images.map((image, index) => (
                                <button
                                    key={image.id}
                                    onClick={() => goToImage(index)}
                                    className={`w-4 h-4 rounded-full transition-all duration-300 shadow-lg border-2 border-white/30 ${
                                        index === currentImageIndex 
                                            ? 'bg-white scale-110' 
                                            : 'bg-white/60 hover:bg-white/80'
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200">
                        <p className="text-gray-500">Loading images...</p>
                    </div>
                )}
            </div>

            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 z-5"></div>
            
            {/* Main Content Container */}
            <div className="relative z-10 flex flex-col justify-center items-center w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
                
                {/* Text Content */}
                <div className="flex flex-col justify-center items-center text-center max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold text-white mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tighter">
                        ICPC 2025 Regionals
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-medium mb-6 sm:mb-8 md:mb-10">
                        <Link href={'/reach-us/bengaluru'} className="hover:text-blue-300 transition-colors duration-300">
                            Bengaluru
                        </Link> | <Link href={'/reach-us/coimbatore'} className="hover:text-blue-300 transition-colors duration-300">
                            Coimbatore
                        </Link> | <Link href={'/reach-us/amritapuri'} className="hover:text-blue-300 transition-colors duration-300">
                            Kollam
                        </Link>
                    </p>
                    
                    <Link
                        href=""
                        className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl py-3 sm:py-4 md:py-5 lg:py-6 px-6 sm:px-8 md:px-10 lg:px-12 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Registration coming soon!
                    </Link>
                </div>
            </div>
        </div>
    )
}