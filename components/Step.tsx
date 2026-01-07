import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

export default function Step({ number, title, description }: StepProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-2xl font-bold shadow-lg shadow-purple-500/30">
        {number}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-white/70 max-w-xs">{description}</p>
    </div>
  );
}
