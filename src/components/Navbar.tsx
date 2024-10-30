import React from 'react';
import { Heart, Brain, Users, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, activeTab, setActiveTab }) => {
  return (
    <nav className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold">MindfulSpace</span>
            </div>
            
            <div className="hidden md:flex space-x-4">
              <button
                onClick={() => setActiveTab('mood')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'mood'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-purple-50'
                }`}
              >
                <Heart className="inline-block mr-1 h-4 w-4" />
                Mood Tracker
              </button>
              
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'resources'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-purple-50'
                }`}
              >
                <Brain className="inline-block mr-1 h-4 w-4" />
                Resources
              </button>
              
              <button
                onClick={() => setActiveTab('community')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'community'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-purple-50'
                }`}
              >
                <Users className="inline-block mr-1 h-4 w-4" />
                Community
              </button>
            </div>
          </div>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;