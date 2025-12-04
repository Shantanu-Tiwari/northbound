import React from 'react';
import { Share2, Instagram, Linkedin, Twitter, Facebook, Globe } from 'lucide-react';

const MultiChannel: React.FC = () => {
  return (
    <section className="py-24 border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 inline-block">Channels</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">One workspace for all your ad platforms.</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
            Connect Meta, Google, LinkedIn, TikTok, X, and more — without logging into each one separately.
        </p>

        {/* Connection Graphic */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          
          {/* Source Node */}
          <div className="z-10 bg-black text-white px-6 py-3 rounded-full font-bold shadow-xl shadow-black/10 flex items-center gap-2">
            <Share2 size={18} />
            Your Campaign
          </div>

          {/* Lines (Desktop) */}
          <div className="hidden md:flex flex-1 h-[2px] bg-gradient-to-r from-gray-200 to-gray-300 w-32 max-w-[100px] lg:max-w-[200px]"></div>

          {/* Platforms Grid */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 max-w-3xl">
              {[
                  { name: 'Meta', icon: Facebook, status: 'Synced' },
                  { name: 'Google', icon: Globe, status: 'Synced' },
                  { name: 'Instagram', icon: Instagram, status: 'Synced' },
                  { name: 'LinkedIn', icon: Linkedin, status: 'Paused' },
                  { name: 'X / Twitter', icon: Twitter, status: 'Synced' },
              ].map((p, i) => (
                  <div 
                    key={i}
                    className="group relative flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-full hover:border-gray-400 transition-all hover:-translate-y-1 cursor-default shadow-sm"
                  >
                      <p.icon size={16} className="text-gray-700" />
                      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{p.name}</span>
                      
                      {/* Status Dot */}
                      <span className={`w-1.5 h-1.5 rounded-full ${p.status === 'Synced' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                      
                      {/* Tooltip on Hover */}
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bottom-full left-1/2 -translate-x-1/2 mb-3 bg-gray-900 text-white text-xs px-3 py-1.5 rounded shadow-lg whitespace-nowrap pointer-events-none z-20">
                          <div className="font-bold mb-0.5">{p.status}</div>
                          <div className="text-gray-300">ROAS: {(Math.random() * 2 + 2).toFixed(1)}x</div>
                          {/* Arrow */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                  </div>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MultiChannel;