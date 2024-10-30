import React, { useState } from 'react';
import { Smile, Meh, Frown, Sun, Cloud, CloudRain, Wind } from 'lucide-react';

interface MoodTrackerProps {
  theme: string;
}

const MoodTracker: React.FC<MoodTrackerProps> = ({ theme }) => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [note, setNote] = useState('');
  const [moodHistory, setMoodHistory] = useState<Array<{ mood: string; note: string; date: string }>>([]);

  const moods = [
    { icon: Smile, label: 'Great', color: 'text-green-500' },
    { icon: Meh, label: 'Okay', color: 'text-yellow-500' },
    { icon: Frown, label: 'Not Good', color: 'text-red-500' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMood) {
      setMoodHistory([
        { mood: selectedMood, note, date: new Date().toLocaleDateString() },
        ...moodHistory,
      ]);
      setSelectedMood(null);
      setNote('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className={`p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-2xl font-bold mb-6">How are you feeling today?</h2>
        
        <div className="flex justify-center space-x-8 mb-8">
          {moods.map(({ icon: Icon, label, color }) => (
            <button
              key={label}
              onClick={() => setSelectedMood(label)}
              className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                selectedMood === label
                  ? 'bg-purple-100 scale-110'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Icon className={`h-10 w-10 ${color}`} />
              <span className="mt-2 text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Add a note (optional)</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className={`w-full p-3 rounded-lg border ${
                theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
              }`}
              rows={3}
              placeholder="How are you feeling today? What's on your mind?"
            />
          </div>
          
          <button
            type="submit"
            disabled={!selectedMood}
            className={`w-full py-3 px-4 rounded-lg font-medium ${
              selectedMood
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Save Entry
          </button>
        </form>
      </div>

      {moodHistory.length > 0 && (
        <div className={`mt-8 p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-xl font-bold mb-4">Mood History</h3>
          <div className="space-y-4">
            {moodHistory.map((entry, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{entry.mood}</span>
                  <span className="text-sm text-gray-500">{entry.date}</span>
                </div>
                {entry.note && <p className="text-sm">{entry.note}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MoodTracker;