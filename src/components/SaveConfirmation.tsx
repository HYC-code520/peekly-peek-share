
import React, { useEffect, useState } from 'react';
import { Check, HardDrive } from 'lucide-react';

interface SaveConfirmationProps {
  show: boolean;
  onAnimationComplete: () => void;
}

const SaveConfirmation: React.FC<SaveConfirmationProps> = ({ 
  show, 
  onAnimationComplete 
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
      <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center">
        <div className="relative mb-4">
          <div className="w-16 h-16 rounded-full bg-peekly-gray flex items-center justify-center">
            <HardDrive size={32} className="text-peekly-purple" />
          </div>
          <div className={`
            absolute -right-1 -bottom-1 
            w-8 h-8 rounded-full bg-green-500 
            flex items-center justify-center
            ${animationState === 'showing' ? 'animate-checkmark-appear' : ''}
          `}>
            <Check size={20} className="text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">Recording Saved!</h3>
        <p className="text-gray-600 text-center">
          Your video has been automatically saved
        </p>
      </div>
    </div>
  );
};

export default SaveConfirmation;
