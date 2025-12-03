import { useState } from 'react';
import { ArrowLeft, Send, Camera, Smile, Mic } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { mockChats, mockMessages } from '@/data/chats';
import ChatList from '@/components/ChatList';
import { cn } from '@/lib/utils';

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState(mockChats[0]);
  const [message, setMessage] = useState('');

  const handleChatClick = (chat: typeof mockChats[0]) => {
    setSelectedChat(chat);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Chat List Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Chats</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <ChatList chats={mockChats} onChatClick={handleChatClick} />
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-200 p-4 flex items-center space-x-3">
              <Link to="/" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeft className="text-gray-600" size={20} />
              </Link>
              <img 
                src={selectedChat.avatar} 
                alt={selectedChat.username}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{selectedChat.username}</h3>
                <p className="text-sm text-gray-500">
                  {selectedChat.isTyping ? 'typing...' : 'Active now'}
                </p>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Camera className="text-gray-600" size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {mockMessages
                .filter(msg => msg.chatId === selectedChat.id)
                .map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex",
                      msg.senderId === 'current-user' ? "justify-end" : "justify-start"
                    )}
                  >
                    <div className={cn(
                      "max-w-xs lg:max-w-md",
                      msg.senderId === 'current-user' ? "order-2" : "order-1"
                    )}>
                      {msg.mediaUrl ? (
                        <div className="bg-gray-200 rounded-lg overflow-hidden">
                          <img 
                            src={msg.mediaUrl} 
                            alt="Snap"
                            className="w-full h-48 object-cover"
                          />
                          {msg.expiresAt && (
                            <p className="text-xs text-gray-500 p-2">
                              ⏰ {msg.expiresAt}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className={cn(
                          "px-4 py-2 rounded-2xl",
                          msg.senderId === 'current-user'
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-900"
                        )}>
                          <p>{msg.content}</p>
                          <p className={cn(
                            "text-xs mt-1",
                            msg.senderId === 'current-user' ? "text-blue-100" : "text-gray-500"
                          )}>
                            {msg.timestamp}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>

            {/* Message Input */}
            <div className="bg-white border-t border-gray-200 p-4">
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Camera className="text-gray-600" size={20} />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Send a chat"
                  className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Smile className="text-gray-600" size={20} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Mic className="text-gray-600" size={20} />
                </button>
                <button 
                  onClick={handleSendMessage}
                  className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  <Send className="text-white" size={20} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-500">Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
}