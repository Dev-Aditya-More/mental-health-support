import React, { useState } from 'react';
import { MessageCircle, Heart, Share2, Flag } from 'lucide-react';

interface CommunityProps {
  theme: string;
}

const Community: React.FC<CommunityProps> = ({ theme }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Sarah M.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      content: 'Today was tough, but I am proud of myself for practicing self-care and meditation. Small steps matter! 🌱',
      likes: 24,
      comments: 8,
      timeAgo: '2h ago',
    },
    {
      id: 2,
      author: 'Michael R.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      content: 'Found a great therapist after months of searching. Do not give up on finding the right support for you! 💪',
      likes: 32,
      comments: 12,
      timeAgo: '4h ago',
    },
  ]);

  const [newPost, setNewPost] = useState('');

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: 'You',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
        content: newPost,
        likes: 0,
        comments: 0,
        timeAgo: 'Just now',
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className={`p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-2xl font-bold mb-6">Community Support</h2>
        
        <form onSubmit={handleSubmitPost} className="mb-8">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your thoughts or experience..."
            className={`w-full p-4 rounded-lg border ${
              theme === 'dark'
                ? 'bg-gray-700 border-gray-600'
                : 'bg-white border-gray-300'
            }`}
            rows={3}
          />
          <div className="mt-3 flex justify-end">
            <button
              type="submit"
              disabled={!newPost.trim()}
              className={`px-4 py-2 rounded-lg font-medium ${
                newPost.trim()
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Post
            </button>
          </div>
        </form>

        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`p-4 rounded-lg border ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h3 className="font-medium">{post.author}</h3>
                  <p className="text-sm text-gray-500">{post.timeAgo}</p>
                </div>
              </div>
              
              <p className="mb-4">{post.content}</p>
              
              <div className="flex items-center space-x-4 text-gray-500">
                <button className="flex items-center space-x-1 hover:text-purple-600">
                  <Heart className="h-5 w-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-purple-600">
                  <MessageCircle className="h-5 w-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-purple-600">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="flex items-center space-x-1 hover:text-red-600 ml-auto">
                  <Flag className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;