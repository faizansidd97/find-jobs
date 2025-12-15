import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Fixed on desktop if needed, currently scrolling with page */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          </div>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <Dashboard />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;