import { useState } from 'react';
import { Camera, Flash, Zap, Grid3x3, Timer, Send, X, Sparkles } from 'lucide-react';
import { mockUsers } from '@/data/users';
import { cn } from '@/lib/utils';

export default function SnapCamera() {
  const [isRecording, setIsRecording] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const [showLenses, setShowLenses] = useState(false);

  const lenses = [
    { id: 1, name: 'Dog', icon: '🐕' },
    { id: 2, name: 'Cat', icon: '🐱' },
    { id: 3, name: 'Rainbow', icon: '🌈' },
    { id: 4, name: 'Heart', icon: '💕' },
    { id: 5, name: 'Star', icon: '⭐' },
    { id: 6, name: 'Fire', icon: '🔥' },
  ];

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      {/* Camera Preview Area */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/400/800?random=999" 
          alt="Camera preview" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      {/* Top Bar with Friends */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
        <div className="flex space-x-2">
          {mockUsers.slice(0, 3).map((user) => (
            <div key={user.id} className="relative">
              <img 
                src={user.avatar} 
                alt={user.username}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div className={cn(
                "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white",
                user.status === 'online' ? "bg-green-500" : 
                user.status === 'away' ? "bg-yellow-500" : "bg-gray-400"
              )} />
            </div>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <button 
            onClick={() => setShowLenses(!showLenses)}
            className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
          >
            <Sparkles className="text-white" size={20} />
          </button>
          <button 
            onClick={() => setFlashOn(!flashOn)}
            className={cn(
              "p-2 backdrop-blur-md rounded-full transition-colors",
              flashOn ? "bg-yellow-400" : "bg-white/20 hover:bg-white/30"
            )}
          >
            <Flash className={flashOn ? "text-black" : "text-white"} size={20} />
          </button>
        </div>
      </div>

      {/* Lenses Panel */}
      {showLenses && (
        <div className="absolute top-20 left-0 right-0 p-4 z-20">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4">
            <div className="grid grid-cols-6 gap-3">
              {lenses.map((lens) => (
                <button
                  key={lens.id}
                  className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors text-2xl"
                >
                  {lens.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="flex items-center justify-between mb-6">
          <button className="p-3">
            <Grid3x3 className="text-white" size={24} />
          </button>
          
          {/* Record Button */}
          <button
            onMouseDown={() => setIsRecording(true)}
            onMouseUp={() => setIsRecording(false)}
            onTouchStart={() => setIsRecording(true)}
            onTouchEnd={() => setIsRecording(false)}
            className={cn(
              "w-20 h-20 rounded-full border-4 transition-all duration-200",
              isRecording 
                ? "bg-red-500 border-red-300 scale-110" 
                : "bg-white border-white hover:scale-105"
            )}
          />
          
          <button className="p-3">
            <Timer className="text-white" size={24} />
          </button>
        </div>

        {/* Quick Actions */}
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors">
            Memories
          </button>
          <button className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors">
            Spotlight
          </button>
        </div>
      </div>

      {/* Send Panel (appears after capture) */}
      {isRecording && (
        <div className="absolute bottom-24 left-4 right-4 z-20">
          <div className="bg-white rounded-2xl p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-200 rounded-lg" />
                <div>
                  <p className="font-medium">Send to</p>
                  <p className="text-sm text-gray-500">Choose friends</p>
                </div>
              </div>
              <button className="p-2 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors">
                <Send className="text-black" size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}