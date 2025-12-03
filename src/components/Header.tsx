import { Link } from '@tanstack/react-router';
import { Camera, MessageCircle, Users, User, Search, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
              <Camera className="text-white" size={18} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              SnapFlow
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium flex items-center gap-1">
              <Camera size={18} />
              Camera
            </Link>
            <Link to="/chat" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium flex items-center gap-1">
              <MessageCircle size={18} />
              Chat
            </Link>
            <Link to="/stories" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium flex items-center gap-1">
              <Users size={18} />
              Stories
            </Link>
            <Link to="/friends" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium flex items-center gap-1">
              <Users size={18} />
              Friends
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium flex items-center gap-1">
              <User size={18} />
              Profile
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Search className="text-gray-600" size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="text-gray-600" size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}