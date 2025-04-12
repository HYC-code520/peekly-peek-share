
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-12 w-12 bg-white rounded-full flex items-center justify-center">
        <img 
          src="/lovable-uploads/59cd894f-4f7d-43a6-b135-6202349c39b9.png" 
          alt="Peekly Cat Logo" 
          className="w-10 h-10 object-contain"
        />
      </div>
      <span className="text-2xl font-bold text-gray-800 font-display">Peekly</span>
    </div>
  );
};

export default Logo;
