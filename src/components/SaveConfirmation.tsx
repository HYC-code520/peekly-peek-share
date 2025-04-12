
import React, { useEffect, useState } from 'react';
import { Check, HardDrive, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SaveConfirmationProps {
  show: boolean;
  onAnimationComplete: () => void;
  onClose: () => void;
}

const SaveConfirmation: React.FC<SaveConfirmationProps> = ({ 
  show, 
  onAnimationComplete,
  onClose 
}) => {
  const [animationState, setAnimationState] = useState<'initial' | 'showing' | 'complete'>('initial');

  useEffect(() => {
    if (show && animationState === 'initial') {
      setAnimationState('showing');
      
      // After animation completes, set to complete
      const timer = setTimeout(() => {
        setAnimationState('complete');
        onAnimationComplete();
      }, 2000);
      
      return () => clearTimeout(timer);
    }
    
    if (!show && animationState !== 'initial') {
      setAnimationState('initial');
    }
  }, [show, animationState, onAnimationComplete]);

  if (!show && animationState === 'initial') {
    return null;
  }

  return (
    <div className={`
      fixed inset-0 flex items-center justify-center z-50
      bg-black/30 backdrop-blur-sm
      transition-opacity duration-300
      ${animationState === 'showing' ? 'opacity-100' : 'opacity-0'}
    `}>
      <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center relative">
        {/* Close button */}
        <Button 
          onClick={onClose} 
          variant="ghost" 
          size="icon" 
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
        >
          <X size={18} />
        </Button>

        <div className="flex items-end justify-center mb-6">
          {/* Cat holding drive icon */}
          <div className="relative mr-2">
            {/* Cat face */}
            <div className="w-12 h-12 bg-peekly-yellow rounded-full">
              <div className="absolute top-1 left-1 w-10 h-10 bg-white rounded-full flex flex-col items-center justify-center">
                {/* Cat eyes */}
                <div className="flex w-6 justify-between mt-1 mb-1">
                  <div className="w-1.5 h-2.5 bg-black rounded-full"></div>
                  <div className="w-1.5 h-2.5 bg-black rounded-full"></div>
                </div>
                {/* Cat nose and mouth */}
                <div className="w-1.5 h-1.5 bg-peekly-peach rounded-full mb-0.5"></div>
                <div className="w-3 h-2 border-b-2 border-black rounded-b-full"></div>
              </div>
            </div>
            
            {/* Cat ears */}
            <div className="absolute w-3 h-3 bg-white rotate-45 -top-1 left-2 rounded-sm"></div>
            <div className="absolute w-3 h-3 bg-white rotate-45 -top-1 right-2 rounded-sm"></div>
            
            {/* Cat paws */}
            <div className="absolute -bottom-2 left-1 w-4 h-4 bg-white rounded-full"></div>
            <div className="absolute -bottom-2 right-1 w-4 h-4 bg-white rounded-full"></div>
          </div>
          
          {/* Drive icon */}
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-peekly-cream flex items-center justify-center border-2 border-peekly-yellow">
              <HardDrive size={24} className="text-gray-800" />
            </div>
            <div className={`
              absolute -right-1 -bottom-1 
              w-6 h-6 rounded-full bg-green-500 
              flex items-center justify-center
              ${animationState === 'showing' ? 'animate-checkmark-appear' : ''}
            `}>
              <Check size={16} className="text-white" />
            </div>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">Recording Saved!</h3>
        <p className="text-gray-600 text-center">
          Your video has been automatically saved
        </p>
        
        <div className="mt-6">
          <Button 
            onClick={onClose}
            className="bg-peekly-yellow text-gray-800 hover:bg-peekly-yellow-dark"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SaveConfirmation;
