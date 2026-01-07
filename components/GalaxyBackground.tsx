'use client';

import { useState, useEffect } from 'react';

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  angle: number;
}

export default function GalaxyBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Shooting stars - every 5 seconds exactly
    if (reducedMotion) return;

    let starId = 0;

    const createShootingStar = () => {
      const newStar: ShootingStar = {
        id: starId++,
        startX: 10 + Math.random() * 70, // Start in viewable area (10-80%)
        startY: 5 + Math.random() * 50, // Top portion (5-55%)
        angle: -40 - Math.random() * 15, // Angle between -40 and -55 degrees
      };

      setShootingStars((prev) => [...prev, newStar]);

      // Remove star after animation completes (1100ms)
      setTimeout(() => {
        setShootingStars((prev) => prev.filter((star) => star.id !== newStar.id));
      }, 1100);
    };

    // Create first shooting star after 2 seconds (so user sees the page first)
    const initialTimeout = setTimeout(createShootingStar, 2000);

    // Then create a shooting star every 5 seconds
    const interval = setInterval(createShootingStar, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [reducedMotion]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Layer A: Galaxy image with drift + zoom + rotate */}
      <div
        className={`absolute inset-0 galaxy-layer ${!reducedMotion ? 'galaxy-animate' : ''}`}
        style={{
          backgroundImage: 'url(/galaxy.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Layer B: Nebula fog layer - moving gradient blobs */}
      <div className="absolute inset-0 nebula-layer">
        {/* Large nebula blobs with mix-blend-mode */}
        <div
          className={`absolute top-0 left-1/4 w-[900px] h-[900px] rounded-full ${
            !reducedMotion ? 'nebula-drift-1' : ''
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)',
            filter: 'blur(60px)',
            mixBlendMode: 'screen',
          }}
        />

        <div
          className={`absolute top-1/3 right-1/4 w-[1000px] h-[1000px] rounded-full ${
            !reducedMotion ? 'nebula-drift-2' : ''
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, rgba(59, 130, 246, 0.06) 40%, transparent 70%)',
            filter: 'blur(70px)',
            mixBlendMode: 'screen',
          }}
        />

        <div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full ${
            !reducedMotion ? 'nebula-drift-3' : ''
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.18) 0%, rgba(236, 72, 153, 0.05) 40%, transparent 70%)',
            filter: 'blur(65px)',
            mixBlendMode: 'screen',
          }}
        />

        <div
          className={`absolute top-2/3 left-1/3 w-[700px] h-[700px] rounded-full ${
            !reducedMotion ? 'nebula-drift-4' : ''
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0.06) 40%, transparent 70%)',
            filter: 'blur(55px)',
            mixBlendMode: 'screen',
          }}
        />

        <div
          className={`absolute top-1/4 right-1/3 w-[850px] h-[850px] rounded-full ${
            !reducedMotion ? 'nebula-drift-5' : ''
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.16) 0%, rgba(147, 51, 234, 0.04) 40%, transparent 70%)',
            filter: 'blur(60px)',
            mixBlendMode: 'screen',
          }}
        />
      </div>

      {/* Layer C: Twinkling stars */}
      <div className="absolute inset-0 stars-layer">
        {/* Generate twinkling stars */}
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-[3px] h-[3px] bg-white rounded-full ${
              !reducedMotion ? 'star-twinkle' : 'opacity-60'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: reducedMotion ? 0.6 : undefined,
              animationDelay: reducedMotion ? '0s' : `${Math.random() * 4}s`,
              animationDuration: reducedMotion ? '0s' : `${2 + Math.random() * 3}s`,
              boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.5)',
            }}
          />
        ))}

        {/* Smaller stars */}
        {[...Array(120)].map((_, i) => (
          <div
            key={`small-${i}`}
            className={`absolute w-[1.5px] h-[1.5px] bg-white rounded-full ${
              !reducedMotion ? 'star-twinkle-subtle' : 'opacity-40'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: reducedMotion ? 0.4 : undefined,
              animationDelay: reducedMotion ? '0s' : `${Math.random() * 5}s`,
              animationDuration: reducedMotion ? '0s' : `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      {!reducedMotion &&
        shootingStars.map((star) => (
          <div
            key={star.id}
            className="absolute shooting-star"
            style={{
              top: `${star.startY}%`,
              left: `${star.startX}%`,
              transform: `rotate(${star.angle}deg)`,
            }}
          >
            <div className="shooting-star-tail" />
          </div>
        ))}

      {/* Layer D: Vignette overlay for readability */}
      <div className="absolute inset-0 vignette-overlay" />

      {/* Additional dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
    </div>
  );
}
