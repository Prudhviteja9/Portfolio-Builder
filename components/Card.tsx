import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8
        ${hover ? 'group transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20' : 'transition-all duration-300'}
        ${className}
      `}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {hover && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
