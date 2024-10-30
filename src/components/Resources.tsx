import React from 'react';
import { Phone, Globe, BookOpen, Heart } from 'lucide-react';

interface ResourcesProps {
  theme: string;
}

const Resources: React.FC<ResourcesProps> = ({ theme }) => {
  const resources = [
    {
      title: 'Emergency Support',
      description: '24/7 Crisis Helpline',
      phone: '988',
      icon: Phone,
      color: 'bg-red-100 text-red-600',
    },
    {
      title: 'Online Therapy',
      description: 'Connect with licensed therapists',
      link: 'https://www.betterhelp.com',
      icon: Globe,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Self-Help Resources',
      description: 'Free mental health articles and guides',
      link: 'https://www.mind.org.uk',
      icon: BookOpen,
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Support Groups',
      description: 'Find local support groups',
      link: 'https://www.nami.org',
      icon: Heart,
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className={`p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-2xl font-bold mb-6">Mental Health Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-lg border ${
                  theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <div className="flex items-start">
                  <div className={`p-3 rounded-full ${resource.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {resource.description}
                    </p>
                    {resource.phone ? (
                      <a
                        href={`tel:${resource.phone}`}
                        className="inline-flex items-center text-purple-600 hover:text-purple-700"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        {resource.phone}
                      </a>
                    ) : (
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-600 hover:text-purple-700"
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-6 bg-purple-50 dark:bg-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Remember</h3>
          <p className="text-gray-600 dark:text-gray-300">
            If you're experiencing a mental health emergency, please don't hesitate to call 988 
            for immediate support. You're not alone, and help is always available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;