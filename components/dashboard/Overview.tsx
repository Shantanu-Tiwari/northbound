
import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { ArrowUp, ArrowDown, Facebook, Globe, Linkedin, Twitter, Smartphone } from 'lucide-react';
import { DashboardMetric, Campaign } from '../../types';

const data = [
  { day: 'Mon', spend: 400, baseline: 300 },
  { day: 'Tue', spend: 300, baseline: 320 },
  { day: 'Wed', spend: 550, baseline: 350 },
  { day: 'Thu', spend: 450, baseline: 380 },
  { day: 'Fri', spend: 700, baseline: 420 },
  { day: 'Sat', spend: 800, baseline: 450 },
  { day: 'Sun', spend: 600, baseline: 480 },
];

const metrics: DashboardMetric[] = [
    { label: 'Spend', value: '$1,240', change: '3%', trend: 'down' },
    { label: 'CTR', value: '2.4%', change: '4%', trend: 'up' },
    { label: 'Conversions', value: '98', change: '12%', trend: 'up' },
    { label: 'ROAS', value: '3.2x', change: '6%', trend: 'up' },
    { label: 'CPA', value: '$12.40', change: '1.8%', trend: 'down' },
];

const PlatformIcon: React.FC<{ name: string }> = ({ name }) => {
    const n = name.toLowerCase();
    if (n.includes('meta') || n.includes('facebook')) return <Facebook size={14} />;
    if (n.includes('google')) return <Globe size={14} />;
    if (n.includes('linkedin')) return <Linkedin size={14} />;
    if (n.includes('twitter') || n.includes('x')) return <Twitter size={14} />;
    return <Smartphone size={14} />;
};

interface OverviewProps {
  campaigns: Campaign[];
}

const Overview: React.FC<OverviewProps> = ({ campaigns }) => {
  return (
    <div className="p-6 md:p-8 space-y-8 max-w-[1600px] mx-auto animate-fadeIn">
      
      {/* Metrics Row */}
      <div className="flex flex-wrap gap-8 items-center justify-between border-b border-gray-200 pb-8">
         {metrics.map((metric) => (
             <div key={metric.label} className="flex flex-col gap-1 min-w-[120px]">
                 <span className="text-gray-500 text-sm font-medium">{metric.label}</span>
                 <div className="flex items-baseline gap-2">
                     <span className="text-2xl font-semibold text-gray-900">{metric.value}</span>
                     <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 ${
                         (metric.trend === 'up' && metric.label !== 'CPA') || (metric.trend === 'down' && metric.label === 'CPA')
                         ? 'bg-green-50 text-green-600' 
                         : 'bg-red-50 text-red-600'
                     }`}>
                         {metric.trend === 'up' ? <ArrowUp size={8} /> : <ArrowDown size={8} />}
                         {metric.change}
                     </span>
                 </div>
             </div>
         ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4">
                  <h3 className="text-gray-900 font-medium">Performance</h3>
                  <div className="flex bg-gray-100 rounded-lg p-0.5 border border-gray-200">
                      {['Spend', 'Revenue', 'ROAS'].map((t, i) => (
                          <button key={t} className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${i === 0 ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}>
                              {t}
                          </button>
                      ))}
                  </div>
              </div>
              <select className="bg-gray-50 border border-gray-200 text-gray-600 text-xs rounded-lg px-2 py-1.5 focus:outline-none hover:bg-gray-100 transition-colors">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
              </select>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                    <XAxis dataKey="day" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#FFF', borderColor: '#E5E7EB', color: '#111827', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}
                        itemStyle={{ color: '#111827' }}
                    />
                    <Line type="monotone" dataKey="baseline" stroke="#E5E7EB" strokeWidth={2} dot={false} strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="spend" stroke="#3B82F6" strokeWidth={2} dot={false} activeDot={{ r: 4, fill: '#3B82F6', stroke: '#fff', strokeWidth: 2 }} />
                </LineChart>
            </ResponsiveContainer>
          </div>
      </div>

      {/* Active Campaigns Table */}
      <div className="space-y-4">
          <h3 className="text-gray-900 font-medium">Active Campaigns</h3>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                  <thead>
                      <tr className="border-b border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50/50">
                          <th className="px-6 py-4">Campaign</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4">Platforms</th>
                          <th className="px-6 py-4 text-right">Spend</th>
                          <th className="px-6 py-4 text-right">CTR</th>
                          <th className="px-6 py-4 text-right">ROAS</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                      {campaigns.map((c, i) => (
                          <tr key={i} className="hover:bg-gray-50 transition-colors group cursor-pointer animate-fadeIn">
                              <td className="px-6 py-4 text-sm font-medium text-gray-900">{c.name}</td>
                              <td className="px-6 py-4">
                                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border ${
                                      c.status === 'Live' ? 'bg-green-50 text-green-700 border-green-200' : 
                                      c.status === 'Processing' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                      'bg-gray-100 text-gray-600 border-gray-200'
                                  }`}>
                                      <span className={`w-1 h-1 rounded-full mr-1.5 ${
                                          c.status === 'Live' ? 'bg-green-500' : 
                                          c.status === 'Processing' ? 'bg-blue-500 animate-pulse' :
                                          'bg-gray-400'
                                      }`}></span>
                                      {c.status}
                                  </span>
                              </td>
                              <td className="px-6 py-4">
                                  <div className="flex gap-2 text-gray-400">
                                      {c.platforms.map(p => <div key={p} className="text-gray-500"><PlatformIcon name={p} /></div>)}
                                  </div>
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-500 text-right font-mono">{c.spend}</td>
                              <td className="px-6 py-4 text-sm text-gray-500 text-right font-mono">{c.ctr}</td>
                              <td className="px-6 py-4 text-sm text-gray-900 text-right font-mono">{c.roas}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>

    </div>
  );
};

export default Overview;
