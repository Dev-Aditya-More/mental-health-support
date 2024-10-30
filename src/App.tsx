import React, { useState } from 'react';
import { Heart, Brain, Users, BookOpen, Moon, Sun, Menu } from 'lucide-react';
import MoodTracker from './components/MoodTracker';
import Resources from './components/Resources';
import Community from './components/Community';
import Navbar from './components/Navbar';

function App() {
  const [activeTab, setActiveTab] = useState('mood');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'mood' && <MoodTracker theme={theme} />}
        {activeTab === 'resources' && <Resources theme={theme} />}
        {activeTab === 'community' && <Community theme={theme} />}
      </main>
    </div>
  );
}

export default App;