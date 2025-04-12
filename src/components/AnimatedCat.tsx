
import React from 'react';

interface AnimatedCatProps {
  position?: 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
  isRecording?: boolean;
}

const AnimatedCat: React.FC<AnimatedCatProps> = ({ 
  position = 'bottom-right',
  isRecording = false
}) => {
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-left': 'top-4 left-4',
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-40 animate-float-bob pointer-events-none`}>
      <div className="relative">
        {/* Cat body peeking from corner */}
        <div className="w-16 h-16 bg-peekly-yellow rounded-full flex items-center justify-center">
          {/* Cat face */}
          <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/59cd894f-4f7d-43a6-b135-6202349c39b9.png" 
              alt="Peekly Cat" 
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
        
        {/* Cat paw (only shown when recording) */}
        {isRecording && (
          <div className="absolute -bottom-4 left-3 animate-cat-paw">
            <div className="w-5 h-5 bg-white rounded-full"></div>
            <div className="flex -mt-1">
              <div className="w-1.5 h-1.5 bg-peekly-peach rounded-full mx-0.5"></div>
              <div className="w-1.5 h-1.5 bg-peekly-peach rounded-full mx-0.5"></div>
              <div className="w-1.5 h-1.5 bg-peekly-peach rounded-full mx-0.5"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedCat;
