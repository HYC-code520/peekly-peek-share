
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-10 w-10 bg-peekly-purple rounded-full flex items-center justify-center">
        <div className="absolute w-6 h-6 bg-white rounded-full left-0.5"></div>
        <div className="relative w-4 h-4 bg-peekly-purple rounded-full overflow-hidden flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      <span className="text-2xl font-bold text-gray-800">Peekly</span>
    </div>
  );
};

export default Logo;
