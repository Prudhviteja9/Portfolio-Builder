'use client';

import { useState } from 'react';

interface BeforeAfterProps {
  before: {
    title: string;
    content: string;
  };
  after: {
    title: string;
    content: string;
  };
}

export default function BeforeAfter({ before, after }: BeforeAfterProps) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="space-y-4">
      {/* Toggle Switch */}
      <div className="flex items-center justify-center gap-4">
        <span className={`text-sm font-medium transition-colors ${!showAfter ? 'text-white' : 'text-white/50'}`}>
          Before
        </span>
        <button
          onClick={() => setShowAfter(!showAfter)}
          className="relative w-14 h-7 bg-white/10 rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
          role="switch"
          aria-checked={showAfter}
        >
          <div
            className={`absolute top-0.5 left-0.5 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-transform duration-300 shadow-lg ${
              showAfter ? 'translate-x-7' : 'translate-x-0'
            }`}
          />
        </button>
        <span className={`text-sm font-medium transition-colors ${showAfter ? 'text-white' : 'text-white/50'}`}>
          After
        </span>
      </div>

      {/* Content */}
      <div className="relative min-h-[200px]">
        <div
          className={`
            transition-all duration-500 ease-out
            ${!showAfter ? 'opacity-100 translate-x-0 static' : 'opacity-0 -translate-x-8 absolute inset-0 pointer-events-none'}
          `}
        >
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h4 className="text-lg font-semibold mb-3 text-red-400">{before.title}</h4>
            <p className="text-white/70 leading-relaxed">{before.content}</p>
          </div>
        </div>

        <div
          className={`
            transition-all duration-500 ease-out
            ${showAfter ? 'opacity-100 translate-x-0 static' : 'opacity-0 translate-x-8 absolute inset-0 pointer-events-none'}
          `}
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 backdrop-blur-sm">
            <h4 className="text-lg font-semibold mb-3 text-green-400">{after.title}</h4>
            <p className="text-white/90 leading-relaxed">{after.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
