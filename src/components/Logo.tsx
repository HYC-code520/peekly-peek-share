
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-12 w-12 bg-white rounded-full flex items-center justify-center">
        {/* Cat face - new design */}
        <div className="relative w-10 h-10">
          {/* Cat ears */}
          <div className="absolute -top-2 left-0 w-5 h-4">
            <div className="absolute w-4 h-1.5 bg-[#6b4226] rotate-45 rounded-full"></div>
            <div className="absolute w-3 h-3 bg-peekly-yellow rounded-full right-0 top-0"></div>
          </div>
          <div className="absolute -top-2 right-0 w-5 h-4 transform scale-x-[-1]">
            <div className="absolute w-4 h-1.5 bg-[#6b4226] rotate-45 rounded-full"></div>
          </div>
          
          {/* Cat eyes */}
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-[#6b4226] rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-[#6b4226] rounded-full"></div>
          
          {/* Cat whiskers */}
          <div className="absolute top-1/3 -left-2 w-3 h-0.5 bg-[#6b4226] rounded-full"></div>
          <div className="absolute top-1/2 -left-3 w-3 h-0.5 bg-[#6b4226] rounded-full rotate-12"></div>
          <div className="absolute top-1/3 -right-2 w-3 h-0.5 bg-[#6b4226] rounded-full"></div>
          <div className="absolute top-1/2 -right-3 w-3 h-0.5 bg-[#6b4226] rounded-full -rotate-12"></div>
          
          {/* Cat nose */}
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 w-2 h-2.5">
            <div className="w-2 h-2 bg-[#6b4226] rounded-md"></div>
          </div>
          
          {/* Cat cheek */}
          <div className="absolute bottom-1/4 left-1/5 w-3 h-3 bg-peekly-yellow rounded-full"></div>
          
          {/* Cat mouth */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-2">
            <div className="w-6 h-2 border-b-2 border-[#6b4226] rounded-b-full"></div>
          </div>
        </div>
      </div>
      <span className="text-2xl font-bold text-gray-800 font-display">Peekly</span>
    </div>
  );
};

export default Logo;
