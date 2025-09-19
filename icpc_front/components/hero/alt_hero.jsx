'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function AltHero() {
    const IMAGE_PATH = '/coursel_images/';
    const IMAGE_COUNT = 5;
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
        // Remove top padding and make it stick to the top
        <div className="relative w-full h-screen overflow-hidden -mt-[5vw] md:-mt-[5vw] max-md:-mt-[15vw]">
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
                                    className={`w-6 h-1 rounded-full transition-all duration-300 shadow-lg border-2 border-white/30
                                        ${index === currentImageIndex 
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
            
            {/* Main Content Container - Adjusted padding to account for navbar */}
            <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-[8vw] md:pt-[6vw] max-md:pt-[18vw] pb-8">
                
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
                        </Link> | <span className="hover:text-blue-300 transition-colors duration-300">
                            Mysuru
                        </span>
                    </p>
                    
                    <Link
                        href="https://icpc.global/regionals/finder/Asia-Amritapuri-First-Round-2026"
                        className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl py-3 sm:py-4 md:py-5 lg:py-6 px-6 sm:px-8 md:px-10 lg:px-12 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Registration Open
                    </Link>
                </div>
            </div>
        </div>
    )
}