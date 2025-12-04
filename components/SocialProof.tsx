import React from 'react';
import { Hexagon, Triangle, Circle, Square, Box } from 'lucide-react';

const SocialProof: React.FC = () => {
  const logos = [
    { name: "Acme Corp", icon: Hexagon },
    { name: "Vertex", icon: Triangle },
    { name: "GlobalSphere", icon: Circle },
    { name: "SquareOne", icon: Square },
    { name: "CubeSystems", icon: Box },
    { name: "Hexagon", icon: Hexagon }, // Repeat for scroll illusion
  ];

  return (
    <section className="py-8 border-b border-gray-100 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-gray-400 mb-6">
          Trusted by growth teams running campaigns at scale
        </p>
        
        {/* Logo Marquee Wrapper */}
        <div className="relative overflow-hidden w-full mask-gradient-light">
          <div className="flex gap-12 sm:gap-20 items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-500">
             {logos.map((Logo, idx) => (
               <div key={idx} className="flex items-center gap-2 select-none grayscale hover:grayscale-0 transition-all duration-300">
                 <Logo.icon className="w-6 h-6 text-black" strokeWidth={2.5} />
                 <span className="text-lg font-bold text-gray-900 tracking-tight">{Logo.name}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .mask-gradient-light {
          mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
        }
      `}</style>
    </section>
  );
};

export default SocialProof;