import React, { useEffect, useState } from 'react';
import AlphaLogo from '@assets/AlphaLogo.png';
import NavigationMenu from './NavigationMenu';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import WindowControls from './WindowControls';

const TitleBar = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    if (window.electronAPI) {
      window.electronAPI.window.onMaximized(() => {
        setIsMaximized(true);
      });
      
      window.electronAPI.window.onUnmaximized(() => {
        setIsMaximized(false);
      });
    }
  }, []);

  const handleMinimize = async () => {
    if (window.electronAPI) {
      try {
        await window.electronAPI.window.minimize();
      } catch (error) {
        console.error('Error minimizing:', error);
      }
    }
  };

  const handleMaximize = async () => {
    if (window.electronAPI) {
      try {
        await window.electronAPI.window.maximize();
      } catch (error) {
        console.error('Error maximizing:', error);
      }
    }
  };

  const handleClose = async () => {
    if (window.electronAPI) {
      try {
        await window.electronAPI.window.close();
      } catch (error) {
        console.error('Error closing:', error);
      }
    }
  };

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // TODO: Implementar busca
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked');
    // TODO: Abrir configurações
  };

  return (
    <div 
      className="h-16 bg-gradient-to-r from-[#13151b] to-[#1a1c23] border-b border-slate-700/50 flex items-center justify-between px-6 select-none shadow-lg"
      style={{ WebkitAppRegion: 'drag' }}
    >
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <img src={AlphaLogo} alt="Alpha Insights" className="w-8 h-8" />
          <span className="text-white text-lg font-bold">ALPHA</span>
        </div>

        <NavigationMenu 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      <div className="flex items-center gap-4">
        <SearchBar onSearch={handleSearch} />
        
        <UserProfile onSettingsClick={handleSettingsClick} />

        <WindowControls
          isMaximized={isMaximized}
          onMinimize={handleMinimize}
          onMaximize={handleMaximize}
          onClose={handleClose}
        />
      </div>
    </div>
  );
};

export default TitleBar;
