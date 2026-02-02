import React from "react";
import { assets } from "../assets/asset";

function Hero() {

  return (
    <div className="flex flex-col sm:flex-row border border-gray-200 overflow-hidden">
      {/* left */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-0 md:bg-gradient-to-r from-white via-white to-pink-300">
        <div className={`text-[#414141] px-8 sm:px-14 transition-all duration-1000`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`h-2 w-12 md:w-16 bg-[#414141] transition-all duration-700 delay-300`}></div>
            <p className="font-medium text-sm md:text-base tracking-widest uppercase text-gray-700">
              OUR BESTSELLERS
            </p>
          </div>
          <h1 className="prata-regular text-5xl sm:text-6xl md:text-7xl leading-tight mb-8">
            LATEST <br /> ARRIVALS
          </h1>
          <div className="flex items-center gap-4 group cursor-pointer">
            <p className="font-semibold text-base md:text-lg uppercase tracking-wider">
              SHOP NOW
            </p>
            <div className="h-1 w-12 md:w-16 bg-[#414141] group-hover:w-20 transition-all duration-300"></div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="w-full sm:w-1/2 min-h-[450px] sm:min-h-[700px] relative">
        <div className="absolute inset-0 md:bg-gradient-to-r from-pink-300 via-transparent to-transparent z-10"></div>
        <img
          src={assets.hero_image}
          alt="Latest Arrivals"
          className={`w-full h-full object-cover object-center transition-all duration-1000`}
        />
      </div>
    </div>
  );
}

export default Hero;