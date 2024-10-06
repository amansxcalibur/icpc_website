import Image from "next/image"

export default function Home(){
  return(
    <div>
    <body class="font-sans">
      
        <nav class="bg-white shadow-lg fixed w-full z-50">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex justify-between items-center h-16">
                    <div class="flex-shrink-0">
                        <h1 class="text-xl font-bold text-blue-700">ICPC Amritapuri</h1>
                    </div>
                    <div class="hidden md:block">
                        <div class="flex items-center space-x-4">
                            <a href="#" class="text-gray-700 hover:text-blue-600 px-3 py-2">Home</a>
                            <a href="#" class="text-gray-700 hover:text-blue-600 px-3 py-2">ASPC</a>
                            <a href="#" class="text-gray-700 hover:text-blue-600 px-3 py-2">Important Dates</a>
                            <a href="#" class="text-gray-700 hover:text-blue-600 px-3 py-2">Onsite Contest</a>
                            <a href="#" class="text-gray-700 hover:text-blue-600 px-3 py-2">Online Contest</a>
                            <a href="#" class="text-gray-700 hover:text-blue-600 px-3 py-2">Regional Updates</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <section class="hero-pattern pt-24">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div class="text-center">
                    <h1 class="text-4xl font-bold text-white mb-4">
                        Are You The Best of The Best of The Best?
                    </h1>
                    <p class="text-xl text-white opacity-90 mb-8">
                        Join the premiere global programming competition for the world's universities
                    </p>
                    <div class="flex justify-center space-x-4">
                        <a href="#" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                            Register Now
                        </a>
                        <a href="#" class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h3 class="text-4xl font-bold text-blue-600 mb-2">400K+</h3>
                        <p class="text-gray-600">Alumni Worldwide</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h3 class="text-4xl font-bold text-blue-600 mb-2">60K+</h3>
                        <p class="text-gray-600">Team Members</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h3 class="text-4xl font-bold text-blue-600 mb-2">111</h3>
                        <p class="text-gray-600">Countries Participating</p>
                    </div>
                </div>
            </div>
        </section>

      
        <section class="py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-6">About ICPC</h2>
                        <p class="text-gray-600 mb-4">
                            The ICPC International Collegiate Programming Contest is the premiere global programming competition conducted by and for the world's universities. For over four decades, the ICPC has grown to be a game-changing global competitive educational program.
                        </p>
                        <p class="text-gray-600 mb-4">
                            The contest fosters creativity, teamwork, and innovation in building new software programs and enables students to test their ability to perform under pressure.
                        </p>
                    </div>
                    <div class="relative">
                        <Image src="/api/placeholder/600/400" width={500} height={500} alt="ICPC Competition" class="rounded-lg shadow-xl w-auto"/>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-gray-50 py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Latest Updates</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <Image src="/api/placeholder/400/200" width={500} height={500} alt="Update 1" class="w-full"/>
                        <div class="p-6">
                            <h3 class="font-semibold text-xl mb-2">Teams Selected for Asia West Championship</h3>
                            <p class="text-gray-600">Check out the list of teams that made it to the championship.</p>
                            <a href="#" class="text-blue-600 hover:text-blue-700 mt-4 inline-block">Read More →</a>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <Image src="/api/placeholder/400/200" width={500} height={500} alt="Update 2" class="w-full"/>
                        <div class="p-6">
                            <h3 class="font-semibold text-xl mb-2">How to Reach Amrita Campuses</h3>
                            <p class="text-gray-600">Detailed guide for reaching different contest venues.</p>
                            <a href="#" class="text-blue-600 hover:text-blue-700 mt-4 inline-block">Read More →</a>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <Image src="/api/placeholder/400/200" width={500} height={500} alt="Update 3" class="w-full"/>
                        <div class="p-6">
                            <h3 class="font-semibold text-xl mb-2">Important Dates Announced</h3>
                            <p class="text-gray-600">Mark your calendar with these crucial competition dates.</p>
                            <a href="#" class="text-blue-600 hover:text-blue-700 mt-4 inline-block">Read More →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="bg-gray-900 text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div class="col-span-2">
                        <h3 class="text-xl font-bold mb-4">ICPC Asia Amritapuri</h3>
                        <p class="text-gray-400">
                            The premiere programming competition for university students worldwide.
                        </p>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">About</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Registration</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Connect</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white">Twitter</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">LinkedIn</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Facebook</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p class="text-gray-400">© 2024 ICPC Asia Amritapuri Regional Contest. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </body>
  </div>
  )
}