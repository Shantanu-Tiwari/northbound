import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, ArrowDown, Zap } from 'lucide-react';

const data = [
  { day: 'Mon', organic: 4000, ai: 4200 },
  { day: 'Tue', organic: 3000, ai: 4500 },
  { day: 'Wed', organic: 2000, ai: 5100 },
  { day: 'Thu', organic: 2780, ai: 5900 },
  { day: 'Fri', organic: 1890, ai: 6800 },
  { day: 'Sat', organic: 2390, ai: 7500 },
  { day: 'Sun', organic: 3490, ai: 8500 },
];

const Analytics: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Chart */}
          <div className="col-span-1 lg:col-span-7 relative">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl shadow-gray-200/50">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-gray-900 font-semibold">Campaign Performance</h3>
                    <div className="flex gap-4 text-xs">
                        <span className="flex items-center gap-1.5 text-gray-500"><span className="w-2 h-2 rounded-full bg-blue-600"></span> With Northbound</span>
                        <span className="flex items-center gap-1.5 text-gray-500"><span className="w-2 h-2 rounded-full bg-gray-300"></span> Previous</span>
                    </div>
                </div>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                        <XAxis dataKey="day" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#fff', borderColor: '#E5E7EB', color: '#111827', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                            itemStyle={{ color: '#111827' }}
                        />
                        <Line type="monotone" dataKey="organic" stroke="#D1D5DB" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="ai" stroke="#2563EB" strokeWidth={3} dot={{r: 4, strokeWidth: 2, fill: '#fff'}} activeDot={{ r: 6 }} />
                    </LineChart>
                    </ResponsiveContainer>
                </div>
                {/* Annotation Bubble */}
                <div className="absolute top-[45%] left-[45%] bg-blue-600 text-white text-[10px] px-2 py-1 rounded shadow-lg transform -translate-y-1/2 animate-bounce">
                    Optimization started
                </div>
            </div>
          </div>

          {/* Right: Metrics & Copy */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-8">
            <div>
                <span className="text-gray-400 text-sm uppercase font-semibold tracking-wider">Analytics</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">Know what’s working — and why.</h2>
                <div className="space-y-4">
                    {['Unified reporting across all platforms', 'AI-generated audience insights', 'Automatic budget reallocation'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                            <span className="text-gray-600">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="bg-green-100 p-2 rounded text-green-600">
                        <TrendingUp size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Click Through Rate</p>
                        <p className="text-lg font-bold text-gray-900">27% increase</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="bg-blue-100 p-2 rounded text-blue-600">
                        <ArrowDown size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Cost Per Acquisition</p>
                        <p className="text-lg font-bold text-gray-900">18% lower CPA</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="bg-purple-100 p-2 rounded text-purple-600">
                        <Zap size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Return on Ad Spend</p>
                        <p className="text-lg font-bold text-gray-900">2.4x average ROAS</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Analytics;