'use client';

import { useState, useEffect } from 'react';

export default function PortfolioPreview() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div
      className={`
        group relative w-full max-w-2xl mx-auto
        ${!reducedMotion ? 'hover-tilt' : ''}
      `}
      style={{
        perspective: '1000px',
      }}
    >
      {/* Main Portfolio Container */}
      <div
        className={`
          relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6
          shadow-2xl shadow-purple-500/20
          ${!reducedMotion ? 'float transition-transform duration-500' : ''}
        `}
      >
        {/* Top Progress/Nav Bar */}
        <div className="mb-6">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full ${
                !reducedMotion ? 'shimmer-bar' : ''
              }`}
              style={{ width: '65%' }}
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left: Profile Card */}
          <div className="lg:col-span-2 space-y-4">
            {/* Avatar */}
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 border border-white/10 flex items-center justify-center overflow-hidden">
                {/* Simple avatar representation */}
                <svg className="w-12 h-12 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                {/* Online indicator */}
                <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black/50" />
              </div>
            </div>

            {/* Name & Role */}
            <div className="space-y-2">
              <div className="h-3 bg-gradient-to-r from-white/40 to-white/20 rounded-lg w-3/4" />
              <div className="h-2 bg-white/20 rounded w-1/2" />
            </div>

            {/* Stats/Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-purple-500/30" />
                <div className="h-2 bg-white/20 rounded flex-1" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-500/30" />
                <div className="h-2 bg-white/20 rounded flex-1" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-pink-500/30" />
                <div className="h-2 bg-white/20 rounded flex-1" />
              </div>
            </div>
          </div>

          {/* Right: Project Cards */}
          <div className="lg:col-span-3 space-y-3">
            {/* Project Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
              <div className="space-y-3">
                {/* Project thumbnail */}
                <div className="h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl relative overflow-hidden">
                  {/* Code pattern overlay */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="grid grid-cols-4 gap-1 p-2">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="h-1 bg-white/30 rounded"
                          style={{ width: `${Math.random() * 100}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Project title */}
                <div className="h-2.5 bg-white/30 rounded w-2/3" />
                {/* Project description lines */}
                <div className="space-y-1.5">
                  <div className="h-1.5 bg-white/20 rounded w-full" />
                  <div className="h-1.5 bg-white/20 rounded w-4/5" />
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
              <div className="space-y-3">
                {/* Project thumbnail */}
                <div className="h-24 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-xl relative overflow-hidden">
                  {/* Chart pattern overlay */}
                  <div className="absolute inset-0 opacity-30 flex items-end justify-around p-3">
                    {[40, 70, 50, 90, 60, 80].map((height, i) => (
                      <div
                        key={i}
                        className="w-2 bg-white/40 rounded-t"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
                {/* Project title */}
                <div className="h-2.5 bg-white/30 rounded w-3/4" />
                {/* Project description lines */}
                <div className="space-y-1.5">
                  <div className="h-1.5 bg-white/20 rounded w-full" />
                  <div className="h-1.5 bg-white/20 rounded w-3/4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Skills/Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            { label: 'React', color: 'from-blue-500/30 to-cyan-500/30' },
            { label: 'TypeScript', color: 'from-blue-600/30 to-blue-400/30' },
            { label: 'Node.js', color: 'from-green-500/30 to-emerald-500/30' },
            { label: 'Python', color: 'from-yellow-500/30 to-orange-500/30' },
            { label: 'SQL', color: 'from-purple-500/30 to-pink-500/30' },
          ].map((skill, i) => (
            <div
              key={i}
              className={`
                px-3 py-1.5 rounded-lg bg-gradient-to-r ${skill.color}
                border border-white/10 backdrop-blur-sm
              `}
            >
              <div className="h-1.5 w-12 bg-white/40 rounded" />
            </div>
          ))}
        </div>

        {/* Decorative glow */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none pulse-glow" />
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none pulse-glow" />
      </div>

      <style jsx>{`
        @keyframes shimmer-bar {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .shimmer-bar {
          background-size: 200% 100%;
          animation: shimmer-bar 3s ease-in-out infinite;
        }

        .hover-tilt:hover > div {
          transform: perspective(1000px) rotateY(2deg) rotateX(-2deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .float,
          .shimmer-bar,
          .pulse-glow,
          .hover-tilt:hover > div {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
