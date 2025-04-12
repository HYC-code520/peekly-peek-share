
import React, { useState, useRef, useEffect } from 'react';
import { Camera, CameraOff, Smile } from 'lucide-react';

interface Position {
  x: number;
  y: number;
}

interface CameraBubbleProps {
  isRecording: boolean;
}

const CameraBubble: React.FC<CameraBubbleProps> = ({ isRecording }) => {
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);

  const toggleCamera = () => {
    if (cameraEnabled) {
      // Stop the camera
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
        videoRef.current.srcObject = null;
      }
      setCameraEnabled(false);
    } else {
      // Start the camera
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          setCameraEnabled(true);
        })
        .catch(err => {
          console.error("Error accessing camera:", err);
          setCameraEnabled(false);
        });
    }
  };

  // Handle starting drag
  const handleMouseDown = (e: React.MouseEvent) => {
    if (bubbleRef.current) {
      const rect = bubbleRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  // Handle drag move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;
        setPosition({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  return (
    <div 
      ref={bubbleRef}
      className={`
        absolute z-50 rounded-full shadow-soft
        transition-all duration-300 
        ${isDragging ? 'opacity-80' : 'opacity-100'}
      `}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        width: isRecording ? '120px' : '60px',
        height: isRecording ? '120px' : '60px',
      }}
    >
      <div 
        className="w-full h-full relative rounded-full overflow-hidden bg-peekly-purple draggable-handle"
        onMouseDown={handleMouseDown}
      >
        {cameraEnabled ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-peekly-gray">
            <Smile size={isRecording ? 48 : 24} className="text-peekly-purple-dark" />
          </div>
        )}
        
        {/* Camera toggle button */}
        <button 
          onClick={toggleCamera}
          className="absolute bottom-0 right-0 bg-white rounded-full p-1 m-1 shadow-md"
        >
          {cameraEnabled ? 
            <CameraOff size={16} className="text-red-500" /> : 
            <Camera size={16} className="text-peekly-purple" />
          }
        </button>
      </div>
    </div>
  );
};

export default CameraBubble;
