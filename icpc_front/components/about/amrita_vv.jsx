export default function AboutAmrita(){
    return(
        <div id="about_amrita" className="h-screen flex flex-col">
            {/* About Amrita Section - 70% height */}
            <div className="h-[70%] max-md:h-[60%] bg-[#92133b] flex justify-center items-center">
                <div className="max-w-[80vw] max-md:max-w-[90vw]">
                    <h1 className="text-[2.5vw] max-md:text-[6vw] font-semibold text-white mb-[2vw]">
                        About Amrita Vishwa Vidyapeetham
                    </h1>
                    <div className="text-[1.1vw] max-md:text-[3vw] text-gray-100 space-y-[1vw]">
                        <p>
                            Amrita Vishwa Vidyapeetham is a multi-disciplinary, research-intensive, private university, 
                            educating a vibrant student population of over 24,000 by 1700+ strong faculty. 
                            Accredited with the highest possible &apos;A++&apos; grade by NAAC, Amrita offers more than 250 UG, PG, 
                            and Ph.D. programs in Engineering, Management, Medical Sciences including Ayurveda, Life Sciences, 
                            Physical Sciences, Agriculture Sciences, Arts & Humanities, and Social & Behavioral Sciences.
                        </p>
                        <p>
                            With its extensive network of nine campuses spread across Amaravati, Amritapuri, Bengaluru, 
                            Chennai, Coimbatore, Kochi, Mysuru, Nagercoil(*) and NCR Delhi (Faridabad), Amrita University 
                            stands as one of India&apos;s preeminent private educational institutions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Us Section - 30% height */}
            <div className="h-[30%] max-md:h-[40%] bg-blue-950 text-white max-md:pt-[5vw]">
                <div className="h-full flex flex-col">
                    {/* Contact Content */}
                    <div className="flex-1 grid grid-cols-3 max-md:grid-cols-1 gap-[2vw] px-[10vw] max-md:px-[5vw] py-[2vw]">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[1vw]">Contact Us</h2>
                            <div className="text-[1vw] max-md:text-[3vw] text-gray-300">
                                <p>Amrita School of Engineering</p>
                                <p>Amritapuri, Kollam</p>
                                <p>Kerala, India - 690525</p>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[1vw]">Quick Links</h2>
                            <div className="text-[1vw] max-md:text-[3vw] text-gray-300 space-y-[0.5vw]">
                                <p className="hover:text-blue-300 cursor-pointer">ICPC Global</p>
                                <p className="hover:text-blue-300 cursor-pointer">Registration</p>
                                <p className="hover:text-blue-300 cursor-pointer">Important Dates</p>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div>
                            <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[1vw]">Get in Touch</h2>
                            <div className="text-[1vw] max-md:text-[3vw] text-gray-300">
                                <p>Email: icpc@amrita.edu</p>
                                <p>Phone: +91 476 280 1111</p>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center py-[1vw] text-[0.9vw] max-md:text-[2.5vw] bg-blue-950 text-gray-300">
                        &copy; 2024 ICPC Asia Amritapuri Regional Contest. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}