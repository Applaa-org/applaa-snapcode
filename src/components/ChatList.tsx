import { Chat } from '@/data/chats';
import { cn } from '@/lib/utils';

interface ChatListProps {
  chats: Chat[];
  onChatClick: (chat: Chat) => void;
}

export default function ChatList({ chats, onChatClick }: ChatListProps) {
  return (
    <div className="space-y-1">
      {chats.map((chat) => (
        <button
          key={chat.id}
          onClick={() => onChatClick(chat)}
          className="w-full p-4 hover:bg-gray-50 transition-colors flex items-center space-x-3"
        >
          <div className="relative">
            <img 
              src={chat.avatar} 
              alt={chat.username}
              className="w-12 h-12 rounded-full"
            />
            {chat.isTyping && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            )}
          </div>
          
          <div className="flex-1 text-left">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-900">{chat.username}</h3>
              <span className="text-xs text-gray-500">{chat.timestamp}</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 truncate">
                {chat.isTyping ? 'typing...' : chat.lastMessage}
              </p>
              {chat.unread > 0 && (
                <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-0.5 min-w-[20px]">
                  {chat.unread}
                </span>
              )}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}