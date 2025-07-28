import React, { useEffect, useState } from 'react';

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
      className="h-8 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 flex items-center justify-between px-4 select-none"
      style={{ 
        WebkitAppRegion: 'drag' as any
      }}
    >
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
          <span className="text-white text-xs font-bold">α</span>
        </div>
        <span className="text-gray-300 text-sm font-medium">Alpha Insights</span>
      </div>

      <div 
        className="flex"
        style={{ 
          WebkitAppRegion: 'no-drag'
        }}
      >
        <button 
          className="w-12 h-8 hover:bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          onClick={handleMinimize}
          title="Minimizar"
        >
          <span className="text-sm">−</span>
        </button>
        
        <button 
          className="w-12 h-8 hover:bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          onClick={handleMaximize}
          title={isMaximized ? "Restaurar" : "Maximizar"}
        >
          <span className="text-sm">{isMaximized ? "❐" : "□"}</span>
        </button>
        
        <button 
          className="w-12 h-8 hover:bg-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          onClick={handleClose}
          title="Fechar"
        >
          <span className="text-sm">×</span>
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
