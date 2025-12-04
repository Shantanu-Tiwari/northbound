
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import SocialProof from './SocialProof';
import ProblemSolution from './ProblemSolution';
import HowItWorks from './HowItWorks';
import MultiChannel from './MultiChannel';
import Analytics from './Analytics';
import Personas from './Personas';
import TrustStrip from './TrustStrip';
import Pricing from './Pricing';
import Footer from './Footer';

interface LandingPageProps {
  onLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar onLogin={onLogin} />
      <main>
        <Hero onGetStarted={onLogin} />
        <SocialProof />
        <ProblemSolution />
        <HowItWorks />
        <MultiChannel />
        <Analytics />
        <Personas />
        <TrustStrip />
        <Pricing />
        
        {/* Final CTA Band */}
        <section className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900">
              Turn ad chaos into one calm dashboard.
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
              Join the early access list and be the first to launch AI-powered campaigns.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={onLogin} className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-transform transform hover:scale-105 shadow-lg shadow-black/20">
                Get early access
              </button>
              <button className="px-8 py-3 border border-gray-200 text-gray-900 font-medium rounded-full hover:bg-gray-50 transition-colors">
                Book a 15-min walkthrough
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
