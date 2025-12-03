import { Story } from '@/data/stories';
import { cn } from '@/lib/utils';

interface StoryCardProps {
  story: Story;
  onClick: () => void;
}

export default function StoryCard({ story, onClick }: StoryCardProps) {
  return (
    <button 
      onClick={onClick}
      className="relative flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
    >
      <div className={cn(
        "relative p-0.5 rounded-full",
        story.viewed 
          ? "bg-gray-300" 
          : "bg-gradient-to-tr from-yellow-400 to-pink-500"
      )}>
        <div className="bg-white p-0.5 rounded-full">
          <img 
            src={story.avatar} 
            alt={story.username}
            className="w-16 h-16 rounded-full"
          />
        </div>
      </div>
      <span className="text-xs text-gray-700 max-w-[60px] truncate">
        {story.username}
      </span>
      {!story.viewed && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full" />
      )}
    </button>
  );
}