import React, { useState } from 'react';
import { Check, User, Briefcase, Building2 } from 'lucide-react';
import { PersonaContent } from '../types';

const Personas: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'founders' | 'marketers' | 'agencies'>('founders');

  const content: Record<string, PersonaContent> = {
    founders: {
      id: 'founders',
      title: 'For Founders',
      scenario: 'Ship professional campaigns without hiring a full-time media buyer.',
      bullets: [
        'Guided prompts tailored for non-marketers',
        'Suggested budgets and channels based on industry',
        'Simple dashboards, no complex spreadsheets'
      ]
    },
    marketers: {
      id: 'marketers',
      title: 'For Growth Marketers',
      scenario: 'Scale your experiments and find winning creatives 10x faster.',
      bullets: [
        'A/B test hundreds of variations instantly',
        'Deep funnel analytics integration',
        'Automated rule-based budget scaling'
      ]
    },
    agencies: {
      id: 'agencies',
      title: 'For Agencies',
      scenario: 'Manage 50+ client accounts from a single master view.',
      bullets: [
        'Client-specific workspaces and billing',
        'White-label reporting exports',
        'Team collaboration and approval workflows'
      ]
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Built for the people actually running campaigns.</h2>
            <p className="text-gray-500">Powerful enough for pros, simple enough for founders.</p>
        </div>

        {/* Toggle Pills */}
        <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
                {[
                    { id: 'founders', label: 'Founders', icon: User },
                    { id: 'marketers', label: 'Marketers', icon: Briefcase },
                    { id: 'agencies', label: 'Agencies', icon: Building2 }
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                            activeTab === tab.id 
                            ? 'bg-white text-black shadow-md' 
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                    >
                        <tab.icon size={16} />
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>

        {/* Content Panel */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12 transition-all duration-300 min-h-[300px] flex items-center shadow-lg shadow-gray-200/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                
                <div className="animate-fadeIn">
                    <span className="text-blue-600 font-bold text-sm mb-2 block">{content[activeTab].title}</span>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                        {content[activeTab].scenario}
                    </h3>
                    <ul className="space-y-4">
                        {content[activeTab].bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-600">
                                <div className="mt-1 bg-white border border-gray-200 rounded-full p-1 shadow-sm">
                                    <Check size={12} className="text-black" />
                                </div>
                                {bullet}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative h-full min-h-[200px] bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-center items-center shadow-sm">
                    {/* Abstract Representation of the dashboard for this persona */}
                    {activeTab === 'founders' && (
                        <div className="text-center space-y-2">
                            <div className="text-4xl">🚀</div>
                            <p className="text-gray-900 font-medium">Launch Mode</p>
                            <div className="h-2 w-32 bg-green-500 rounded mx-auto"></div>
                        </div>
                    )}
                    {activeTab === 'marketers' && (
                        <div className="grid grid-cols-2 gap-2 w-full max-w-[200px]">
                            <div className="bg-gray-100 h-16 rounded border border-blue-500/30"></div>
                            <div className="bg-gray-100 h-16 rounded"></div>
                            <div className="bg-gray-100 h-16 rounded"></div>
                            <div className="bg-gray-100 h-16 rounded"></div>
                        </div>
                    )}
                    {activeTab === 'agencies' && (
                        <div className="w-full space-y-3 px-8">
                            <div className="flex justify-between items-center bg-gray-50 p-3 rounded border border-gray-100">
                                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                <div className="text-xs text-gray-500">Client A</div>
                            </div>
                            <div className="flex justify-between items-center bg-gray-50 p-3 rounded border border-gray-100">
                                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                <div className="text-xs text-gray-500">Client B</div>
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

export default Personas;