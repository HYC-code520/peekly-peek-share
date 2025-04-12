
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-12 w-12 bg-peekly-yellow rounded-full flex items-center justify-center">
        {/* Cat face */}
        <div className="relative w-10 h-10 bg-white rounded-full flex flex-col items-center justify-center">
          {/* Cat eyes */}
          <div className="flex w-6 justify-between mb-1">
            <div className="w-1.5 h-3 bg-black rounded-full overflow-hidden flex items-center justify-center animate-cat-blink"></div>
            <div className="w-1.5 h-3 bg-black rounded-full overflow-hidden flex items-center justify-center animate-cat-blink"></div>
          </div>
          {/* Cat nose */}
          <div className="w-1.5 h-1.5 bg-peekly-peach rounded-full mb-1"></div>
          {/* Cat mouth */}
          <div className="w-3 h-1 flex justify-between">
            <div className="w-1 h-1 border-b border-black rounded"></div>
            <div className="w-1 h-1 border-b border-black rounded"></div>
          </div>
        </div>
        {/* Cat ears */}
        <div className="absolute w-3 h-3 bg-white rotate-45 -top-1 -left-1 rounded-sm"></div>
        <div className="absolute w-3 h-3 bg-white rotate-45 -top-1 -right-1 rounded-sm"></div>
      </div>
      <span className="text-2xl font-bold text-gray-800 font-display">Peekly</span>
    </div>
  );
};

export default Logo;
