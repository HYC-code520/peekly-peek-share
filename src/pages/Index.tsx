import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Logo from '@/components/Logo';
import RecordButton from '@/components/RecordButton';
import CameraBubble from '@/components/CameraBubble';
import NotesPanel from '@/components/NotesPanel';
import SaveConfirmation from '@/components/SaveConfirmation';
import AnimatedCat from '@/components/AnimatedCat';
import { Button } from '@/components/ui/button';
import { Video, Library, Settings, LogIn } from 'lucide-react';

const Index = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);
  const { toast } = useToast();

  const toggleRecording = () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false);
      setShowSaveConfirmation(true);
      
      toast({
        title: "Recording stopped",
        description: "Your recording has been automatically saved",
      });
    } else {
      // Start recording
      setIsRecording(true);
      
      toast({
        title: "Recording started",
        description: "Click the stop button when you're finished",
      });
    }
  };

  const handleSaveAnimationComplete = () => {
    // Keep the dialog open until user closes it
  };

  const handleCloseConfirmation = () => {
    setShowSaveConfirmation(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-peekly-yellow-light to-white flex flex-col">
      {/* Header */}
      <header className="w-full p-4 flex justify-between items-center bg-white shadow-soft">
        <Logo />
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="flex items-center gap-2">
            <Video size={18} />
            <span>Record New</span>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <Library size={18} />
            <span>Video Library</span>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <Settings size={18} />
            <span>Settings</span>
          </Button>
        </nav>
        
        {/* Login button */}
        <Button className="bg-peekly-yellow text-gray-800 hover:bg-peekly-yellow-dark flex items-center gap-2">
          <LogIn size={18} />
          <span>Sign In</span>
        </Button>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 relative">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Your <span className="text-peekly-yellow-dark">purr-fect</span> screen recording buddy
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Capture your screen with just one click. Add your camera and notes for professional presentations.
          </p>
        </div>

        <div className="relative flex items-center justify-center mb-8">
          {/* Main recording button */}
          <RecordButton 
            isRecording={isRecording} 
            onClick={toggleRecording}
          />
        </div>

        {/* Floating elements that appear when recording is active */}
        {(isRecording || showSaveConfirmation) && (
          <>
            <CameraBubble isRecording={isRecording} />
            <NotesPanel />
            <AnimatedCat position="bottom-right" isRecording={isRecording} />
          </>
        )}

        {/* Save confirmation overlay */}
        <SaveConfirmation 
          show={showSaveConfirmation}
          onAnimationComplete={handleSaveAnimationComplete}
          onClose={handleCloseConfirmation}
        />
      </main>

      {/* Footer */}
      <footer className="w-full p-4 text-center text-sm text-peekly-neutral">
        © 2025 Peekly. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
