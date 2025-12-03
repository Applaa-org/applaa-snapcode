import { useState } from 'react';
import { ArrowLeft, Play, Pause, X } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { mockStories } from '@/data/stories';
import StoryCard from '@/components/StoryCard';
import { cn } from '@/lib/utils';

export default function Stories() {
  const [selectedStory, setSelectedStory] = useState<typeof mockStories[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleStoryClick = (story: typeof mockStories[0]) => {
    setSelectedStory(story);
    setIsPlaying(true);
  };

  const handleCloseStory = () => {
    setSelectedStory(null);
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <Link to="/" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="text-gray-600" size={20} />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Stories</h1>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {mockStories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              onClick={() => handleStoryClick(story)}
            />
          ))}
        </div>
      </div>

      {/* Story Viewer Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={handleCloseStory}
            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors z-10"
          >
            <X className="text-white" size={24} />
          </button>

          <div className="relative w-full h-full max-w-md max-h-[80vh]">
            {/* Progress Bar */}
            <div className="absolute top-4 left-4 right-4 z-10">
              <div className="bg-white/30 rounded-full h-1 overflow-hidden">
                <div 
                  className={cn(
                    "bg-white h-full transition-all duration-100",
                    isPlaying ? "w-1/2" : "w-1/2"
                  )}
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="relative w-full h-full">
              <img 
                src={selectedStory.mediaUrl} 
                alt="Story"
                className="w-full h-full object-contain"
              />
              
              {/* Story Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <div className="flex items-center space-x-3">
                  <img 
                    src={selectedStory.avatar} 
                    alt={selectedStory.username}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{selectedStory.username}</h3>
                    <p className="text-white/80 text-sm">{selectedStory.timestamp}</p>
                  </div>
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="text-white" size={20} />
                    ) : (
                      <Play className="text-white" size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}