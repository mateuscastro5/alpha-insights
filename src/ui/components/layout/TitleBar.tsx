import React, { useEffect, useState } from 'react';
import AlphaLogo from '@assets/AlphaLogo.png';

const TitleBar: React.FC = () => {
  const [isMaximized, setIsMaximized] = useState(false);

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

  return (
    <div 
      className="h-16 bg-gradient-to-r from-[#13151b] to-[#1a1c23] border-b border-slate-700/50 flex items-center justify-between px-6 select-none shadow-lg"
      style={{ 
        WebkitAppRegion: 'drag'
      }}
    >
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <img src={AlphaLogo} alt="Alpha Insights" className="w-8 h-8" />
          <span className="text-white text-lg font-bold">ALPHA</span>
        </div>

        <nav className="flex items-center gap-6" style={{ WebkitAppRegion: 'no-drag' }}>
          <button className="text-blue-400 text-sm font-medium px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-all">
            Dashboard
          </button>
          <button className="text-gray-400 text-sm font-medium px-3 py-2 rounded-lg hover:text-white hover:bg-gray-700/30 transition-all">
            Squads
          </button>
          <button className="text-gray-400 text-sm font-medium px-3 py-2 rounded-lg hover:text-white hover:bg-gray-700/30 transition-all">
            Developers
          </button>
          <button className="text-gray-400 text-sm font-medium px-3 py-2 rounded-lg hover:text-white hover:bg-gray-700/30 transition-all">
            Analytics
          </button>
          <button className="text-gray-400 text-sm font-medium px-3 py-2 rounded-lg hover:text-white hover:bg-gray-700/30 transition-all">
            Projects
          </button>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative" style={{ WebkitAppRegion: 'no-drag' }}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Pesquisar desenvolvedores, projetos, métricas..."
            className="w-80 pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
          />
        </div>

        <div className="flex items-center gap-3" style={{ WebkitAppRegion: 'no-drag' }}>
          <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/30 rounded-lg transition-all">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">MT</span>
            </div>
            <span className="text-gray-300 text-sm font-medium">mateusfa</span>
          </div>
        </div>

        <div className="flex ml-4" style={{ WebkitAppRegion: 'no-drag' }}>
          <button 
            className="w-12 h-8 hover:bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors rounded-md"
            onClick={handleMinimize}
            title="Minimizar"
          >
            <span className="text-sm">−</span>
          </button>
          
          <button 
            className="w-12 h-8 hover:bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors rounded-md"
            onClick={handleMaximize}
            title={isMaximized ? "Restaurar" : "Maximizar"}
          >
            <span className="text-sm">{isMaximized ? "❐" : "□"}</span>
          </button>
          
          <button 
            className="w-12 h-8 hover:bg-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors rounded-md"
            onClick={handleClose}
            title="Fechar"
          >
            <span className="text-sm">×</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
