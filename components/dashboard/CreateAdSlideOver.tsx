
import React, { useState } from 'react';
import { X, Wand2, Check, Smartphone, Globe, Linkedin, Twitter, Facebook, Loader2 } from 'lucide-react';
import { generateAdVariations } from '../../services/ai';
import { AdVariation, Campaign } from '../../types';

interface CreateAdSlideOverProps {
  isOpen: boolean;
  onClose: () => void;
  onPublish: (campaign: Campaign) => void;
}

const CreateAdSlideOver: React.FC<CreateAdSlideOverProps> = ({ isOpen, onClose, onPublish }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("Promote our new AI feature for Q3 to tech founders in SF. Goal is trial signups.");
  const [objective, setObjective] = useState("Conversions");
  const [budget, setBudget] = useState("50");
  
  const [variations, setVariations] = useState<AdVariation[]>([]);
  const [selectedVariationIndex, setSelectedVariationIndex] = useState<number | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
        const result = await generateAdVariations(prompt, objective, budget);
        setVariations(result.variations);
        // Default select first one
        if (result.variations.length > 0) {
            setSelectedVariationIndex(0);
        }
        setStep(2);
    } catch (error) {
        console.error("Failed to generate", error);
    } finally {
        setLoading(false);
    }
  };

  const handlePublish = () => {
    // Simulate Publishing Delay
    setLoading(true);
    
    setTimeout(() => {
        const newCampaign: Campaign = {
            id: Math.random().toString(36).substr(2, 9),
            name: prompt.split(' ').slice(0, 4).join(' ') + '...', // Generate simple name from prompt
            status: 'Processing', // Initially processing, user will see it update
            platforms: ['meta', 'google', 'twitter'], // Mock platforms
            spend: '$0',
            ctr: '-',
            cpa: '-',
            roas: '-',
            lastActive: 'Just now'
        };

        onPublish(newCampaign);
        setLoading(false);
        onClose();
        
        // Reset form for next time
        setStep(1);
        setVariations([]);
        setSelectedVariationIndex(null);

        // Simulate Async Update to 'Live' status after a few seconds
        setTimeout(() => {
            // Visual effect simulated in UI
        }, 3000);

    }, 2000);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Slide-over Panel */}
      <div 
        className={`fixed inset-y-0 right-0 w-[560px] bg-white border-l border-gray-200 shadow-2xl z-50 transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="h-14 border-b border-gray-200 flex items-center justify-between px-6 bg-white">
          <h2 className="text-gray-900 font-medium">Create New Campaign</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-900 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-white">
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Campaign Prompt</label>
                <textarea 
                  className="w-full h-32 bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-900 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400 resize-none transition-all"
                  placeholder="Describe what you want to sell, your target audience, and your goal..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-700">Objective</label>
                   <select 
                     className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-900 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                     value={objective}
                     onChange={(e) => setObjective(e.target.value)}
                   >
                      <option>Conversions</option>
                      <option>Traffic</option>
                      <option>Brand Awareness</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-700">Budget (Daily)</label>
                   <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                      <input 
                        type="number" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-7 pr-3 py-2 text-gray-900 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                      />
                   </div>
                </div>
              </div>

              <div className="pt-4">
                <button 
                    onClick={handleGenerate}
                    disabled={loading || !prompt}
                    className="w-full h-10 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                    {loading ? (
                        <>
                           <Loader2 size={16} className="animate-spin" /> Generating...
                        </>
                    ) : (
                        <>
                            <Wand2 size={16} /> Generate Assets
                        </>
                    )}
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
             <div className="space-y-8 animate-fadeIn">
                <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-900 flex items-center justify-between">
                        Generated Variations
                        <span className="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">Powered by Gemini</span>
                    </h3>
                    <div className="space-y-3">
                        {variations.map((v, i) => (
                            <div 
                                key={i} 
                                onClick={() => setSelectedVariationIndex(i)}
                                className={`flex items-start gap-3 p-3 bg-white border rounded-lg cursor-pointer transition-all ${
                                    selectedVariationIndex === i 
                                    ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' 
                                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                 <div className={`w-4 h-4 rounded-full border flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                                     selectedVariationIndex === i ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white'
                                 }`}>
                                    {selectedVariationIndex === i && <Check size={10} className="text-white" />}
                                 </div>
                                 <div className="space-y-1">
                                    <p className="text-sm font-semibold text-gray-900">{v.headline}</p>
                                    <p className="text-xs text-gray-500 line-clamp-2">{v.body}</p>
                                 </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-900">Preview</h3>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                            <Facebook size={16} className="text-gray-500" />
                            <span className="text-xs text-gray-500">Meta Feed</span>
                        </div>
                        
                        {/* Selected Variation Preview */}
                        {selectedVariationIndex !== null && variations[selectedVariationIndex] && (
                            <div className="animate-fadeIn bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 flex items-center justify-center border border-gray-100">
                                     <span className="text-xs text-gray-400">AI Generated Image Placeholder</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-start">
                                        <p className="text-sm font-semibold text-gray-900">{variations[selectedVariationIndex].headline}</p>
                                    </div>
                                    <p className="text-xs text-gray-600">{variations[selectedVariationIndex].body}</p>
                                    <button className="mt-2 w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-xs font-bold text-white uppercase tracking-wide transition-colors">
                                        {variations[selectedVariationIndex].cta}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
             </div>
          )}
        </div>

        {/* Footer */}
        <div className="h-16 border-t border-gray-200 bg-white flex items-center justify-between px-6">
           <span className="text-xs text-gray-500 flex items-center gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div> Draft saved
           </span>
           <div className="flex gap-3">
              <button 
                onClick={() => setStep(1)} 
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                disabled={loading}
              >
                  {step === 2 ? 'Back' : 'Cancel'}
              </button>
              
              {step === 2 ? (
                  <button 
                    onClick={handlePublish}
                    disabled={loading}
                    className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm"
                   >
                     {loading ? <Loader2 size={16} className="animate-spin" /> : null}
                     {loading ? 'Publishing...' : 'Publish Campaign'}
                   </button>
              ) : (
                  <button 
                    onClick={handleGenerate}
                    disabled={loading || !prompt}
                    className="bg-black text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
                  >
                     Next
                  </button>
              )}
           </div>
        </div>
      </div>
    </>
  );
};

export default CreateAdSlideOver;
