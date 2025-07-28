interface WindowControlsProps {
  isMaximized?: boolean;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
}

const WindowControls = ({
  isMaximized = false,
  onMinimize,
  onMaximize,
  onClose
}: WindowControlsProps) => {
  return (
    <div className="flex ml-4" style={{ WebkitAppRegion: 'no-drag' }}>
      <button 
        className="w-12 h-8 hover:bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors rounded-md"
        onClick={onMinimize}
        title="Minimizar"
      >
        <span className="text-sm">−</span>
      </button>
      
      <button 
        className="w-12 h-8 hover:bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors rounded-md"
        onClick={onMaximize}
        title={isMaximized ? "Restaurar" : "Maximizar"}
      >
        <span className="text-sm">{isMaximized ? "❐" : "□"}</span>
      </button>
      
      <button 
        className="w-12 h-8 hover:bg-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors rounded-md"
        onClick={onClose}
        title="Fechar"
      >
        <span className="text-sm">×</span>
      </button>
    </div>
  );
};

export default WindowControls;
