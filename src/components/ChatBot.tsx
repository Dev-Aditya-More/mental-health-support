import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles } from 'lucide-react';

interface Message {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatBotProps {
  theme: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ theme }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hi! I'm here to listen and support you. How are you feeling today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    if (lowercaseMessage.includes('anxious') || lowercaseMessage.includes('anxiety')) {
      return "I hear that you're feeling anxious. Let's try a quick breathing exercise: Take a deep breath in for 4 counts, hold for 4, and exhale for 4. Would you like to try this together?";
    }
    
    if (lowercaseMessage.includes('sad') || lowercaseMessage.includes('depressed')) {
      return "I'm sorry you're feeling this way. Remember that it's okay to not be okay. Would you like to talk about what's troubling you, or would you prefer some suggestions for mood-lifting activities?";
    }
    
    if (lowercaseMessage.includes('help') || lowercaseMessage.includes('resources')) {
      return "I can help connect you with resources. We have crisis helplines (988), online therapy options, and self-help guides. What kind of support are you looking for?";
    }
    
    if (lowercaseMessage.includes('thank')) {
      return "You're welcome! Remember, seeking support is a sign of strength. Is there anything else you'd like to talk about?";
    }
    
    return "I'm here to listen and support you. Could you tell me more about what's on your mind?";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        content: generateBotResponse(input),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
      <div className={`rounded-lg shadow-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="p-4 border-b flex items-center space-x-2">
          <Bot className="h-6 w-6 text-purple-600" />
          <h2 className="text-lg font-semibold">Mental Health Support Assistant</h2>
        </div>

        <div className="h-[400px] overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-purple-600 text-white'
                    : theme === 'dark'
                    ? 'bg-gray-700'
                    : 'bg-gray-100'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center space-x-2 text-gray-500">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span className="text-sm">Assistant is typing...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className={`flex-1 p-2 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600'
                  : 'bg-white border-gray-300'
              }`}
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className={`p-2 rounded-lg ${
                input.trim()
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;