import React from 'react';
import Button from './Button';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-gray-400 text-sm uppercase font-semibold tracking-wider">Pricing</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
          Simple plans that scale with your spend.
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
            Start free, then pay as your ad volume grows. No hidden percentage fees on your ad spend.
        </p>
        
        <div className="inline-block bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 mb-8">
            <span className="text-sm text-gray-900 font-medium">Early access · </span>
            <span className="text-sm text-gray-500">First 50 teams get 40% off for life</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg">
                View pricing details
            </Button>
            <Button variant="secondary" size="lg">
                Talk to us
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;