export default function (){
    return(
        <div className="flex flex-col lg:flex-row gap-20 md:m-[3vw] ">
        <div className="flex-[1] max-md:w-[90vw]">

          {/* Section 1: REACH US */}
          <div>
            <h1 className="font-bold text-[#172554] text-[3vw] max-md:text-[6vw] md:mb-[1vw] mx-[-0.1vw]">REACH US</h1>
            <p className="font-semibold text-black">Located near the border of Tamil Nadu and Kerala, about 2.5 km north of the Coimbatore-Palakkad highway (NH 47), the campus is ensconced by the Western Ghats on its three sides. It is 16 kms from Coimbatore City and 32 kms from Palakkad.</p>
          </div>
  
          {/* Section 2: By Air and Taxi */}
          <div>
            <h3 className="text-xl font-semibold text-[#172554] my-[1vw] mt-[3vw]">By Air and Taxi</h3>
            <p className="text-black">The closest airport is Coimbatore, located about 27 kilometers from the campus. Most airlines operate flights to Coimbatore from all major cities in India.</p>
          </div>
  
          {/* Section 3: By Bus */}
          <div>
            <h3 className="text-xl font-semibold text-[#172554] my-[1vw] mt-[2vw]">By Bus</h3>
            <p className="text-black"> The nearest major bus terminals are at Gandhipuram (about 22 kms) and Ukkadam (about 18 kms.). There are regular bus services from Gandhipuram (Bus Nos. 96, A3 and 3G) and Ukkadam (Bus Nos. 96, 48, S2, 3G and A3). Alight at Ettimadai Piruvu Bus Stop (Amrita College) and hire an auto rickshaw to the campus (3 kms). A3 bus will come upto the college Gate. The travel time from Ukkadam to Ettimadai Piruvu is around 45 minutes.</p>
          </div>
  
          {/* Section 4: By Train */}
          <div>
            <h3 className="text-xl font-semibold text-[#172554] my-[1vw] mt-[2vw]">By Train</h3>
            <p className="text-black"> Kayamkulam is the closest train station situated 12 kilometres north of the campus. After disembarking, one can hire an autorickshaw to come to the campus. The ride takes about 20 minutes. Buses are also available from Kayamkulam Bus-Stand to Vallickavu Junction, which is about a five-minute walk from the campus.
            </p>
          </div>
        </div>
  
        {/* Map */}
        <div className="flex-1 max-w-full">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1Tla0OCvXmOd0oR9VD_lIqDL2DnQ&ehbc=2E312F&ll=9.418050803419085%2C76.37497744051898&z=9"           
            width="100%"
            height="100%"
            className="border-none"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    );
}