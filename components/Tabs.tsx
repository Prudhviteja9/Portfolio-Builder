'use client';

import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export default function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex flex-wrap gap-2 mb-8 p-1 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex-1 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300
              ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }
            `}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`
              transition-all duration-500
              ${
                activeTab === tab.id
                  ? 'opacity-100 translate-y-0 static'
                  : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
              }
            `}
            role="tabpanel"
            aria-hidden={activeTab !== tab.id}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
