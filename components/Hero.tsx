
import React from 'react';
import { Play, Activity, Zap } from 'lucide-react';
import Button from './Button';

interface HeroProps {
  onGetStarted?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-xs font-medium w-fit mx-auto lg:mx-0">
              Northbound · From concept to campaign in minutes
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-gray-900">
              Create, launch, and optimize ads <span className="text-gray-400">without leaving one dashboard.</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Draft high-performing ads with AI, publish to multiple platforms in one click, and see real-time performance in a single view.
            </p>
            
            <div className="flex flex-col items-center lg:items-start mt-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start">
                <Button variant="primary" size="lg" onClick={onGetStarted}>
                  Get early access
                </Button>
                <Button variant="ghost" size="lg" className="gap-2">
                  <Play size={16} fill="currentColor" /> Watch 2-min demo
                </Button>
              </div>
              <span className="text-[11px] text-gray-400 mt-3">No credit card required. 14-day trial.</span>
            </div>
          </div>

          {/* Right: Mock UI */}
          <div className="relative z-10 lg:pl-10">
            {/* Main Panel */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-2xl shadow-gray-200/50 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50/50">
                <div className="flex gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                  </div>
                </div>
                <div className="flex gap-6 text-[11px] font-medium text-gray-400">
                  <span className="text-gray-900">Create</span>
                  <span>Publish</span>
                  <span>Analytics</span>
                </div>
                <div className="w-4 h-4 rounded-full bg-gray-200"></div>
              </div>

              {/* Body */}
              <div className="p-6 grid grid-cols-12 gap-6 bg-white">
                
                {/* Ad Preview (Left 7 cols) */}
                <div className="col-span-12 sm:col-span-7 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Preview</h3>
                    <span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">Instagram Story</span>
                  </div>
                  
                  {/* Fake Ad Card */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-3 shadow-sm">
                    <div className="w-full h-32 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-md flex items-center justify-center border border-gray-100">
                       <Zap className="text-blue-500 opacity-80" size={32} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Boost your workflow speed by 10x</h4>
                      <p className="text-[10px] text-gray-500 mt-1">Stop switching between tabs. Automate your campaigns today.</p>
                    </div>
                    <button className="w-full py-2 bg-blue-600 rounded text-xs font-medium text-white mt-1 hover:bg-blue-700">Sign Up</button>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 mt-2">
                     <div className="bg-gray-50 p-2 rounded border border-gray-100">
                        <p className="text-[9px] text-gray-500">Est. CTR</p>
                        <p className="text-xs font-bold text-green-600">1.8%</p>
                     </div>
                     <div className="bg-gray-50 p-2 rounded border border-gray-100">
                        <p className="text-[9px] text-gray-500">Budget</p>
                        <p className="text-xs font-bold text-gray-900">$50/d</p>
                     </div>
                     <div className="bg-gray-50 p-2 rounded border border-gray-100">
                        <p className="text-[9px] text-gray-500">Reach</p>
                        <p className="text-xs font-bold text-gray-900">12k</p>
                     </div>
                  </div>
                </div>

                {/* Platform Toggles (Right 5 cols) */}
                <div className="col-span-12 sm:col-span-5 border-l border-gray-200 pl-6 flex flex-col gap-3">
                   <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-1">Channels</h3>
                   
                   {[
                     { name: 'Meta Ads', active: true },
                     { name: 'Google Ads', active: true },
                     { name: 'LinkedIn', active: false },
                     { name: 'Twitter (X)', active: true },
                   ].map((platform, idx) => (
                     <div key={idx} className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-1.5 rounded -mx-1.5 transition-colors">
                        <div className="flex items-center gap-2">
                           <div className={`w-2 h-2 rounded-full ${platform.active ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                           <span className={`text-xs ${platform.active ? 'text-gray-900' : 'text-gray-400'} group-hover:text-gray-900 transition-colors`}>{platform.name}</span>
                        </div>
                        <div className={`w-8 h-4 rounded-full p-0.5 flex ${platform.active ? 'bg-black justify-end' : 'bg-gray-200 justify-start'}`}>
                          <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
                        </div>
                     </div>
                   ))}
                   
                   <div className="mt-auto pt-4 border-t border-gray-200">
                     <div className="flex items-center gap-2 text-[10px] text-gray-400">
                       <Activity size={12} />
                       <span>Real-time sync active</span>
                     </div>
                   </div>
                </div>

              </div>
            </div>
            
            {/* Decorative background elements behind mock */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-purple-100 blur-[80px]"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
