import React, { useState } from 'react';
import { PenTool, Upload, Rocket, Wand2, BarChart2, Layers } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Describe your offer',
      description: 'Tell the AI what you’re selling, your target audience, and your primary goal.',
      icon: PenTool
    },
    {
      id: 2,
      title: 'Generate & refine',
      description: 'Get multi-variant headlines, creatives, and CTAs tailored to each channel.',
      icon: Wand2
    },
    {
      id: 3,
      title: 'Launch & track',
      description: 'Approve, push live, and see performance in a unified dashboard.',
      icon: Rocket
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">From idea to launch in minutes</h2>
          <p className="text-gray-500">Three simple steps to automate your ad operations.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Stepper */}
          <div className="flex flex-col justify-center gap-6">
            {steps.map((step) => (
              <div 
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                  activeStep === step.id 
                    ? 'bg-gray-50 border-gray-200 shadow-sm' 
                    : 'bg-transparent border-transparent hover:bg-gray-50'
                }`}
              >
                {/* Active Indicator Line */}
                {activeStep === step.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-black rounded-l-2xl" />
                )}
                
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl transition-colors ${
                      activeStep === step.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
                  }`}>
                      <step.icon size={24} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                        activeStep === step.id ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-900'
                    }`}>
                        {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Dynamic Preview */}
          <div className="relative h-[400px] sm:h-[500px] bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-full h-10 bg-white border-b border-gray-200 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
            </div>
            
            <div className="p-8 pt-16 h-full transition-opacity duration-300 ease-in-out">
                {activeStep === 1 && (
                    <div className="flex flex-col gap-4 animate-fadeIn">
                        <label className="text-sm font-medium text-gray-400">Campaign Prompt</label>
                        <div className="w-full h-32 bg-white border border-gray-200 rounded-lg p-4 text-gray-900 text-sm font-mono leading-6 shadow-sm">
                            I need a campaign for a new SaaS productivity tool for remote teams. <br/>
                            <span className="text-blue-600">Target Audience:</span> Project Managers, CTOs.<br/>
                            <span className="text-blue-600">Goal:</span> Free Trial Signups.
                            <span className="animate-pulse text-gray-400">|</span>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-black text-white text-sm px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors">
                                <Wand2 size={14} /> Generate Ads
                            </button>
                        </div>
                    </div>
                )}
                
                {activeStep === 2 && (
                    <div className="grid grid-cols-2 gap-4 animate-fadeIn">
                        <div className="col-span-2 text-center text-sm text-gray-400 mb-2">AI Generated Variations</div>
                        {/* Variation 1 */}
                        <div className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-500 cursor-pointer transition-colors shadow-sm">
                            <div className="w-full h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded mb-2"></div>
                            <div className="h-2 w-3/4 bg-gray-100 rounded mb-1"></div>
                            <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                        </div>
                        {/* Variation 2 */}
                        <div className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-500 cursor-pointer transition-colors shadow-sm">
                            <div className="w-full h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded mb-2"></div>
                            <div className="h-2 w-3/4 bg-gray-100 rounded mb-1"></div>
                            <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                        </div>
                        <div className="col-span-2 mt-4 flex justify-between items-center border-t border-gray-200 pt-4">
                            <span className="text-xs text-gray-500">4 variations generated</span>
                            <button className="text-blue-600 text-sm font-medium">Refine selection</button>
                        </div>
                    </div>
                )}

                {activeStep === 3 && (
                     <div className="animate-fadeIn flex flex-col items-center justify-center h-full pb-10">
                        <div className="relative w-40 h-40 mb-6">
                             <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                             <div className="absolute inset-0 border-4 border-t-blue-600 border-r-blue-600 border-b-transparent border-l-transparent rounded-full rotate-45"></div>
                             <div className="absolute inset-0 flex flex-col items-center justify-center">
                                 <span className="text-3xl font-bold text-gray-900">4.2x</span>
                                 <span className="text-xs text-gray-500">ROAS</span>
                             </div>
                        </div>
                        <div className="w-full max-w-xs space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Spend</span>
                                <span className="text-gray-900 font-mono">$1,204.00</span>
                            </div>
                            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-600 w-3/4"></div>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Conversions</span>
                                <span className="text-gray-900 font-mono">142</span>
                            </div>
                        </div>
                     </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;