import { useState } from 'react';
import { ArrowLeft, Settings, QrCode, Trophy, Users, Eye, Camera } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { mockUsers } from '@/data/users';
import { cn } from '@/lib/utils';

export default function Profile() {
  const [activeTab, setActiveTab] = useState<'stories' | 'spotlight' | 'lenses'>('stories');
  const currentUser = mockUsers[0]; // Using first user as current user

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 p-4 pb-20">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="p-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/30 transition-colors">
            <ArrowLeft className="text-white" size={20} />
          </Link>
          <h1 className="text-xl font-bold text-white">Profile</h1>
          <button className="p-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/30 transition-colors">
            <Settings className="text-white" size={20} />
          </button>
        </div>

        {/* Profile Info */}
        <div className="text-center">
          <div className="relative inline-block mb-4">
            <img 
              src={currentUser.avatar} 
              alt={currentUser.username}
              className="w-24 h-24 rounded-full border-4 border-white"
            />
            <button className="absolute bottom-0 right-0 p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
              <Camera className="text-white" size={16} />
            </button>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-1">{currentUser.displayName}</h2>
          <p className="text-white/90 mb-4">@{currentUser.username}</p>
          
          <div className="flex justify-center space-x-6 text-white">
            <div className="text-center">
              <p className="text-2xl font-bold">{currentUser.snapScore.toLocaleString()}</p>
              <p className="text-sm text-white/80">Snap Score</p>
            </div>
            {currentUser.streak && (
              <div className="text-center">
                <p className="text-2xl font-bold">{currentUser.streak}</p>
                <p className="text-sm text-white/80">Day Streak</p>
              </div>
            )}
            <div className="text-center">
              <p className="text-2xl font-bold">42</p>
              <p className="text-sm text-white/80">Friends</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 -mt-10 mb-6">
        <div className="bg-white rounded-xl shadow-lg p-4">
          <div className="grid grid-cols-3 gap-4">
            <button className
<applaa-write path="src/pages/Profile.tsx" description="User profile page">
import { useState } from 'react';
import { ArrowLeft, Settings, QrCode, Trophy, Users, Eye, Camera } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { mockUsers } from '@/data/users';
import { cn } from '@/lib/utils';

export default function Profile() {
  const [activeTab, setActiveTab] = useState<'stories' | 'spotlight' | 'lenses'>('stories');
  const currentUser = mockUsers[0]; // Using first user as current user

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 p-4 pb-20">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="p-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/30 transition-colors">
            <ArrowLeft className="text-white" size={20} />
          </Link>
          <h1 className="text-xl font-bold text-white">Profile</h1>
          <button className="p-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/30 transition-colors">
            <Settings className="text-white" size={20} />
          </button>
        </div>

        {/* Profile Info */}
        <div className="text-center">
          <div className="relative inline-block mb-4">
            <img 
              src={currentUser.avatar} 
              alt={currentUser.username}
              className="w-24 h-24 rounded-full border-4 border-white"
            />
            <button className="absolute bottom-0 right-0 p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
              <Camera className="text-white" size={16} />
            </button>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-1">{currentUser.displayName}</h2>
          <p className="text-white/90 mb-4">@{currentUser.username}</p>
          
          <div className="flex justify-center space-x-6 text-white">
            <div className="text-center">
              <p className="text-2xl font-bold">{currentUser.snapScore.toLocaleString()}</p>
              <p className="text-sm text-white/80">Snap Score</p>
            </div>
            {currentUser.streak && (
              <div className="text-center">
                <p className="text-2xl font-bold">{currentUser.streak}</p>
                <p className="text-sm text-white/80">Day Streak</p>
              </div>
            )}
            <div className="text-center">
              <p className="text-2xl font-bold">42</p>
              <p className="text-sm text-white/80">Friends</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 -mt-10 mb-6">
        <div className="bg-white rounded-xl shadow-lg p-4">
          <div className="grid grid-cols-3 gap-4">
            <button className="flex flex-col items-center space-y-2 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <QrCode className="text-gray-700" size={24} />
              <span className="text-xs text-gray-600">My Code</span>
            </button>
            <button className="flex flex-col items-center space-y-2 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <Users className="text-gray-700" size={24} />
              <span className="text-xs text-gray-600">Add Friends</span>
            </button>
            <button className="flex flex-col items-center space-y-2 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <Trophy className="text-gray-700" size={24} />
              <span className="text-xs text-gray-600">Trophies</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="bg-white">
        <div className="flex border-b border-gray-200">
          {(['stories', 'spotlight', 'lenses'] as const).map((tab) => (
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
              {tab === 'stories' && 'My Stories'}
              {tab === 'spotlight' && 'Spotlight'}
              {tab === 'lenses' && 'Lenses'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === 'stories' && (
            <div className="space-y-4">
              <div className="text-center py-8">
                <Eye className="text-gray-400 mx-auto mb-2" size={48} />
                <p className="text-gray-500">No stories yet</p>
                <p className="text-sm text-gray-400 mt-1">Create your first story to see it here</p>
              </div>
            </div>
          )}

          {activeTab === 'spotlight' && (
            <div className="space-y-4">
              <div className="text-center py-8">
                <Trophy className="text-gray-400 mx-auto mb-2" size={48} />
                <p className="text-gray-500">No Spotlight posts yet</p>
                <p className="text-sm text-gray-400 mt-1">Share your best moments with everyone</p>
              </div>
            </div>
          )}

          {activeTab === 'lenses' && (
            <div className="space-y-4">
              <div className="text-center py-8">
                <Camera className="text-gray-400 mx-auto mb-2" size={48} />
                <p className="text-gray-500">No favorite lenses yet</p>
                <p className="text-sm text-gray-400 mt-1">Try lenses in the camera to save your favorites</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}