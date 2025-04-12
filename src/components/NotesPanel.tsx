
import React, { useState, useRef, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { GripVertical, Minimize2, Maximize2 } from 'lucide-react';

interface Position {
  x: number;
  y: number;
}

const NotesPanel: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: window.innerWidth - 380, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });
  const [isMinimized, setIsMinimized] = useState(false);
  const [notes, setNotes] = useState("Add your script or notes here...");
  const panelRef = useRef<HTMLDivElement>(null);

  // Handle starting drag
  const handleMouseDown = (e: React.MouseEvent) => {
    if (panelRef.current) {
      const rect = panelRef.current.getBoundingClientRect();
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

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div 
      ref={panelRef}
      className={`absolute z-40 transition-all duration-300`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        width: isMinimized ? '200px' : '350px',
        opacity: isDragging ? 0.8 : 1,
      }}
    >
      <Card className="overflow-hidden shadow-soft hover:shadow-hover note-card border border-peekly-purple-light">
        <div 
          className="p-2 bg-peekly-purple-light flex items-center justify-between draggable-handle"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-2">
            <GripVertical size={18} className="text-peekly-purple-dark" />
            <span className="text-sm font-medium text-peekly-purple-dark">Notes</span>
          </div>
          <button onClick={toggleMinimize} className="text-peekly-purple-dark hover:text-peekly-purple">
            {isMinimized ? 
              <Maximize2 size={16} /> : 
              <Minimize2 size={16} />
            }
          </button>
        </div>
        
        {!isMinimized && (
          <div className="p-3">
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add your script or notes here..."
              className="min-h-32 border-peekly-blue"
            />
          </div>
        )}
      </Card>
    </div>
  );
};

export default NotesPanel;
