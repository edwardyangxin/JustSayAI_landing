import React from 'react';
import { ArrowRight, PlayCircle, Zap, Globe, Users } from 'lucide-react';
import { VideoContent } from '../types';

const VIDEOS: VideoContent[] = [
  {
    id: '1',
    title: 'How to Build an AI Agent in 10 Minutes',
    thumbnail: 'https://picsum.photos/seed/ai-agent/400/225',
    views: '12K views',
    date: '2 days ago'
  },
  {
    id: '2',
    title: 'The Future of Generative Models',
    thumbnail: 'https://picsum.photos/seed/gen-models/400/225',
    views: '45K views',
    date: '1 week ago'
  },
  {
    id: '3',
    title: 'JustSayAI Launch Event Highlights',
    thumbnail: 'https://picsum.photos/seed/launch/400/225',
    views: '120K views',
    date: '1 month ago'
  }
];

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Make something people <span className="text-[#f26522]">just say</span>.
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            JustSayAI is the premier platform for building voice-first, intent-driven AI applications. We help founders turn natural language into deployed software.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-[#f26522] text-white rounded-md font-bold text-lg hover:bg-[#d9531e] transition-colors shadow-sm">
              Start Building
            </button>
            <button className="px-8 py-4 bg-gray-100 text-gray-900 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors border border-gray-200">
              Read the Docs
            </button>
          </div>
        </div>
      </section>

      {/* 2. Business Description */}
      <section className="py-20 bg-[#f6f6ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="text-[#f26522]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Deployment</h3>
              <p className="text-gray-600 leading-relaxed">
                From prompt to production in seconds. Our infrastructure handles the scaling, security, and compliance so you can focus on the logic.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="text-[#f26522]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Edge Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Your AI agents run on the edge, closest to your users. Minimal latency for voice and real-time interactions worldwide.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Users className="text-[#f26522]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community First</h3>
              <p className="text-gray-600 leading-relaxed">
                Join thousands of developers sharing prompts, patterns, and modules. The largest open library of intent-based components.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. YouTube Channel Product Section */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Learn with JustSayAI</h2>
              <p className="text-gray-600">Tutorials, deep dives, and founder stories on our YouTube channel.</p>
            </div>
            <a href="#" className="hidden sm:flex items-center font-semibold text-[#f26522] hover:text-[#d9531e]">
              View all videos <ArrowRight size={20} className="ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VIDEOS.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4 shadow-sm">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                    <PlayCircle className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" size={48} />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-[#f26522] transition-colors leading-tight">
                  {video.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{video.views}</span>
                  <span className="mx-2">•</span>
                  <span>{video.date}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 sm:hidden text-center">
            <a href="#" className="inline-flex items-center font-semibold text-[#f26522]">
              View all videos <ArrowRight size={20} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. Vision Section */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Democratizing Intelligence
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            We believe that in the next decade, software will not be written by hand, but spoken into existence. JustSayAI is building the foundation for a world where anyone with an idea can build a unicorn.
          </p>
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-500">
             <div className="px-8 py-3 bg-[#1a1a1a] rounded-full">
               <span className="font-medium tracking-wide">MISSION 2030</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};