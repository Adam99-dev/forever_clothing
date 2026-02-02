import React from "react";

function Title({ text1, text2, description }) {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-6">
      {/* Left decorative element - hidden on small screens */}
      <div className="hidden sm:flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        <div className="w-12 h-0.5 sm:w-16 md:w-20 bg-gray-300"></div>
      </div>

      {/* Text content */}
      <div className="text-center">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          <span className="text-gray-600">{text1}</span>
          {text2 && (
            <span className="text-gray-900 ml-2 sm:ml-3 md:ml-4">
              {text2}
            </span>
          )}
        </div>
        
        {description && (
          <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-gray-500 max-w-md sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Right decorative element - hidden on small screens */}
      <div className="hidden sm:flex items-center gap-2">
        <div className="w-12 h-0.5 sm:w-16 md:w-20 bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
      </div>
    </div>
  );
}

export default Title;