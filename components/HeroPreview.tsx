'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroPreview() {
  const [imageError, setImageError] = useState(false);
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
        relative w-full group
        ${!reducedMotion ? 'hero-preview-hover' : ''}
      `}
      style={{
        perspective: '1000px',
      }}
    >
      {/* Main Preview Container */}
      <div
        className={`
          relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl
          overflow-hidden shadow-2xl shadow-purple-500/20
          ${!reducedMotion ? 'float transition-all duration-500' : ''}
        `}
      >
        {!imageError ? (
          <>
            {/* Portfolio Preview Image */}
            <div className="relative w-full aspect-[4/3]">
              <img
                src="/portfolio-preview.svg"
                alt="Portfolio Preview Mockup"
                className="w-full h-full object-contain p-4"
                onError={() => {
                  console.error('Failed to load portfolio preview image');
                  setImageError(true);
                }}
              />

              {/* Shimmer Overlay */}
              {!reducedMotion && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="shimmer-overlay" />
                </div>
              )}
            </div>
          </>
        ) : (
          /* Fallback UI */
          <div className="w-full aspect-[4/3] p-8 flex flex-col justify-center">
            <div className="space-y-6">
              {/* Title */}
              <div className="text-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  Portfolio Preview
                </h3>
                <p className="text-white/60 text-sm">Professional portfolio layout</p>
              </div>

              {/* Skeleton Content */}
              <div className="space-y-4">
                {/* Header Bar */}
                <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-2/3 mx-auto" />

                {/* Content Blocks */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="col-span-1 space-y-3">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 border border-white/10 mx-auto" />
                    <div className="h-2 bg-white/20 rounded w-full" />
                    <div className="h-2 bg-white/15 rounded w-3/4 mx-auto" />
                  </div>
                  <div className="col-span-2 space-y-3">
                    <div className="h-24 bg-white/10 rounded-2xl border border-white/10" />
                    <div className="h-24 bg-white/10 rounded-2xl border border-white/10" />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 justify-center flex-wrap mt-6">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind'].map((tag) => (
                    <div
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-xs text-white/60"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Decorative Glows */}
        <div
          className={`absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none ${
            !reducedMotion ? 'pulse-glow' : ''
          }`}
        />
        <div
          className={`absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none ${
            !reducedMotion ? 'pulse-glow' : ''
          }`}
          style={{ animationDelay: '1s' }}
        />
      </div>

      <style jsx>{`
        .shimmer-overlay {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          animation: shimmer-slide 3s ease-in-out infinite;
        }

        @keyframes shimmer-slide {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }

        .hero-preview-hover:hover > div {
          transform: perspective(1000px) rotateY(2deg) rotateX(-2deg) translateY(-4px);
        }

        @media (prefers-reduced-motion: reduce) {
          .float,
          .shimmer-overlay,
          .pulse-glow,
          .hero-preview-hover:hover > div {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
