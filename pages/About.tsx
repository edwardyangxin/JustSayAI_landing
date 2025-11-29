import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">About JustSayAI</h1>
        
        <div className="prose prose-lg prose-orange max-w-none text-gray-700">
          <p className="lead text-xl md:text-2xl text-gray-500 mb-8 font-light leading-relaxed">
            JustSayAI provides seed funding and a comprehensive technology stack for startups specifically focused on voice-first and conversational AI interfaces.
          </p>

          <figure className="my-10">
            <img 
              src="https://picsum.photos/seed/office-space/800/400" 
              alt="JustSayAI Headquarters" 
              className="w-full rounded-lg shadow-sm"
            />
            <figcaption className="text-sm text-gray-500 mt-2 text-center italic">
              Our campus in San Francisco, CA.
            </figcaption>
          </figure>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our Philosophy</h2>
          <p className="mb-6">
            We operate on a simple premise: <strong>Say it, see it.</strong> The barrier between human intent and software execution is too high. We are lowering that barrier by providing the best foundational models, edge infrastructure, and funding for entrepreneurs who share this vision.
          </p>
          <p className="mb-6">
            Since 2024, we have funded over 50 companies. Our alumni have gone on to build solutions for healthcare, education, logistics, and creative arts, all powered by our core "JustSay" engine.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What We Do</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Funding:</strong> We invest $500k in every startup for 7% equity.</li>
            <li><strong>Technology:</strong> Access to our proprietary JustSay API and compute cluster.</li>
            <li><strong>Community:</strong> Weekly dinners with experts in LLMs, TTS, and ASR.</li>
          </ul>

          <div className="flex flex-col md:flex-row gap-8 mt-16 p-8 bg-[#f6f6ef] rounded-lg border border-gray-200">
            <div className="md:w-1/3">
              <img 
                src="https://picsum.photos/seed/founder/300/300" 
                alt="Founder" 
                className="w-full h-auto rounded-md shadow-sm grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="md:w-2/3 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">A Note from Our Founder</h3>
              <blockquote className="text-gray-600 italic mb-4 border-l-4 border-[#f26522] pl-4">
                "The most powerful programming language is English. We are here to make sure the compiler works perfectly."
              </blockquote>
              <p className="text-sm font-semibold text-gray-900">— Sarah Chen, CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};