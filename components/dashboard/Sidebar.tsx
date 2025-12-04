
import React from 'react';
import { Home, PlusSquare, UploadCloud, BarChart2, Grid, Settings, User, HelpCircle, LogOut } from 'lucide-react';
import { DashboardView } from '../../types';

interface SidebarProps {
  activeView: DashboardView;
  onChangeView: (view: DashboardView) => void;
  onCreateClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onChangeView, onCreateClick }) => {
  const menuItems = [
    { id: 'overview' as const, label: 'Dashboard', icon: Home },
    { id: 'create' as const, label: 'Create Ad', icon: PlusSquare, action: onCreateClick },
    { id: 'publish' as const, label: 'Publish', icon: UploadCloud },
    { id: 'analytics' as const, label: 'Analytics', icon: BarChart2 },
    { id: 'assets' as const, label: 'Assets', icon: Grid },
    { id: 'settings' as const, label: 'Settings', icon: Settings },
  ];

  const footerItems = [
    { label: 'Account', icon: User },
    { label: 'Help', icon: HelpCircle },
    { label: 'Logout', icon: LogOut },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-[76px] hover:w-[240px] bg-white border-r border-gray-200 flex flex-col justify-between transition-all duration-300 z-50 group overflow-hidden shadow-sm">
      {/* Top Section */}
      <div>
        <div className="h-[72px] flex items-center justify-center group-hover:justify-start group-hover:px-6 transition-all border-b border-gray-100">
          {/* Logo */}
           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900 shrink-0">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
          </svg>
          <span className="ml-3 font-bold text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Northbound</span>
        </div>

        <nav className="flex flex-col gap-2 p-3 mt-4">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => item.action ? item.action() : onChangeView(item.id)}
              className={`flex items-center h-10 px-3 rounded-lg transition-all duration-200 group/item relative ${
                activeView === item.id 
                  ? 'bg-gray-100 text-gray-900' 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {activeView === item.id && (
                <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-blue-600 rounded-r-full" />
              )}
              <item.icon size={20} strokeWidth={1.5} className="shrink-0" />
              <span className="ml-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Footer Section */}
      <div className="p-3 border-t border-gray-100">
        {footerItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center h-10 px-3 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 w-full"
          >
            <item.icon size={20} strokeWidth={1.5} className="shrink-0" />
            <span className="ml-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
