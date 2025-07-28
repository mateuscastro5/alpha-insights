import React from 'react';

interface NavigationMenuProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const NavigationMenu = ({ 
  activeTab = 'Dashboard', 
  onTabChange 
}: NavigationMenuProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', active: true },
    { id: 'squads', label: 'Squads', active: false },
    { id: 'developers', label: 'Developers', active: false },
    { id: 'analytics', label: 'Analytics', active: false },
    { id: 'projects', label: 'Projects', active: false },
  ];

  return (
    <nav className="flex items-center gap-6" style={{ WebkitAppRegion: 'no-drag' }}>
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onTabChange?.(item.id)}
          className={`text-sm font-medium px-3 py-2 rounded-lg transition-all ${
            item.id === activeTab.toLowerCase()
              ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20'
              : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default NavigationMenu;
