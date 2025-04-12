
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
          <div className="relative w-12 h-12 bg-white rounded-full flex flex-col items-center justify-center">
            {/* Cat eyes */}
            <div className="flex w-6 justify-between mb-1">
              <div className={`w-1.5 h-3 bg-black rounded-full ${isRecording ? 'animate-cat-blink' : ''}`}></div>
              <div className={`w-1.5 h-3 bg-black rounded-full ${isRecording ? 'animate-cat-blink' : ''}`}></div>
            </div>
            {/* Cat nose */}
            <div className="w-1.5 h-1.5 bg-peekly-peach rounded-full mb-0.5"></div>
            {/* Cat mouth */}
            <div className="w-4 h-1">
              {isRecording ? (
                <div className="w-3 h-2 mx-auto border-b-2 border-black rounded-b-full"></div>
              ) : (
                <div className="w-3 h-1 flex justify-between mx-auto">
                  <div className="w-1 h-1 border-b border-black rounded"></div>
                  <div className="w-1 h-1 border-b border-black rounded"></div>
                </div>
              )}
            </div>
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
