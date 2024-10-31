import React, { useState } from 'react';
import { Heart, Brain, Users, BookOpen, Moon, Sun, Menu, MessageCircle } from 'lucide-react';
import MoodTracker from './components/MoodTracker';
import Resources from './components/Resources';
import Community from './components/Community';
import ChatBot from './components/ChatBot';
import Navbar from './components/Navbar';

function App() {
  const [activeTab, setActiveTab] = useState('mood');
  const [theme, setTheme] = useState('light');
  const [showChat, setShowChat] = useState(false);

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

      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 p-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {showChat && (
        <div className="fixed bottom-24 right-6 w-96 z-50">
          <ChatBot theme={theme} />
        </div>
      )}
    </div>
  );
}

export default App;