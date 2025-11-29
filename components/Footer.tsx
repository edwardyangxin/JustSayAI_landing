import React from 'react';
import { Rocket, Twitter, Linkedin, Github, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 font-bold text-xl text-[#f26522] mb-4">
              <Rocket size={24} />
              <span>JustSayAI</span>
            </Link>
            <p className="text-sm text-gray-500 mb-4">
              Accelerating the future of artificial intelligence through innovation, education, and community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#f26522]"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#f26522]"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#f26522]"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#f26522]"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-base text-gray-500 hover:text-[#f26522]">About Us</Link></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-[#f26522]">Careers</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-[#f26522]">Press</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-[#f26522]">Contact</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-base text-gray-500 hover:text-[#f26522]">Blog</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-[#f26522]">Startup Library</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-[#f26522]">Documentation</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-[#f26522]">Community</a></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
             <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Stay Updated</h3>
             <p className="text-sm text-gray-500 mb-4">
               Get the latest AI insights and company updates.
             </p>
             <form className="flex flex-col sm:flex-row gap-2">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#f26522] focus:border-[#f26522] text-sm"
               />
               <button 
                 type="button"
                 className="w-full sm:w-auto px-4 py-2 bg-[#f26522] text-white rounded-md text-sm font-semibold hover:bg-[#d9531e] transition-colors"
               >
                 Subscribe
               </button>
             </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} JustSayAI, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};