
import React from 'react';
import { Search, Bell, Plus, ChevronDown } from 'lucide-react';

interface TopBarProps {
  onCreateClick: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onCreateClick }) => {
  return (
    <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40 shadow-sm">
      
      {/* Left: Workspace Selector */}
      <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded transition-colors border border-transparent hover:border-gray-200">
        <div className="w-5 h-5 bg-gradient-to-tr from-blue-600 to-purple-600 rounded flex items-center justify-center text-[10px] font-bold text-white">
          N
        </div>
        <span className="text-sm font-medium text-gray-900">Northbound HQ</span>
        <ChevronDown size={14} className="text-gray-400" />
      </div>

      {/* Middle: Search */}
      <div className="flex-1 max-w-xl mx-8 relative group">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors" />
        <input 
          type="text" 
          placeholder="Search campaigns, ads, assets..."
          className="w-full h-9 bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-12 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition-all"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
          <span className="text-[10px] bg-white text-gray-400 px-1.5 py-0.5 rounded border border-gray-200">⌘</span>
          <span className="text-[10px] bg-white text-gray-400 px-1.5 py-0.5 rounded border border-gray-200">K</span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-gray-900 transition-colors relative">
          <Bell size={18} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <button 
          onClick={onCreateClick}
          className="flex items-center gap-2 bg-black text-white text-sm font-medium px-3 py-1.5 rounded-full hover:bg-gray-800 transition-colors shadow-sm"
        >
          <Plus size={16} />
          <span>Create</span>
        </button>

        <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600 cursor-pointer hover:border-gray-300 transition-colors">
          JD
        </div>
      </div>

    </div>
  );
};

export default TopBar;
