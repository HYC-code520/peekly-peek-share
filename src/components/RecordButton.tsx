
import React from 'react';
import { Circle, CircleStop } from 'lucide-react';

interface RecordButtonProps {
  isRecording: boolean;
  onClick: () => void;
}

const RecordButton: React.FC<RecordButtonProps> = ({ isRecording, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative flex items-center justify-center 
        rounded-full py-4 px-8 
        text-gray-800 font-medium text-lg
        transition-all duration-300 
        shadow-soft hover:shadow-hover
        ${isRecording 
          ? 'bg-red-500 hover:bg-red-600 text-white min-w-36' 
          : 'bg-peekly-yellow hover:bg-peekly-yellow-dark min-w-44'
        }
      `}
    >
      <span className="flex items-center gap-2">
        {isRecording ? (
          <>
            <CircleStop className="animate-pulse" />
            Stop Recording
          </>
        ) : (
          <>
            <Circle className="animate-pulse-scale" />
            Start Recording
          </>
        )}
      </span>
    </button>
  );
};

export default RecordButton;
