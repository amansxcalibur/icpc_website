import React from "react";
import Data from "../json/reach_us.json"; 

export default function Location() {
  const amritapuriCampus = Data.campuses.find(campus => campus.name === "Amritapuri");

  return (
    <div className="flex flex-col lg:flex-row gap-20 md:m-[3vw]">
      <div className="flex-[1] max-md:w-[90vw]">
        {amritapuriCampus.sections.map((section, index) => {
          if (section.title === "REACH US") {
            return (
              <div key={index}>
                <h1 className="font-bold text-[#172554] text-[3vw] max-md:text-[6vw] md:mb-[1vw] mx-[-0.1vw]">
                  {section.title}
                </h1>
                <p className="font-semibold text-black">{section.content}</p>
              </div>
            );
          } else {
            return (
              <div key={index}>
                <h3 className="text-xl font-semibold text-[#172554] my-[1vw] mt-[2vw]">
                  {section.title}
                </h3>
                <p className="text-black">{section.content}</p>
              </div>
            );
          }
        })}
      </div>

      <div className="flex-1 max-w-full">
        <iframe
          src={amritapuriCampus.map.src}
          width={amritapuriCampus.map.width}
          height={amritapuriCampus.map.height}
          className="border-none"
          allowFullScreen=""
          loading="lazy"
          title={amritapuriCampus.map.title}
        ></iframe>
      </div>
    </div>
  );
}
