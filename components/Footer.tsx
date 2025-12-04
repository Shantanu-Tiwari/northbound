import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const CompassLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <CompassLogo />
                  <a href="#" className="text-xl font-bold tracking-tight text-gray-900">
                      Northbound
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                    The operating system for modern performance marketing teams.
                </p>
            </div>

            <div className="col-span-1">
                <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Overview</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Features</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Integrations</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
                </ul>
            </div>

            <div className="col-span-1">
                <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
                </ul>
            </div>

            <div className="col-span-1">
                <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Cookie Policy</a></li>
                </ul>
            </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Northbound. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
                <a href="https://x.com/Northbound_AI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Github size={20} /></a>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;