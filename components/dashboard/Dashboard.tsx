
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Overview from './Overview';
import CreateAdSlideOver from './CreateAdSlideOver';
import { DashboardView, Campaign } from '../../types';

const Dashboard: React.FC = () => {
  const [activeView, setActiveView] = useState<DashboardView>('overview');
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  // Global Campaign State
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    { id: '1', name: 'Q3 SaaS Launch', status: 'Live', platforms: ['meta', 'google', 'twitter'], spend: '$450', ctr: '1.2%', cpa: '$18.50', roas: '2.4x', lastActive: '2h ago' },
    { id: '2', name: 'Retargeting - High Intent', status: 'Live', platforms: ['meta', 'linkedin'], spend: '$210', ctr: '0.8%', cpa: '$42.00', roas: '3.1x', lastActive: '5h ago' },
    { id: '3', name: 'Competitor Keywords', status: 'Paused', platforms: ['google'], spend: '$0', ctr: '-', cpa: '-', roas: '-', lastActive: '2d ago' },
  ]);

  const handlePublish = (newCampaign: Campaign) => {
    // Add new campaign to the top of the list
    setCampaigns(prev => [newCampaign, ...prev]);
    setActiveView('overview');
  };

  // Placeholder components for other views
  const PlaceholderView = ({ title }: { title: string }) => (
    <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="text-center text-gray-500">
            <h2 className="text-xl font-medium text-gray-900 mb-2">{title}</h2>
            <p>This module is currently under development.</p>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex">
      {/* Sidebar */}
      <Sidebar 
        activeView={activeView} 
        onChangeView={setActiveView}
        onCreateClick={() => setIsCreateOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1 ml-[76px] flex flex-col min-w-0">
        <TopBar onCreateClick={() => setIsCreateOpen(true)} />
        
        <main className="flex-1 overflow-y-auto bg-gray-50">
          {activeView === 'overview' && <Overview campaigns={campaigns} />}
          {activeView === 'publish' && <PlaceholderView title="Publish & Connect" />}
          {activeView === 'analytics' && <PlaceholderView title="Deep Dive Analytics" />}
          {activeView === 'assets' && <PlaceholderView title="Asset Library" />}
          {activeView === 'settings' && <PlaceholderView title="Workspace Settings" />}
        </main>
      </div>

      {/* Slide Over */}
      <CreateAdSlideOver 
        isOpen={isCreateOpen} 
        onClose={() => setIsCreateOpen(false)} 
        onPublish={handlePublish}
      />
    </div>
  );
};

export default Dashboard;
