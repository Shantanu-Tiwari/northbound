import React from 'react';
import { ShieldCheck, Lock, FileCheck } from 'lucide-react';

const TrustStrip: React.FC = () => {
  return (
    <section className="bg-gray-50 border-y border-gray-200 py-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            
            <div className="shrink-0">
                <h3 className="font-semibold text-gray-900">Built to be safe for your brand.</h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 md:gap-10 text-sm text-gray-500 flex-1 justify-end">
                <div className="flex items-center gap-2">
                    <ShieldCheck size={18} className="text-blue-600" />
                    <span>We don't resell your data</span>
                </div>
                <div className="hidden sm:block w-px h-5 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                    <Lock size={18} className="text-blue-600" />
                    <span>OAuth-based only (No passwords)</span>
                </div>
                <div className="hidden sm:block w-px h-5 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                    <FileCheck size={18} className="text-blue-600" />
                    <span>SOC2-ready practices</span>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default TrustStrip;