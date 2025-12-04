
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/dashboard/Dashboard';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');

  return (
    <>
      {view === 'landing' ? (
        <LandingPage onLogin={() => setView('dashboard')} />
      ) : (
        <Dashboard />
      )}
    </>
  );
};

export default App;
