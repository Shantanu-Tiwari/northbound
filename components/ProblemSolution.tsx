import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Statement */}
          <div className="flex flex-col justify-center">
            <span className="text-blue-600 font-semibold text-sm mb-3 tracking-wide uppercase">Why this exists</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Ad creation shouldn’t mean <br className="hidden md:block"/> 20 tabs and 4 dashboards.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Marketing teams waste 40% of their week just copy-pasting assets between Meta, Google, and LinkedIn. It creates friction, errors, and creative burnout.
            </p>
          </div>

          {/* Right: Problem/Solution List */}
          <div className="flex flex-col gap-8 relative border-l border-gray-200 pl-8 py-4">
            
            {/* Item 1 */}
            <div className="group">
              <div className="mb-2 flex items-center gap-2">
                 <XCircle size={16} className="text-gray-400" />
                 <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">The Old Way</span>
              </div>
              <p className="text-gray-500 mb-3 pl-6 text-sm">Manually resizing images and rewriting copy for 5 different platforms.</p>
              
              <div className="mt-2 flex items-center gap-2">
                 <CheckCircle size={16} className="text-blue-600" />
                 <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">With Northbound</span>
              </div>
              <p className="text-gray-900 pl-6 text-base font-medium">One AI prompt generates optimized assets for every channel instantly.</p>
            </div>

            <div className="w-full h-px bg-gray-200" />

             {/* Item 2 */}
             <div className="group">
              <div className="mb-2 flex items-center gap-2">
                 <XCircle size={16} className="text-gray-400" />
                 <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">The Old Way</span>
              </div>
              <p className="text-gray-500 mb-3 pl-6 text-sm">Logging into separate ad managers to check spend and ROAS.</p>
              
              <div className="mt-2 flex items-center gap-2">
                 <CheckCircle size={16} className="text-blue-600" />
                 <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">With Northbound</span>
              </div>
              <p className="text-gray-900 pl-6 text-base font-medium">Real-time aggregated performance view across your entire stack.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;