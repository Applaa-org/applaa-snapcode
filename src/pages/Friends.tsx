import { useState } from 'react';
import { ArrowLeft, UserPlus, Search, MoreVertical } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { mockUsers } from '@/data/users';
import { cn } from '@/lib/utils';

export default function Friends() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'online' | 'added'>('all');

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.displayName.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'online') {
      return matchesSearch && user.status === 'online';
    }
    if (activeTab === 'added') {
      return matchesSearch && user.snapScore > 10000;
    }
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Link to="/" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft className="text-gray-600" size={20} />
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Friends</h1>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <UserPlus className="text-gray-600" size={20} />
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search friends"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex">
          {(['all', 'online', 'added'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex-1 py-3 text-sm font-medium transition-colors",
                activeTab === tab
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {tab === 'all' && 'All Friends'}
              {tab === 'online' && 'Online'}
              {tab === 'added' && 'Best Friends'}
            </button>
          ))}
        </div>
      </div>

      {/* Friends List */}
      <div className="p-4 space-y-2">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg p-4 flex items-center space-x-3 hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img 
                src={user.avatar} 
                alt={user.username}
                className="w-12 h-12 rounded-full"
              />
              <div className={cn(
                "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white",
                user.status === 'online' ? "bg-green-500" : 
                user.status === 'away' ? "bg-yellow-500" : "bg-gray-400"
              )} />
            </div>
            
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{user.displayName}</h3>
              <p className="text-sm text-gray-500">@{user.username}</p>
              <div className="flex items-center space-x-4 mt-1">
                <span className="text-xs text-gray-500">
                  🔥 {user.snapScore.toLocaleString()}
                </span>
                {user.streak && (
                  <span className="text-xs text-orange-500">
                    🔥 {user.streak} day streak
                  </span>
                )}
                {user.lastSeen && (
                  <span className="text-xs text-gray-500">
                    {user.lastSeen}
                  </span>
                )}
              </div>
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical className="text-gray-600" size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}