
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TitleBar from './components/layout/TitleBar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <TitleBar />
        
        <div className="flex-1 flex overflow-hidden">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
